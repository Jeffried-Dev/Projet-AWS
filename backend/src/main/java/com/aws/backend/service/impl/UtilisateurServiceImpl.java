package com.aws.backend.service.impl;

import com.aws.backend.config.JwtService;
import com.aws.backend.domain.User;
import com.aws.backend.domain.Utilisateur;
import com.aws.backend.domain.dto.UtilisateurDto;
import com.aws.backend.repo.UtilisateurRepo;
import com.aws.backend.service.NotificationService;
import com.aws.backend.service.mapper.UtilisateurMapper;
import com.aws.backend.service.UtilisateurService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.server.ResponseStatusException;

import java.util.Date;
import java.util.Objects;
import java.util.Random;

@Service
public class UtilisateurServiceImpl implements UtilisateurService {
    @Autowired
    private UtilisateurRepo utilisateurRepository;
    @Autowired
    private UtilisateurMapper utilisateurMapper;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private JwtService jwtManager;
    @Autowired
    private NotificationService notificationService;

    @Override
    public UtilisateurDto signUp(UtilisateurDto UtilisateurDto) {
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        UtilisateurDto.setPassword(passwordEncoder.encode(UtilisateurDto.getPassword()));
        UtilisateurDto newUserDto = new UtilisateurDto();
        if(!mailExist(UtilisateurDto.getMail())){
            String activationkey = generateActivationKey();
            Date date = new Date();
            Utilisateur user = utilisateurMapper.toEntity(UtilisateurDto);
            user.setActived(false);
            user.setRole("UTILISATEUR");
            user.setActivationKey(activationkey);
            user.setCreatedDate(date);
            newUserDto = utilisateurMapper.toDto(utilisateurRepository.save(user));
            notificationService.envoyer(user);
            newUserDto.setToken("check your mail");
        }else{
            newUserDto.setToken("mail already exist");
        }
        return newUserDto;
    }

    private String generateActivationKey(){
        Random random = new Random();
        String alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        StringBuilder sb = new StringBuilder();
        int length = 6;
        for(int i = 0; i < length; i++) {
            int index = random.nextInt(alphabet.length());
            char randomChar = alphabet.charAt(index);
            sb.append(randomChar);
        }
        String randomString = sb.toString();
        return randomString.toLowerCase();
    }

    public Boolean mailExist(String mail){
        User user = utilisateurRepository.findByMail(mail);
        return user != null;
    }

    @Override
    public UtilisateurDto login(UtilisateurDto UtilisateurDto) {
        Utilisateur Utilisateur = utilisateurRepository.findByMail(UtilisateurDto.getMail());
        UtilisateurDto loguser = new UtilisateurDto();
        if (passwordEncoder.matches(UtilisateurDto.getPassword(), Utilisateur.getPassword())) {
            if(!Utilisateur.getActived()){
                loguser.setToken("Account not activated");
            }else{
                loguser = utilisateurMapper.toDto(Utilisateur);
                loguser.setToken(jwtManager.generate(Utilisateur));
            }
        }else {
            loguser.setToken(null);
        }
        return loguser;
    }

    @Override
    public UtilisateurDto UtilisateurUpdate(UtilisateurDto UtilisateurDto) {
        Utilisateur utilisateur = utilisateurRepository.findByMail(UtilisateurDto.getMail());
        utilisateurMapper.updateFromDto(UtilisateurDto,utilisateur);
        return utilisateurMapper.toDto(utilisateurRepository.save(utilisateur));
    }

    @Override
    public ResponseEntity<?> UtilisateurDelete(int UtilisateurId) {
        utilisateurRepository.delete(utilisateurMapper.toEntity(UtilisateurGet(UtilisateurId)));
        return ResponseEntity.ok().build();
    }

    @Override
    public UtilisateurDto UtilisateurGet(int utilisateurId) {
        return utilisateurMapper.toDto(utilisateurRepository.findById(utilisateurId));
    }

    @Override
    public UtilisateurDto signUpComplete(String mail, String Code) {
        Utilisateur utilisateur = utilisateurRepository.findByMail(mail);
        System.out.println(mail);
        Utilisateur signUser = new Utilisateur();
        if(Objects.equals(utilisateur.getActivationKey(), Code)){
            utilisateur.setActived(true);
            utilisateur.setActivationKey(null);signUser = utilisateurRepository.save(utilisateur);
        }
        return utilisateurMapper.toDto(signUser);
    }

    @Override
    public UtilisateurDto passwordRecover(String mail) {
        Utilisateur utilisateur = utilisateurRepository.findByMail(mail);
        String activationkey = generateActivationKey();
        Date date = new Date();
        utilisateur.setResetDate(date);
        utilisateur.setResetKey(activationkey);
        Utilisateur signUser = utilisateurRepository.save(utilisateur);
        return utilisateurMapper.toDto(signUser);
    }

    @Override
    public UtilisateurDto passwordRecoverComplete(String key,UtilisateurDto UtilisateurDto) {
        Utilisateur utilisateur = utilisateurRepository.findByMail(UtilisateurDto.getMail());
        Utilisateur signUser = new Utilisateur();
        if(Objects.equals(utilisateur.getResetKey(), key)){
            utilisateur.setPassword(passwordEncoder.encode(UtilisateurDto.getPassword()));
            utilisateur.setResetDate(null);
            utilisateur.setResetKey(null);
            signUser = utilisateurRepository.save(utilisateur);
        }

//        sendMail("Recover Password Complete", user.getMail(),"Recover Password Complete" );
//        signUser.setState("Recover Password Complete");
        return utilisateurMapper.toDto(signUser);
    }
    @Override
    public User loadUserByUsername(String username) {
        return utilisateurRepository.findByMail(username);
    }
}

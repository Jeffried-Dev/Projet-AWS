package com.aws.backend.service.impl;

import com.aws.backend.config.JwtService;
import com.aws.backend.domain.Administrateur;
import com.aws.backend.domain.User;
import com.aws.backend.domain.dto.AdministrateurDto;
import com.aws.backend.repo.AdministrateurRepo;
import com.aws.backend.service.AdministrateurService;
import com.aws.backend.service.NotificationService;
import com.aws.backend.service.mapper.AdministrateurMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Date;
import java.util.Objects;
import java.util.Random;
@Service
public class AdministrateurServiceImpl implements AdministrateurService {
    @Autowired
    private AdministrateurRepo administrateurRepository;
    @Autowired
    private AdministrateurMapper administrateurMapper;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private JwtService jwtManager;
    @Autowired
    private NotificationService notificationService;
    @Override
    public AdministrateurDto signUp(AdministrateurDto AdministrateurDto) {
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        AdministrateurDto.setPassword(passwordEncoder.encode(AdministrateurDto.getPassword()));
        AdministrateurDto newUserDto = new AdministrateurDto();
        if(!mailExist(AdministrateurDto.getMail())){
            String activationkey = generateActivationKey();
            Date date = new Date();
            Administrateur user = administrateurMapper.toEntity(AdministrateurDto);
            user.setActived(false);
            user.setActivationKey(activationkey);
            user.setCreatedDate(date);
            newUserDto = administrateurMapper.toDto(administrateurRepository.save(user));
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
        User user = administrateurRepository.findByMail(mail);
        return user != null;
    }

    @Override
    public AdministrateurDto login(AdministrateurDto AdministrateurDto) {
        Administrateur Utilisateur = administrateurRepository.findByMail(AdministrateurDto.getMail());
        AdministrateurDto loguser = new AdministrateurDto();
        if (passwordEncoder.matches(AdministrateurDto.getPassword(), Utilisateur.getPassword())) {
            if(!Utilisateur.getActived()){
                loguser.setToken("Account not activated");
            }else{
                loguser = administrateurMapper.toDto(Utilisateur);
                loguser.setToken(jwtManager.generate(Utilisateur));
            }
        }else {
            loguser.setToken(null);
        }
        return loguser;
    }

    @Override
    public AdministrateurDto AdministrateurUpdate(AdministrateurDto AdministrateurDto) {
        Administrateur utilisateur = administrateurRepository.findByMail(AdministrateurDto.getMail());
        administrateurMapper.updateFromDto(AdministrateurDto,utilisateur);
        return administrateurMapper.toDto(administrateurRepository.save(utilisateur));
    }

    @Override
    public ResponseEntity<?> AdministrateurDelete(int AdministrateurId) {
        administrateurRepository.delete(administrateurMapper.toEntity(AdministrateurGet(AdministrateurId)));
        return ResponseEntity.ok().build();
    }

    @Override
    public AdministrateurDto AdministrateurGet(int AdministrateurId) {
        return administrateurMapper.toDto(administrateurRepository.findById(AdministrateurId));
    }

    @Override
    public AdministrateurDto signUpComplete(String mail, String Code) {
        Administrateur utilisateur = administrateurRepository.findByMail(mail);
        Administrateur signUser = new Administrateur();
        if(Objects.equals(utilisateur.getActivationKey(), Code)) {
            utilisateur.setActived(true);
            utilisateur.setActivationKey(null);
            signUser = administrateurRepository.save(utilisateur);
        }
//        sendMail("registration complete",signUser.getMail(), "registration complete");
        return administrateurMapper.toDto(signUser);
    }

    @Override
    public AdministrateurDto passwordRecover(String mail) {
        Administrateur utilisateur = administrateurRepository.findByMail(mail);
        String activationkey = generateActivationKey();
        Date date = new Date();
        utilisateur.setResetDate(date);
        utilisateur.setResetKey(activationkey);
        Administrateur signUser = administrateurRepository.save(utilisateur);
        //String link = "http://localhost:4200/auth/reset-password-complete?key="+ activationkey;
//        sendMail(link,user.getMail(),"Recover Password");
//        signUser.setState("Recover Password Complete");
        return administrateurMapper.toDto(signUser);
    }

    @Override
    public AdministrateurDto passwordRecoverComplete(String code,AdministrateurDto AdministrateurDto) {
        Administrateur utilisateur = administrateurRepository.findByMail(AdministrateurDto.getMail());
        Administrateur signUser = new Administrateur();
        if(Objects.equals(utilisateur.getResetKey(), code)) {
            utilisateur.setPassword(passwordEncoder.encode(AdministrateurDto.getPassword()));
            utilisateur.setResetDate(null);
            utilisateur.setResetKey(null);
            signUser = administrateurRepository.save(utilisateur);
        }
//        sendMail("Recover Password Complete", user.getMail(),"Recover Password Complete" );
//        signUser.setState("Recover Password Complete");
        return administrateurMapper.toDto(signUser);
    }
    @Override
    public User loadUserByUsername(String username) {
        return administrateurRepository.findByMail(username);
    }
}

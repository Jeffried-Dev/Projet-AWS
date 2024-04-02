package com.aws.backend.service.impl;

import com.aws.backend.config.JwtService;
import com.aws.backend.domain.Entreprise;
import com.aws.backend.domain.User;
import com.aws.backend.domain.dto.EntrepriseDto;
import com.aws.backend.repo.EntrepriseRepo;
import com.aws.backend.service.EntrepriseService;
import com.aws.backend.service.NotificationService;
import com.aws.backend.service.mapper.EntrepriseMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Date;
import java.util.List;
import java.util.Random;
@Service
public class EntrepriseServiceImpl implements EntrepriseService {
    @Autowired
    private EntrepriseRepo entrepriseRepository;
    @Autowired
    private EntrepriseMapper entrepriseMapper;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private JwtService jwtManager;
    @Autowired
    private NotificationService notificationService;
    @Override
    public EntrepriseDto signUp(EntrepriseDto EntrepriseDto) {
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        EntrepriseDto.setPassword(passwordEncoder.encode(EntrepriseDto.getPassword()));
        EntrepriseDto newUserDto = new EntrepriseDto();
        if(!mailExist(EntrepriseDto.getMail())){
            String activationkey = generateActivationKey();
            Date date = new Date();
            Entreprise user = entrepriseMapper.toEntity(EntrepriseDto);
            user.setActived(false);
            user.setActivationKey(activationkey);
            user.setCreatedDate(date);
            newUserDto = entrepriseMapper.toDto(entrepriseRepository.save(user));
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
        int length = 4;
        for(int i = 0; i < length; i++) {
            int index = random.nextInt(alphabet.length());
            char randomChar = alphabet.charAt(index);
            sb.append(randomChar);
        }
        String randomString = sb.toString();
        return randomString.toLowerCase();
    }

    public Boolean mailExist(String mail){
        User user = entrepriseRepository.findByMail(mail);
        return user != null;
    }

    @Override
    public EntrepriseDto login(EntrepriseDto EntrepriseDto) {
        Entreprise Utilisateur = entrepriseRepository.findByMail(EntrepriseDto.getMail());
        EntrepriseDto loguser = new EntrepriseDto();
        if (passwordEncoder.matches(EntrepriseDto.getPassword(), Utilisateur.getPassword())) {
            if(!Utilisateur.getActived()){
                loguser.setToken("Account not activated");
            }else{
                loguser = entrepriseMapper.toDto(Utilisateur);
                loguser.setToken(jwtManager.generate(Utilisateur));
            }
        }else {
            loguser.setToken(null);
        }
        return loguser;
    }

    @Override
    public EntrepriseDto EntrepriseUpdate(EntrepriseDto EntrepriseDto) {
        Entreprise utilisateur = entrepriseRepository.findByMail(EntrepriseDto.getMail());
        entrepriseMapper.updateFromDto(EntrepriseDto,utilisateur);
        return entrepriseMapper.toDto(entrepriseRepository.save(utilisateur));
    }

    @Override
    public ResponseEntity<?> EntrepriseDelete(int EntrepriseId) {
        entrepriseRepository.delete(entrepriseMapper.toEntity(EntrepriseGet(EntrepriseId)));
        return ResponseEntity.ok().build();
    }

    @Override
    public EntrepriseDto EntrepriseGet(int EntrepriseId) {
        return Dto(entrepriseRepository.findById(EntrepriseId));
    }

    @Override
    public List<Entreprise> EntrepriseGetList() {
        return entrepriseRepository.findAll();
    }

    @Override
    public EntrepriseDto signUpComplete(String mail, String Code) {
        Entreprise utilisateur = entrepriseRepository.findByMail(mail);
        utilisateur.setActived(true);
        utilisateur.setActivationKey(null);
        Entreprise signUser = entrepriseRepository.save(utilisateur);
//        sendMail("registration complete",signUser.getMail(), "registration complete");
        return entrepriseMapper.toDto(signUser);
    }

    @Override
    public EntrepriseDto passwordRecover(String mail) {
        Entreprise utilisateur = entrepriseRepository.findByMail(mail);
        String activationkey = generateActivationKey();
        Date date = new Date();
        utilisateur.setResetDate(date);
        utilisateur.setResetKey(activationkey);
        Entreprise signUser = entrepriseRepository.save(utilisateur);
        //String link = "http://localhost:4200/auth/reset-password-complete?key="+ activationkey;
//        sendMail(link,user.getMail(),"Recover Password");
//        signUser.setState("Recover Password Complete");
        return entrepriseMapper.toDto(signUser);
    }

    @Override
    public EntrepriseDto passwordRecoverComplete(EntrepriseDto EntrepriseDto) {
        Entreprise utilisateur = entrepriseRepository.findByMail(EntrepriseDto.getMail());
        utilisateur.setPassword(passwordEncoder.encode(EntrepriseDto.getPassword()));
        utilisateur.setResetDate(null);
        utilisateur.setResetKey(null);
        Entreprise signUser = entrepriseRepository.save(utilisateur);
//        sendMail("Recover Password Complete", user.getMail(),"Recover Password Complete" );
//        signUser.setState("Recover Password Complete");
        return entrepriseMapper.toDto(signUser);
    }
    @Override
    public User loadUserByUsername(String username) {
        return entrepriseRepository.findByMail(username);
    }
}

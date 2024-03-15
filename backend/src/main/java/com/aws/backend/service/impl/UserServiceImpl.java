package com.aws.backend.service.impl;


import com.aws.backend.config.JwtService;
import com.aws.backend.domain.User;
import com.aws.backend.domain.dto.UserDto;
import com.aws.backend.repo.UserRepo;
import com.aws.backend.service.UserService;
import com.aws.backend.service.mapper.UserMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.*;

@Service
public class UserServiceImpl implements UserService {
    private static final Logger log = LoggerFactory.getLogger(UserServiceImpl.class);
    @Autowired
    private UserRepo userRepository;
    @Autowired
    private UserMapper userMapper;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private JwtService jwtManager;

    @Override
    public User userGet(Integer userId) {
        return userRepository.findById(userId).orElseThrow(()-> new ResponseStatusException(HttpStatus.UNAUTHORIZED, "user not found"));
    }
    public User loadUserByUsername(String username){
        return userRepository.findByMail(username);
    }

    @Override
    public UserDto signUpComplete(User user) {
        user.setActived(true);
        user.setActivationKey(null);
        User signUser = userRepository.save(user);
//        Role role = roleRepository.findByName("USER");
//        addRoleToUser(role,user);
//        sendMail("registration complete",signUser.getMail(), "registration complete");
        return userMapper.toDto(signUser);
    }

    @Override
    public UserDto passwordRecover(User user) {
        String activationkey = generateActivationKey();
        Date date = new Date();
        user.setResetDate(date);
        user.setResetKey(activationkey);
        User signUser = userRepository.save(user);
        String link = "http://localhost:4200/auth/reset-password-complete?key="+ activationkey;
//        sendMail(link,user.getMail(),"Recover Password");
//        signUser.setState("Recover Password Complete");
        return userMapper.toDto(signUser);
    }

    @Override
    public UserDto passwordRecoverComplete(User user,UserDto userDto) {
        user.setPassword(passwordEncoder.encode(userDto.getPassword()));
        user.setResetDate(null);
        user.setResetKey(null);
        User signUser = userRepository.save(user);
//        sendMail("Recover Password Complete", user.getMail(),"Recover Password Complete" );
//        signUser.setState("Recover Password Complete");
        return userMapper.toDto(signUser);
    }

    @Override
    public List<UserDto> getUsers() {
        List<UserDto> userDtoList = new ArrayList<>();
        List<User> userList = userRepository.findAll();
        for(User user : userList){
            user.setPassword(null);
            userDtoList.add(userMapper.toDto(user));
        }
        return userDtoList;
    }

    @Override
    public UserDto signUp(UserDto userDto) {
        log.info("calling signUp....");
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        userDto.setPassword(passwordEncoder.encode(userDto.getPassword()));
        UserDto newUserDto = new UserDto();
        if(!mailExist(userDto.getMail())){
            if(!usernameExist(userDto.getUsername())){
                String activationkey = generateActivationKey();
                Date date = new Date();
                User user = userMapper.toEntity(userDto);
                user.setActived(false);
                user.setActivationKey(activationkey);
                user.setCreatedDate(date);
                newUserDto = userMapper.toDto(userRepository.save(user));
//                String link = "http://localhost:4200/auth/sign-up-complete?key=" + activationkey;
//                sendMail(link,newUserDto.getMail(),"Waiting for complete registration");
                newUserDto.setToken("mail or username don't exist");
            }else{
                newUserDto.setToken("username already exist");
            }

        }else{
            newUserDto.setToken("mail already exist");
        }

        return newUserDto;
    }

    public Boolean mailExist(String mail){
        User user = userRepository.findByMail(mail);
        return user != null;
    }

    @Override
    public UserDto login(User user, UserDto userDto) {
        log.info("calling login....");
        UserDto loguser = new UserDto();
        if (passwordEncoder.matches(userDto.getPassword(), user.getPassword())) {
            log.info("password matched");
            if(!user.getActived()){
                loguser.setToken("null");
            }else{
//                List<RoleDto> roleDtoList = new ArrayList<>();
//                for(Role role : user.getRoles()){
//                    roleDtoList.add(roleMapper.toDto(role));
//                }
                loguser = userMapper.toDto(user);
//                loguser.setRoles(roleDtoList);
//                loguser.setToken(generateToken(user));
//                loguser.setRefreshtoken(generateRefreshToken(user));
            }
        }else {
            loguser.setToken(null);
        }
        return loguser;
    }

    @Override
    public boolean validateToken(String token) {
        try{
            jwtManager.isTokenExpired(token);
        }catch (Exception e){
            return false;
        }
        return true;
    }

    @Override
    public UserDto refreshToken(String request) {
        String token = request.substring("Bearer ".length());
        String username = jwtManager.extractUsername(token);
        User user = userRepository.findByUsername(username);
        UserDto loguser = new UserDto();
        if (jwtManager.isTokenExpired(token)) {
//            loguser.setToken(generateToken(user));
//            loguser.setRefreshtoken(generateRefreshToken(user));
        }else {
            loguser.setToken(null);
        }
        return loguser;
    }

    @Override
    public UserDto userUpdate(User user, UserDto userDto) {
        userMapper.updateFromDto(userDto,user);
        return userMapper.toDto(userRepository.save(user));
    }

    @Override
    public ResponseEntity<?> userDelete(User user) {
        userRepository.delete(user);
        return ResponseEntity.ok().build();
    }

    private String generateActivationKey(){
        Random random = new Random();
        String alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        StringBuilder sb = new StringBuilder();
        int length = 20;
        for(int i = 0; i < length; i++) {
            int index = random.nextInt(alphabet.length());
            char randomChar = alphabet.charAt(index);
            sb.append(randomChar);
        }
        String randomString = sb.toString();
        return randomString.toLowerCase();
    }

//    public String generateToken(User user) {
//        Map<String, Object> claims = new HashMap<>();
//        claims.put("username", user.getUsername());
//        //claims.put("roles", user.getRoles());
//        claims.put("userId", user.getId());
//        String subject = user.getUsername();
//        return jwtManager.generate(user.getUsername());
//    }
//
//    public String generateRefreshToken(User user) {
//        String subject = user.getUsername();
//        Map<String, Object> refresh = new HashMap<>();
//        refresh.put("username", user.getUsername());
//        refresh.put("userId", user.getId());
//        return jwtManager.generateJwt(refresh, subject);
//    }

    public Boolean usernameExist(String username){
        User user = userRepository.findByUsername(username);
        return user != null;
    }
}

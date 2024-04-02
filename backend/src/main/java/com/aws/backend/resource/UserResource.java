package com.aws.backend.resource;

import com.aws.backend.config.JwtService;
import com.aws.backend.service.NotificationService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static org.springframework.http.HttpHeaders.AUTHORIZATION;

@Slf4j
@AllArgsConstructor
@RestController
@RequestMapping(consumes = MediaType.APPLICATION_JSON_VALUE,path = "/utilisateur")
public class UserResource {
    private AuthenticationManager authenticationManager;
    private JwtService jwtService;
    @Autowired
    private NotificationService notificationService;


//    @PostMapping(path = "/inscription")
//    public void inscription(@RequestBody UserDto utilisateur) {
//        userService.signUp(utilisateur);
//    }
//
//    @PostMapping(path = "/activation")
//    public void activation(@RequestBody Map<String, String> activation) {
//        //userService.activation(activation);
//    }
//
//    @PostMapping(path = "/test")
//    public int test() {
//        User user = new User();
//        user.setMail("nouadjenouleho@gmail.com");
//        user.setName("Jeffried");
//        user.setActivationKey("ygheauozriefygtuyihoeiughzkrfdj");
//        notificationService.envoyer(user);
//        return notificationService.test();
//    }
//
//    @PostMapping(path = "/connexion")
//    public Map<String, String> connexion(@RequestBody UserDto authentificationDTO) {
//        final Authentication authenticate = authenticationManager.authenticate(
//                new UsernamePasswordAuthenticationToken(authentificationDTO.getMail(), authentificationDTO.getPassword())
//        );
//
//        if(authenticate.isAuthenticated()) {
//            return this.jwtService.generate(authentificationDTO.getMail());
//        }
//        return null;
//    }

    //old

//    @PutMapping(path = "/update", consumes = { MediaType.APPLICATION_JSON_VALUE })
//    public ResponseEntity<UserDto> userUpdate(@RequestBody UserDto userDto) {
//        User user = userService.userGet(userDto.getId());
//        Map<String, Object> output = new HashMap<>();
//        if(user == null || userDto.getPassword() == null){
//            output.put("status", 400);
//            output.put("message", "User don't exist");
//        }else{
//            UserDto updateUserDto = userService.userUpdate(user,userDto);
//            output.put("status", 200);
//            output.put("message", "User updated");
//            output.put("data", updateUserDto);
//        }
//        return new ResponseEntity(output, HttpStatus.OK);
//    }
//
//    @DeleteMapping(path = "/delete/{id}", consumes = { MediaType.APPLICATION_JSON_VALUE })
//    public ResponseEntity<?> userDelete(@PathVariable(value = "id")  Integer userId) {
//        User user = userService.userGet(userId);
//        Map<String, Object> output = new HashMap<>();
//        if(user == null){
//            output.put("status", 400);
//            output.put("message", "User don't exist");
//        }else{
//            userService.userDelete(user);
//            output.put("status", 200);
//            output.put("message", "User deleted");
//        }
//        return new ResponseEntity(output, HttpStatus.OK);
//    }
//
//    @GetMapping(path = "/get/{id}", consumes = { MediaType.APPLICATION_JSON_VALUE })
//    public ResponseEntity<UserDto> userRead(@PathVariable(value = "id")  Integer userId) {
//        User user = userService.userGet(userId);
//        Map<String, Object> output = new HashMap<>();
//        if(user == null){
//            output.put("status", 400);
//            output.put("message", "User don't exist");
//        }else{
//            output.put("status", 200);
//            output.put("message", "User found");
//            output.put("data", user);
//        }
//        return new ResponseEntity(output, HttpStatus.OK);
//    }
//
//    @GetMapping(path = "/list")
//    public ResponseEntity<List<UserDto>> userlist() {
//        List<UserDto> dtoList = userService.getUsers();
//        Map<String, Object> output = new HashMap<>();
//        if(dtoList == null){
//            output.put("status", 400);
//            output.put("message", "list User don't exist");
//        }else{
//            output.put("status", 200);
//            output.put("message", "list User found");
//            output.put("data", dtoList);
//        }
//        return new ResponseEntity(output, HttpStatus.OK);
//    }
//
//    @PostMapping(path = "/login", consumes = { MediaType.APPLICATION_JSON_VALUE })
//    public ResponseEntity<UserDto> login(@RequestBody  UserDto userDto) {
//        User user = userRepo.findByMail(userDto.getMail());
//        Map<String, Object> output = new HashMap<>();
//        if(user == null || userDto.getMail() == null || userDto.getPassword() == null){
//            output.put("status", 400);
//            output.put("message", "User don't exist");
//        }else{
//            UserDto logUser =  userService.login(user,userDto);
//            if(logUser.getToken() == null){
//                output.put("status", 403);
//                output.put("message", "Password and mail don't matched");
//            }else if(logUser.getToken().equals("null")){
//                output.put("status", 402);
//                output.put("message", "User don't activated");
//            }else {
//                output.put("status", 200);
//                output.put("message", "User found");
//                output.put("data", logUser);
//            }
//        }
//        return new ResponseEntity(output, HttpStatus.OK);
//    }
//
//    @GetMapping(path = "/refresh")
//    public ResponseEntity<?> refreshToken(HttpServletRequest request, HttpServletResponse response) throws IOException {
//        String authorizationHeader = request.getHeader(AUTHORIZATION);
//        Map<String, Object> output = new HashMap<>();
//        if(authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
//            UserDto refreshUser = userService.refreshToken(authorizationHeader);
//            if(refreshUser.getToken() == null){
//                output.put("status", 400);
//                output.put("message", "User Token invalid");
//            }else{
//                output.put("status", 200);
//                output.put("message", "User Tokens refresh");
//                output.put("data", refreshUser);
//            }
//        }else {
//            output.put("status", 401);
//            output.put("message", "Refresh Token is missing");
//        }
//        return new ResponseEntity(output, HttpStatus.OK);
//    }
//
//    @PostMapping(path = "/signup", consumes = { MediaType.APPLICATION_JSON_VALUE })
//    public ResponseEntity<UserDto> signUp(@RequestBody  UserDto userDto) {
//        Map<String, Object> output = new HashMap<>();
//        if(userDto.getPassword() == null || userDto.getMail() == null){
//            output.put("status", 400);
//            output.put("message", "Input Missing");
//        }else{
//            UserDto signUpUser = userService.signUp(userDto);
//            if(signUpUser.getToken().equals("mail already exist")){
//                output.put("status", 402);
//                output.put("message", "mail  already exist");
//            }else if(signUpUser.getToken().equals("username already exist")){
//                output.put("status", 403);
//                output.put("message", "username  already exist");
//            }else {
//                output.put("status", 200);
//                output.put("message", "User Registered activation");
//                output.put("data", signUpUser);
//            }
//        }
//        return new ResponseEntity(output, HttpStatus.OK);
//    }
//
//    @GetMapping(path = "/completeSignup/{key}")
//    public ResponseEntity<UserDto> signUpComplete(@PathVariable(value = "key")  String key) {
//        User user = userRepo.findByActivationKey(key);
//        Map<String, Object> output = new HashMap<>();
//        if(user == null){
//            output.put("status", 401);
//            output.put("message", "user already activated");
//        }else {
//            UserDto signUpUser = userService.signUpComplete(user);
//            output.put("status", 200);
//            output.put("message", "User Registered Complete");
//            output.put("data", signUpUser);
//        }
//        return new ResponseEntity(output, HttpStatus.OK);
//    }
//
//    @GetMapping(path = "/passwordRecover/{mail}")
//    public ResponseEntity<UserDto> passwordRecover(@PathVariable(value = "mail") String mail) {
//        User user = userRepo.findByMail(mail);
//        Map<String, Object> output = new HashMap<>();
//        if(user == null){
//            output.put("status", 400);
//            output.put("message", "user not found");
//        }else {
//            UserDto recoverUser = userService.passwordRecover(user);
//            output.put("status", 200);
//            output.put("message", "User Recover activation");
//            output.put("data", recoverUser);
//        }
//        return new ResponseEntity(output, HttpStatus.OK);
//    }
//
//    @PostMapping(path = "/completepasswordRecover/{key}", consumes = { MediaType.APPLICATION_JSON_VALUE })
//    public ResponseEntity<UserDto> passwordRecoverComplete(@PathVariable(value = "key")  String key,@RequestBody UserDto userDto) {
//        Map<String, Object> output = new HashMap<>();
//        User user = userRepo.findByResetKey(key);
//        if(user == null){
//            output.put("status", 400);
//            output.put("message", "user not found");
//        }else {
//            UserDto recoverUser = userService.passwordRecoverComplete(user,userDto);
//            output.put("status", 200);
//            output.put("message", "User Recover complete");
//            output.put("data", recoverUser);
//        }
//        return new ResponseEntity(output, HttpStatus.OK);
//    }

}

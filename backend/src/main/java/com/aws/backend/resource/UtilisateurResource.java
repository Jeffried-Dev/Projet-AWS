package com.aws.backend.resource;

import com.aws.backend.domain.dto.UtilisateurDto;
import com.aws.backend.service.UtilisateurService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

@Slf4j
@AllArgsConstructor
@RestController
@RequestMapping(consumes = MediaType.APPLICATION_JSON_VALUE,path = "/utilisateur")
public class UtilisateurResource {
    @Autowired
    private UtilisateurService utilisateurService;
    @PostMapping(path = "/creation", consumes = { MediaType.APPLICATION_JSON_VALUE })
    public ResponseEntity<UtilisateurDto> signUp(@RequestBody  UtilisateurDto userDto) {
        Map<String, Object> output = new HashMap<>();
        if(userDto.getPassword() == null || userDto.getMail() == null){
            output.put("status", 400);
            output.put("message", "Input Missing");
        }else{
            UtilisateurDto signUpUser = utilisateurService.signUp(userDto);
            if(signUpUser.getToken().equals("mail already exist")){
                output.put("status", 402);
                output.put("message", "mail  already exist");
            }else {
                output.put("status", 200);
                output.put("message", "User Registered activation");
                output.put("data", signUpUser);
            }
        }
        return new ResponseEntity(output, HttpStatus.OK);
    }

    @PostMapping(path = "/connexion", consumes = { MediaType.APPLICATION_JSON_VALUE })
    public ResponseEntity<UtilisateurDto> login(@RequestBody UtilisateurDto userDto) {
        Map<String, Object> output = new HashMap<>();
        if(userDto.getMail() == null || userDto.getPassword() == null){
            output.put("status", 400);
            output.put("message", "User don't exist");
        }else{
            UtilisateurDto logUser =  utilisateurService.login(userDto);
            if(logUser.getToken() == null){
                output.put("status", 403);
                output.put("message", "Password and mail don't matched");
            }else if(logUser.getToken().equals("Account not activated")){
                output.put("status", 402);
                output.put("message", "User don't activated");
            }else {
                output.put("status", 200);
                output.put("message", "User found");
                output.put("data", logUser);
            }
        }
        return new ResponseEntity(output, HttpStatus.OK);
    }

    @GetMapping(path = "/get/{id}", consumes = { MediaType.APPLICATION_JSON_VALUE })
    public ResponseEntity<UtilisateurDto> userRead(@PathVariable(value = "id")  Integer userId) {
        Map<String, Object> output = new HashMap<>();
        if(userId == null){
            output.put("status", 400);
            output.put("message", "User don't exist");
        }else{
            output.put("status", 200);
            output.put("message", "User found");
            output.put("data",  utilisateurService.UtilisateurGet(userId));
        }
        return new ResponseEntity(output, HttpStatus.OK);
    }

    @PutMapping(path = "/update", consumes = { MediaType.APPLICATION_JSON_VALUE })
    public ResponseEntity<UtilisateurDto> userUpdate(@RequestBody UtilisateurDto utilisateurDto) {
        Map<String, Object> output = new HashMap<>();
        if(utilisateurDto.getPassword() == null){
            output.put("status", 400);
            output.put("message", "User don't exist");
        }else{
            UtilisateurDto updateUtilisateurDto = utilisateurService.UtilisateurUpdate(utilisateurDto);
            output.put("status", 200);
            output.put("message", "User updated");
            output.put("data", updateUtilisateurDto);
        }
        return new ResponseEntity(output, HttpStatus.OK);
    }

    @DeleteMapping(path = "/delete/{id}", consumes = { MediaType.APPLICATION_JSON_VALUE })
    public ResponseEntity<?> userDelete(@PathVariable(value = "id")  Integer userId) {
        Map<String, Object> output = new HashMap<>();
        if(userId == null){
            output.put("status", 400);
            output.put("message", "User don't exist");
        }else{
            utilisateurService.UtilisateurDelete(userId);
            output.put("status", 200);
            output.put("message", "User deleted");
        }
        return new ResponseEntity(output, HttpStatus.OK);
    }

    @GetMapping(path = "/creation/complement/{key}/{mail}")
    public ResponseEntity<UtilisateurDto> signUpComplete(@PathVariable(value = "key")  String key, @PathVariable(value = "mail")  String mail) {
        Map<String, Object> output = new HashMap<>();
        if(key == null || mail == null){
            output.put("status", 401);
            output.put("message", "user not exist");
        }else {
            UtilisateurDto signUpUser = utilisateurService.signUpComplete(mail,key);
            if(signUpUser.getActived()){
                output.put("status", 200);
                output.put("message", "User Registered Complete");
                output.put("data", signUpUser);
            }else {
                output.put("status", 401);
                output.put("message", "Something went wrong");
            }
        }
        return new ResponseEntity(output, HttpStatus.OK);
    }

    @GetMapping(path = "/passwordRecover/{mail}")
    public ResponseEntity<UtilisateurDto> passwordRecover(@PathVariable(value = "mail") String mail) {
        Map<String, Object> output = new HashMap<>();
        if(mail == null){
            output.put("status", 400);
            output.put("message", "user not found");
        }else {
            UtilisateurDto recoverUser = utilisateurService.passwordRecover(mail);
            output.put("status", 200);
            output.put("message", "User Recover activation");
            output.put("data", recoverUser);
        }
        return new ResponseEntity(output, HttpStatus.OK);
    }

    @PostMapping(path = "/completepasswordRecover/{key}/{mail}", consumes = { MediaType.APPLICATION_JSON_VALUE })
    public ResponseEntity<UtilisateurDto> passwordRecoverComplete(@PathVariable(value = "key")  String key,@RequestBody UtilisateurDto userDto) {
        Map<String, Object> output = new HashMap<>();
        if(key == null || userDto == null){
            output.put("status", 400);
            output.put("message", "user not found");
        }else {
            UtilisateurDto recoverUser = utilisateurService.passwordRecoverComplete(key,userDto);
            if(Objects.equals(recoverUser.getResetKey(), null)){
                output.put("status", 200);
                output.put("message", "User Recover complete");
                output.put("data", recoverUser);
            }else{
                output.put("status", 401);
                output.put("message", "Something went wrong");
            }

        }
        return new ResponseEntity(output, HttpStatus.OK);
    }
}

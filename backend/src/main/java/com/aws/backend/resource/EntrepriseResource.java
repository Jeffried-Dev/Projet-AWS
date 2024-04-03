package com.aws.backend.resource;

import com.aws.backend.domain.dto.EntrepriseDto;
import com.aws.backend.service.EntrepriseService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;

@Slf4j
@AllArgsConstructor
@RestController
@RequestMapping(consumes = MediaType.APPLICATION_JSON_VALUE,path = "/entreprise")
public class EntrepriseResource {
    @Autowired
    private EntrepriseService entrepriseService;

    @PostMapping(path = "/inscription", consumes = { MediaType.APPLICATION_JSON_VALUE })
    public ResponseEntity<EntrepriseDto> signUp(@RequestBody EntrepriseDto userDto) {
        Map<String, Object> output = new HashMap<>();
        if(userDto.getPassword() == null || userDto.getMail() == null){
            output.put("status", 400);
            output.put("message", "Input Missing");
        }else{
            EntrepriseDto signUpUser = entrepriseService.signUp(userDto);
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
    public ResponseEntity<EntrepriseDto> login(@RequestBody EntrepriseDto userDto) {
        Map<String, Object> output = new HashMap<>();
        if(userDto.getMail() == null || userDto.getPassword() == null){
            output.put("status", 400);
            output.put("message", "User don't exist");
        }else{
            EntrepriseDto logUser =  entrepriseService.login(userDto);
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
    public ResponseEntity<EntrepriseDto> userRead(@PathVariable(value = "id")  Integer userId) {
        Map<String, Object> output = new HashMap<>();
        if(userId == null){
            output.put("status", 400);
            output.put("message", "User don't exist");
        }else{
            output.put("status", 200);
            output.put("message", "User found");
            output.put("data",  entrepriseService.EntrepriseGet(userId));
        }
        return new ResponseEntity(output, HttpStatus.OK);
    }

    @PutMapping(path = "/update", consumes = { MediaType.APPLICATION_JSON_VALUE })
    public ResponseEntity<EntrepriseDto> userUpdate(@RequestBody EntrepriseDto EntrepriseDto) {
        Map<String, Object> output = new HashMap<>();
        if(EntrepriseDto.getPassword() == null){
            output.put("status", 400);
            output.put("message", "User don't exist");
        }else{
            EntrepriseDto updateEntrepriseDto = entrepriseService.EntrepriseUpdate(EntrepriseDto);
            output.put("status", 200);
            output.put("message", "User updated");
            output.put("data", updateEntrepriseDto);
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
            entrepriseService.EntrepriseDelete(userId);
            output.put("status", 200);
            output.put("message", "User deleted");
        }
        return new ResponseEntity(output, HttpStatus.OK);
    }

    @GetMapping(path = "/validation/{key}/{mail}")
    public ResponseEntity<EntrepriseDto> signUpComplete(@PathVariable(value = "key")  String key, @PathVariable(value = "mail")  String mail) {
        Map<String, Object> output = new HashMap<>();
        if(key == null || mail == null){
            output.put("status", 401);
            output.put("message", "user not exist");
        }else {
            EntrepriseDto signUpUser = entrepriseService.signUpComplete(mail,key);
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
    public ResponseEntity<EntrepriseDto> passwordRecover(@PathVariable(value = "mail") String mail) {
        Map<String, Object> output = new HashMap<>();
        if(mail == null){
            output.put("status", 400);
            output.put("message", "user not found");
        }else {
            EntrepriseDto recoverUser = entrepriseService.passwordRecover(mail);
            output.put("status", 200);
            output.put("message", "User Recover activation");
            output.put("data", recoverUser);
        }
        return new ResponseEntity(output, HttpStatus.OK);
    }

    @PostMapping(path = "/completepasswordRecover/{key}", consumes = { MediaType.APPLICATION_JSON_VALUE })
    public ResponseEntity<EntrepriseDto> passwordRecoverComplete(@PathVariable(value = "key")  String key,@RequestBody EntrepriseDto userDto) {
        Map<String, Object> output = new HashMap<>();
        if(key == null || userDto == null){
            output.put("status", 400);
            output.put("message", "user not found");
        }else {
            EntrepriseDto recoverUser = entrepriseService.passwordRecoverComplete(key,userDto);
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

    @GetMapping(path = "/list")
    public ResponseEntity<List<EntrepriseDto>> entrepriseListAll() {
        Map<String, Object> output = new HashMap<>();
        List<EntrepriseDto> OffreDtoList = entrepriseService.EntrepriseGetList();
        output.put("status", 200);
        output.put("message", "entreprise found");
        output.put("data", OffreDtoList);
        return new ResponseEntity(output, HttpStatus.OK);
    }
}

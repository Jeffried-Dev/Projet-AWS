package com.aws.backend.service;

import com.aws.backend.domain.Administrateur;
import com.aws.backend.domain.User;
import com.aws.backend.domain.dto.AdministrateurDto;
import org.springframework.http.ResponseEntity;

public interface AdministrateurService{
    AdministrateurDto signUp(AdministrateurDto AdministrateurDto);
    AdministrateurDto login(AdministrateurDto AdministrateurDto);
    AdministrateurDto AdministrateurUpdate(AdministrateurDto AdministrateurDto);
    ResponseEntity<?> AdministrateurDelete(int AdministrateurId);
    AdministrateurDto AdministrateurGet(int AdministrateurId);
    AdministrateurDto signUpComplete(String mail, String Code);
    AdministrateurDto passwordRecover(String mail);
    AdministrateurDto passwordRecoverComplete(AdministrateurDto AdministrateurDto);
    User loadUserByUsername(String username);
}

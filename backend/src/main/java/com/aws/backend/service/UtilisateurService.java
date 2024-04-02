package com.aws.backend.service;

import com.aws.backend.domain.User;
import com.aws.backend.domain.Utilisateur;
import com.aws.backend.domain.dto.UtilisateurDto;
import org.springframework.http.ResponseEntity;

public interface UtilisateurService{
    UtilisateurDto signUp(UtilisateurDto UtilisateurDto);
    UtilisateurDto login(UtilisateurDto UtilisateurDto);
    UtilisateurDto UtilisateurUpdate(UtilisateurDto UtilisateurDto);
    ResponseEntity<?> UtilisateurDelete(int UtilisateurId);
    UtilisateurDto UtilisateurGet(int UtilisateurId);
    UtilisateurDto signUpComplete(String mail, String Code);
    UtilisateurDto passwordRecover(String mail);
    UtilisateurDto passwordRecoverComplete(String key,UtilisateurDto UtilisateurDto);
    User loadUserByUsername(String username);
}

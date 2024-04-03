package com.aws.backend.service;

import com.aws.backend.domain.Entreprise;
import com.aws.backend.domain.User;
import com.aws.backend.domain.dto.EntrepriseDto;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface EntrepriseService{
    EntrepriseDto signUp(EntrepriseDto EntrepriseDto);
    EntrepriseDto login(EntrepriseDto EntrepriseDto);
    EntrepriseDto EntrepriseUpdate(EntrepriseDto EntrepriseDto);
    ResponseEntity<?> EntrepriseDelete(int EntrepriseId);
    EntrepriseDto EntrepriseGet(int EntrepriseId);
    List<EntrepriseDto> EntrepriseGetList();
    EntrepriseDto signUpComplete(String mail, String Code);
    EntrepriseDto passwordRecover(String mail);
    EntrepriseDto passwordRecoverComplete(String key,EntrepriseDto EntrepriseDto);
    User loadUserByUsername(String username);
}

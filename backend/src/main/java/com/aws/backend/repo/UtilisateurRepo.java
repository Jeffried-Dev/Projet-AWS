package com.aws.backend.repo;

import com.aws.backend.domain.Utilisateur;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UtilisateurRepo extends JpaRepository<Utilisateur, Integer> {
    Utilisateur findById(int utilisateurId);
    Utilisateur findByMail(String mail);
}

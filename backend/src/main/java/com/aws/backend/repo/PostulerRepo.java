package com.aws.backend.repo;

import com.aws.backend.domain.Offre;
import com.aws.backend.domain.Postuler;
import com.aws.backend.domain.Utilisateur;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PostulerRepo extends JpaRepository<Postuler, Integer> {
    Postuler findById(int Id);
    List<Postuler> findAllByOffre(Offre offre);
    List<Postuler> findAllByUtilisateur(Utilisateur utilisateur);
    List<Postuler> findAllByOrderByIdDesc();
}

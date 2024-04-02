package com.aws.backend.repo;

import com.aws.backend.domain.Offre;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface OffreRepo extends JpaRepository<Offre, Integer> {
    Offre findById(int offreId);
    List<Offre> findAllByOrderByIdDesc();
    @Query("SELECT o FROM Offre o JOIN o.adresse a JOIN a.ville v WHERE v.name LIKE %:nomVille")
    List<Offre> findOffresByVille(@Param("nomVille") String nomVille);
    @Query("SELECT o FROM Offre o JOIN o.adresse a JOIN a.ville v WHERE o.name LIKE %:intituleOffre")
    List<Offre> findOffresByIntitule(@Param("intituleOffre") String intituleOffre);
    @Query("SELECT o FROM Offre o JOIN o.adresse a JOIN a.ville v WHERE v.name LIKE %:nomVille AND o.name LIKE %:intituleOffre")
    List<Offre> findOffresByVilleAndIntitule(@Param("nomVille") String nomVille, @Param("intituleOffre") String intituleOffre);
}

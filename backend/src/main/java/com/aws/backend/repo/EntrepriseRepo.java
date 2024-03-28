package com.aws.backend.repo;

import com.aws.backend.domain.Entreprise;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EntrepriseRepo extends JpaRepository<Entreprise, Integer> {
}

package com.aws.backend.repo;

import com.aws.backend.domain.Adresse;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdresseRepo extends JpaRepository<Adresse, Integer> {
}

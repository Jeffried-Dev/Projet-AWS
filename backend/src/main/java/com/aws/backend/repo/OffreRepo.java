package com.aws.backend.repo;

import com.aws.backend.domain.Offre;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OffreRepo extends JpaRepository<Offre, Integer> {
}

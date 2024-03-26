package com.aws.backend.repo;

import com.aws.backend.domain.Ville;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VilleRepo extends JpaRepository<Ville, Integer> {
}

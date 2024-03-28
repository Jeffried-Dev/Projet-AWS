package com.aws.backend.repo;

import com.aws.backend.domain.Postuler;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostulerRepo extends JpaRepository<Postuler, Integer> {
}

package com.aws.backend.repo;

import com.aws.backend.domain.Administrateur;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdministrateurRepo extends JpaRepository<Administrateur, Integer> {
    Administrateur findByMail(String mail);
    Administrateur findById(int Id);
}

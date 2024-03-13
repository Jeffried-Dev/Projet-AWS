package com.aws.backend.repo;

import com.aws.backend.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User, Long> {
    User findByUsername(String username);
    User findByResetKey(String key);
    User findByActivationKey(String key);
    User findByMail(String mail);
}

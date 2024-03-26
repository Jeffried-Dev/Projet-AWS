package com.aws.backend.repo;

import com.aws.backend.domain.Mission;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MissionRepo extends JpaRepository<Mission, Integer> {
}

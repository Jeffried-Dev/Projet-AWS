package com.aws.backend.service;

import com.aws.backend.domain.dto.OffreDto;
import com.aws.backend.domain.dto.VilleDto;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface OffreService {
    // entreprise
    OffreDto saveOffre(OffreDto OffreDto);
    OffreDto updateOffre(OffreDto OffreDto);
    ResponseEntity<?> deleteOffre(int OffreId);
    // utilisateur
    OffreDto getOffre(int OffreId);
    List<OffreDto> searchOffre(String name, String ville);
    List<OffreDto> getOffreList();

    List<VilleDto> getAllVille();
}

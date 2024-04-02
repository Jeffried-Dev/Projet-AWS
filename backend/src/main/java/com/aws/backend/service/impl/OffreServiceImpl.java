package com.aws.backend.service.impl;

import com.aws.backend.domain.Offre;
import com.aws.backend.domain.Ville;
import com.aws.backend.domain.dto.OffreDto;
import com.aws.backend.domain.dto.VilleDto;
import com.aws.backend.repo.OffreRepo;
import com.aws.backend.repo.VilleRepo;
import com.aws.backend.service.OffreService;
import com.aws.backend.service.mapper.OffreMapper;
import com.aws.backend.service.mapper.VilleMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;
@Service
public class OffreServiceImpl implements OffreService {
    @Autowired
    private OffreMapper OffreMapper;
    @Autowired
    private OffreRepo OffreRepo;
    @Autowired
    private VilleRepo villeRepo;
    @Autowired
    private VilleMapper villeMapper;
    @Override
    public OffreDto saveOffre(OffreDto OffreDto) {
        Offre Offre = OffreMapper.toEntity(OffreDto);
        return OffreMapper.toDto(OffreRepo.save(Offre));
    }

    @Override
    public OffreDto updateOffre(OffreDto OffreDto) {
        Offre Offre = OffreRepo.findById(OffreDto.getId());
        OffreMapper.updateFromDto(OffreDto,Offre);
        return OffreMapper.toDto(OffreRepo.save(Offre));
    }

    @Override
    public ResponseEntity<?> deleteOffre(int OffreId) {
        Offre Offre = OffreRepo.findById(OffreId);
        OffreRepo.delete(Offre);
        return ResponseEntity.ok().build();
    }

    @Override
    public OffreDto getOffre(int OffreId) {
        Offre Offre = OffreRepo.findById(OffreId);
        return OffreMapper.toDto(Offre);
    }

    @Override
    public List<OffreDto> searchOffre(String name, String ville) {
        List<OffreDto> OffreDtoList = new ArrayList<>();
        if(ville != null && name != null){
            List<Offre> OffreList = OffreRepo.findOffresByVilleAndIntitule(ville,name);
            for(Offre Offre : OffreList){
                OffreDtoList.add(OffreMapper.toDto(Offre));
            }
        } else if (ville != null) {
            List<Offre> OffreList = OffreRepo.findOffresByVille(ville);
            for(Offre Offre : OffreList){
                OffreDtoList.add(OffreMapper.toDto(Offre));
            }
        }else if (name != null){
            List<Offre> OffreList = OffreRepo.findOffresByIntitule(name);
            for(Offre Offre : OffreList){
                OffreDtoList.add(OffreMapper.toDto(Offre));
            }
        }else{
            OffreDtoList = null;
        }
        return OffreDtoList;
    }

    @Override
    public List<OffreDto> getOffreList() {
        List<OffreDto> OffreDtoList = new ArrayList<>();
        List<Offre> OffreList = OffreRepo.findAllByOrderByIdDesc();
        for(Offre Offre : OffreList){
            OffreDtoList.add(OffreMapper.toDto(Offre));
        }
        return OffreDtoList;
    }

    @Override
    public List<VilleDto> getAllVille() {
        List<VilleDto> villeDtos = new ArrayList<>();
        List<Ville> villes = villeRepo.findAll();
        for(Ville ville : villes){
            villeDtos.add(villeMapper.toDto(ville));
        }
        return villeDtos;
    }
}

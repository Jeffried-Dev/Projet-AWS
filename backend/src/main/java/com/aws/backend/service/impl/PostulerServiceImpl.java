package com.aws.backend.service.impl;

import com.aws.backend.domain.Postuler;
import com.aws.backend.domain.dto.PostulerDto;
import com.aws.backend.repo.OffreRepo;
import com.aws.backend.repo.UtilisateurRepo;
import com.aws.backend.service.PostulerService;
import com.aws.backend.service.mapper.PostulerMapper;
import com.aws.backend.repo.PostulerRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;

@Service
public class PostulerServiceImpl implements PostulerService {
    @Autowired
    private PostulerRepo PostulerRepo;
    @Autowired
    private UtilisateurRepo utilisateurRepo;
    @Autowired
    private OffreRepo offreRepo;
    @Autowired
    private PostulerMapper PostulerMapper;
    @Override
    public PostulerDto savePostuler(PostulerDto PostulerDto) {
        Postuler Postuler = PostulerRepo.save(PostulerMapper.toEntity(PostulerDto));
        return PostulerMapper.toDto(Postuler);
    }

    @Override
    public PostulerDto updatePostuler(PostulerDto PostulerDto) {
        Postuler Postuler = PostulerRepo.findById(PostulerDto.getId());
        PostulerMapper.updateFromDto(PostulerDto,Postuler);
        return PostulerMapper.toDto(PostulerRepo.save(Postuler));
    }

    @Override
    public ResponseEntity<?> deletePostuler(int PostulerId) {
        Postuler Postuler = PostulerRepo.findById(PostulerId);
        PostulerRepo.delete(Postuler);
        return ResponseEntity.ok().build();
    }

    @Override
    public PostulerDto getPostuler(int PostulerId) {
        Postuler Postuler = PostulerRepo.findById(PostulerId);
        return PostulerMapper.toDto(Postuler);
    }

    @Override
    public List<PostulerDto> getPostulerByOffreId(int offreId) {
        List<PostulerDto> PostulerDtoList = new ArrayList<>();
        List<Postuler> PostulerList = PostulerRepo.findAllByOffre(offreRepo.findById(offreId));
        for(Postuler Postuler : PostulerList){
            PostulerDtoList.add(PostulerMapper.toDto(Postuler));
        }
        return PostulerDtoList;
    }

    @Override
    public List<PostulerDto> getPostulerByUserId(int userId) {
        List<PostulerDto> PostulerDtoList = new ArrayList<>();
        List<Postuler> PostulerList = PostulerRepo.findAllByUtilisateur(utilisateurRepo.findById(userId));
        for(Postuler Postuler : PostulerList){
            PostulerDtoList.add(PostulerMapper.toDto(Postuler));
        }
        return PostulerDtoList;
    }

    @Override
    public List<PostulerDto> getPostulerList() {
        List<PostulerDto> PostulerDtoList = new ArrayList<>();
        List<Postuler> PostulerList = PostulerRepo.findAllByOrderByIdDesc();
        for(Postuler Postuler : PostulerList){
            PostulerDtoList.add(PostulerMapper.toDto(Postuler));
        }
        return PostulerDtoList;
    }
}

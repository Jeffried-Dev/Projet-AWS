package com.aws.backend.service;

import com.aws.backend.domain.dto.PostulerDto;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface PostulerService {
    PostulerDto savePostuler(PostulerDto PostulerDto);
    PostulerDto updatePostuler(PostulerDto PostulerDto);
    ResponseEntity<?> deletePostuler(int PostulerId);
    PostulerDto getPostuler(int PostulerId);
    List<PostulerDto> getPostulerByOffreId(int offreId);
    List<PostulerDto> getPostulerByUserId(int userId);
    List<PostulerDto> getPostulerList();
}

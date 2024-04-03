package com.aws.backend.resource;

import com.aws.backend.domain.dto.PostulerDto;
import com.aws.backend.service.PostulerService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Slf4j
@AllArgsConstructor
@RestController
@RequestMapping(consumes = MediaType.APPLICATION_JSON_VALUE,path = "/postuler")
public class PostulerResource {
    @Autowired
    private PostulerService postulerService;
    @PostMapping(path = "/create")
    public ResponseEntity<PostulerDto> createPostuler(@RequestBody PostulerDto PostulerDto) {
        Map<String, Object> output = new HashMap<>();
        if(PostulerDto == null){
            output.put("status", 400);
            output.put("message", "Input invalid");
        }else{
            PostulerDto PostulerDto1 = postulerService.savePostuler(PostulerDto);
            output.put("status", 200);
            output.put("message", "postuler saved");
            output.put("data", PostulerDto1);
        }
        return new ResponseEntity(output, HttpStatus.OK);
    }
    @PutMapping(path = "/update")
    public ResponseEntity<PostulerDto> updatePostuler(@RequestBody PostulerDto PostulerDto) {
        Map<String, Object> output = new HashMap<>();
        if(PostulerDto == null){
            output.put("status", 400);
            output.put("message", "Input invalid");
        }else{
            PostulerDto PostulerDto1 = postulerService.updatePostuler(PostulerDto);
            output.put("status", 200);
            output.put("message", "postuler updated");
            output.put("data", PostulerDto1);
        }
        return new ResponseEntity(output, HttpStatus.OK);
    }
    @DeleteMapping(path = "/delete/{id}")
    public ResponseEntity<?> deletePostuler(@PathVariable(value = "id") int PostulerId) {
        Map<String, Object> output = new HashMap<>();
        if(PostulerId == 0){
            output.put("status", 400);
            output.put("message", "Input invalid");
        }else{
            postulerService.deletePostuler(PostulerId);
            output.put("status", 200);
            output.put("message", "Postuler deleted");
        }
        return new ResponseEntity(output, HttpStatus.OK);
    }
    @GetMapping(path = "/get/{id}")
    public ResponseEntity<PostulerDto> readPostuler(@PathVariable(value = "id") int PostulerId) {
        Map<String, Object> output = new HashMap<>();
        PostulerDto PostulerDto = postulerService.getPostuler(PostulerId);
        if(PostulerDto == null){
            output.put("status", 400);
            output.put("message", "Input invalid");
        }else{
            output.put("status", 200);
            output.put("message", "Postuler found");
            output.put("data", PostulerDto);
        }
        return new ResponseEntity(output, HttpStatus.OK);
    }
    @GetMapping(path = "/PostulerByUserId/{id}")
    public ResponseEntity<List<PostulerDto>> PostulerByUserId(@PathVariable(value = "id") int userId) {
        Map<String, Object> output = new HashMap<>();
        List<PostulerDto> PostulerDto = postulerService.getPostulerByUserId(userId);
        if(PostulerDto == null){
            output.put("status", 400);
            output.put("message", "Input invalid");
        }else{
            output.put("status", 200);
            output.put("message", "Postuler found");
            output.put("data", PostulerDto);
        }
        return new ResponseEntity(output, HttpStatus.OK);
    }
    @GetMapping(path = "/PostulerByOffreId/{id}")
    public ResponseEntity<List<PostulerDto>> PostulerByOffreId(@PathVariable(value = "id") int offreId) {
        Map<String, Object> output = new HashMap<>();
        if(offreId == 0){
            output.put("status", 400);
            output.put("message", "Input invalid");
        }else{
            List<PostulerDto> PostulerDto = postulerService.getPostulerByOffreId(offreId);
            output.put("status", 200);
            output.put("message", "Postuler List");
            output.put("data", PostulerDto);
        }
        return new ResponseEntity(output, HttpStatus.OK);
    }
    @GetMapping(path = "/list")
    public ResponseEntity<List<PostulerDto>> PostulerList() {
        Map<String, Object> output = new HashMap<>();
        List<PostulerDto> PostulerDto = postulerService.getPostulerList();
        output.put("status", 200);
        output.put("message", "Postuler List");
        output.put("data", PostulerDto);
        return new ResponseEntity(output, HttpStatus.OK);
    }
}

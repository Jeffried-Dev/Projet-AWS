package com.aws.backend.resource;

import com.aws.backend.domain.dto.OffreDto;
import com.aws.backend.domain.dto.VilleDto;
import com.aws.backend.service.OffreService;
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
@RequestMapping(consumes = MediaType.APPLICATION_JSON_VALUE,path = "/offre")
public class OffreResource {
    @Autowired
    private OffreService offreService;
    @PostMapping(path = "/create")
    public ResponseEntity<OffreDto> createOffre(@RequestBody OffreDto OffreDto) {
        Map<String, Object> output = new HashMap<>();
        if(OffreDto == null){
            output.put("status", 400);
            output.put("message", "Input invalid");
        }else{
            OffreDto OffreDto1 = offreService.saveOffre(OffreDto);
            output.put("status", 200);
            output.put("message", "Offre saved");
            output.put("data", OffreDto1);
        }
        return new ResponseEntity(output, HttpStatus.OK);
    }
    @PutMapping(path = "/update")
    public ResponseEntity<OffreDto> updateOffre(@RequestBody OffreDto OffreDto) {
        Map<String, Object> output = new HashMap<>();
        if(OffreDto == null){
            output.put("status", 400);
            output.put("message", "Input invalid");
        }else{
            OffreDto OffreDto1 = offreService.updateOffre(OffreDto);
            output.put("status", 200);
            output.put("message", "Offre updated");
            output.put("data",OffreDto1 );
        }
        return new ResponseEntity(output, HttpStatus.OK);
    }
    @DeleteMapping(path = "/delete/{id}")
    public ResponseEntity<?> deleteOffre(@PathVariable(value = "id") int OffreId) {
        Map<String, Object> output = new HashMap<>();
        if(OffreId == 0){
            output.put("status", 400);
            output.put("message", "Input invalid");
        }else{
            offreService.deleteOffre(OffreId);
            output.put("status", 200);
            output.put("message", "Offre deleted");
        }
        return new ResponseEntity(output, HttpStatus.OK);
    }
    @GetMapping(path = "/get/{id}")
    public ResponseEntity<OffreDto> readOffre(@PathVariable(value = "id") int OffreId) {
        Map<String, Object> output = new HashMap<>();
        if(OffreId == 0){
            output.put("status", 400);
            output.put("message", "Offre not found");
        }else{
            OffreDto OffreDto = offreService.getOffre(OffreId);
            output.put("status", 200);
            output.put("message", "Offre found");
            output.put("data", OffreDto);
        }
        return new ResponseEntity(output, HttpStatus.OK);
    }
    @GetMapping(path = "/search/{name}/{ville}")
    public ResponseEntity<List<OffreDto>> search(@PathVariable(value = "name") String name, @PathVariable(value = "ville") String ville) {
        Map<String, Object> output = new HashMap<>();
        if(name == null && ville == null){
            output.put("status", 400);
            output.put("message", "invalid input");
        }else{
            List<OffreDto> OffreDtoList = offreService.searchOffre(name,ville);
            output.put("status", 200);
            output.put("message", "Offres found");
            output.put("data", OffreDtoList);
        }
        return new ResponseEntity(output, HttpStatus.OK);
    }
    @GetMapping(path = "/list")
    public ResponseEntity<List<OffreDto>> offreListAll() {
        Map<String, Object> output = new HashMap<>();
        List<OffreDto> OffreDtoList = offreService.getOffreList();
        output.put("status", 200);
        output.put("message", "Offres found");
        output.put("data", OffreDtoList);
        return new ResponseEntity(output, HttpStatus.OK);
    }

    @GetMapping(path = "/list/ville")
    public ResponseEntity<List<OffreDto>> villeListAll() {
        Map<String, Object> output = new HashMap<>();
        List<VilleDto> OffreDtoList = offreService.getAllVille();
        output.put("status", 200);
        output.put("message", "ville found");
        output.put("data", OffreDtoList);
        return new ResponseEntity(output, HttpStatus.OK);
    }
}

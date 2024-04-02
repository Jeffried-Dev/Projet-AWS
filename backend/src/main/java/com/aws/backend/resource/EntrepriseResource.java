package com.aws.backend.resource;

import com.aws.backend.service.EntrepriseService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@AllArgsConstructor
@RestController
@RequestMapping(consumes = MediaType.APPLICATION_JSON_VALUE,path = "/entreprise")
public class EntrepriseResource {
    @Autowired
    private EntrepriseService entrepriseService;
}
package com.aws.backend.service.mapper;

import com.aws.backend.domain.Utilisateur;
import com.aws.backend.domain.dto.UtilisateurDto;
import org.mapstruct.BeanMapping;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;
import org.mapstruct.NullValuePropertyMappingStrategy;

@Mapper(componentModel = "spring")
public interface UtilisateurMapper {
    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    UtilisateurDto toDto(Utilisateur Utilisateur);
    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    void updateFromDto(UtilisateurDto UtilisateurDto, @MappingTarget Utilisateur Utilisateur);
    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    Utilisateur toEntity(UtilisateurDto UtilisateurDto);
}

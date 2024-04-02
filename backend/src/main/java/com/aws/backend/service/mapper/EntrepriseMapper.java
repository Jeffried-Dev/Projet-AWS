package com.aws.backend.service.mapper;

import com.aws.backend.domain.Entreprise;
import com.aws.backend.domain.dto.EntrepriseDto;
import org.mapstruct.BeanMapping;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;
import org.mapstruct.NullValuePropertyMappingStrategy;

@Mapper(componentModel = "spring")
public interface EntrepriseMapper {
    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    EntrepriseDto toDto(Entreprise Entreprise);
    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    void updateFromDto(EntrepriseDto EntrepriseDto, @MappingTarget Entreprise Entreprise);
    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    Entreprise toEntity(EntrepriseDto EntrepriseDto);
}

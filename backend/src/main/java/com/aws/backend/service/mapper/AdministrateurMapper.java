package com.aws.backend.service.mapper;

import com.aws.backend.domain.Administrateur;
import com.aws.backend.domain.dto.AdministrateurDto;
import org.mapstruct.BeanMapping;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;
import org.mapstruct.NullValuePropertyMappingStrategy;

@Mapper(componentModel = "spring")
public interface AdministrateurMapper {
    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    AdministrateurDto toDto(Administrateur Administrateur);
    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    void updateFromDto(AdministrateurDto AdministrateurDto, @MappingTarget Administrateur Administrateur);
    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    Administrateur toEntity(AdministrateurDto AdministrateurDto);
}

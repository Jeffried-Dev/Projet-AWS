package com.aws.backend.service.mapper;


import com.aws.backend.domain.Adresse;
import com.aws.backend.domain.dto.AdresseDto;
import org.mapstruct.BeanMapping;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;
import org.mapstruct.NullValuePropertyMappingStrategy;

@Mapper(componentModel = "spring")
public interface AdresseMapper {
    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    AdresseDto toDto(Adresse Adresse);
    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    void updateFromDto(AdresseDto AdresseDto, @MappingTarget Adresse Adresse);
    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    Adresse toEntity(AdresseDto AdresseDto);
}

package com.aws.backend.service.mapper;

import com.aws.backend.domain.Postuler;
import com.aws.backend.domain.dto.PostulerDto;
import org.mapstruct.BeanMapping;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;
import org.mapstruct.NullValuePropertyMappingStrategy;

@Mapper(componentModel = "spring")
public interface PostulerMapper {
    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    PostulerDto toDto(Postuler Postuler);
    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    void updateFromDto(PostulerDto PostulerDto, @MappingTarget Postuler Postuler);
    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    Postuler toEntity(PostulerDto PostulerDto);
}

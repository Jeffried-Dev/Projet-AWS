package com.aws.backend.domain.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import jakarta.persistence.EntityListeners;
import lombok.*;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.util.Collection;
@Getter
@Setter
@Builder(toBuilder = true)
@AllArgsConstructor
@EntityListeners(AuditingEntityListener.class)
@NoArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class UtilisateurDto extends UserDto{
    private Collection<PostulerDto> postulers;

    public Collection<PostulerDto> getPostulers() {
        return postulers;
    }

    public void setPostulers(Collection<PostulerDto> postulers) {
        this.postulers = postulers;
    }
}

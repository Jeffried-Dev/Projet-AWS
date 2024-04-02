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
public class EntrepriseDto extends UserDto{
    private String logo;
    private String description;
    private Collection<OffreDto> offres;

    public String getLogo() {
        return logo;
    }

    public void setLogo(String logo) {
        this.logo = logo;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Collection<OffreDto> getOffres() {
        return offres;
    }

    public void setOffres(Collection<OffreDto> offres) {
        this.offres = offres;
    }
}

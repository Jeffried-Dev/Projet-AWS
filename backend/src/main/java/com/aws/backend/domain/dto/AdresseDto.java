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
public class AdresseDto {
    private int id;
    private String rue;
    private int numero;
    private VilleDto ville;
    private Collection<OffreDto> offres;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getRue() {
        return rue;
    }

    public void setRue(String rue) {
        this.rue = rue;
    }

    public int getNumero() {
        return numero;
    }

    public void setNumero(int numero) {
        this.numero = numero;
    }

    public VilleDto getVille() {
        return ville;
    }

    public void setVille(VilleDto ville) {
        this.ville = ville;
    }

    public Collection<OffreDto> getOffres() {
        return offres;
    }

    public void setOffres(Collection<OffreDto> offres) {
        this.offres = offres;
    }
}

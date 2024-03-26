package com.aws.backend.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Collection;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
//@Table(name = "entreprise")
public class Entreprise extends User {
    @Column(name = "logo", nullable = true, unique = false, length = 100)
    private String logo;
    @Column(name = "description", nullable = true, unique = false, length = 100)
    private String description;
    @OneToMany(mappedBy="entreprise")
    private Collection<Offre> offres;

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

    public Collection<Offre> getOffres() {
        return offres;
    }

    public void setOffres(Collection<Offre> offres) {
        this.offres = offres;
    }
}

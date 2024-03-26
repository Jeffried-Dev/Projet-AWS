package com.aws.backend.domain;

import com.aws.backend.domain.type.TypeOffre;
import jakarta.persistence.*;
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
@Table(name = "offre")
public class Offre {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name = "name", nullable = true, unique = false, length = 100)
    private String name;
    @Column(name = "description", nullable = true, unique = false, length = 100)
    private String description;
    @ManyToOne
    @JoinColumn(name="adresse_id", nullable=false)
    private Adresse adresse;
    @Enumerated(EnumType.STRING)
    private TypeOffre libelle;
    @Column(name = "duree", nullable = true, unique = true, length = 100)
    protected int duree; // en mois pour les contrats different de cdi
    @ManyToOne
    @JoinColumn(name="entreprise_id", nullable=false)
    private Entreprise entreprise;
    @OneToMany(mappedBy="offre")
    private Collection<Mission> missions;
    @OneToMany(mappedBy="offre")
    private Collection<Prerequi> prerequis;
    @OneToMany(mappedBy="offre")
    private Collection<Postuler> postulers;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Adresse getAdresse() {
        return adresse;
    }

    public void setAdresse(Adresse adresse) {
        this.adresse = adresse;
    }

    public TypeOffre getLibelle() {
        return libelle;
    }

    public void setLibelle(TypeOffre libelle) {
        this.libelle = libelle;
    }

    public int getDuree() {
        return duree;
    }

    public void setDuree(int duree) {
        this.duree = duree;
    }

    public Entreprise getEntreprise() {
        return entreprise;
    }

    public void setEntreprise(Entreprise entreprise) {
        this.entreprise = entreprise;
    }

    public Collection<Mission> getMissions() {
        return missions;
    }

    public void setMissions(Collection<Mission> missions) {
        this.missions = missions;
    }

    public Collection<Prerequi> getPrerequis() {
        return prerequis;
    }

    public void setPrerequis(Collection<Prerequi> prerequis) {
        this.prerequis = prerequis;
    }

    public Collection<Postuler> getPostulers() {
        return postulers;
    }

    public void setPostulers(Collection<Postuler> postulers) {
        this.postulers = postulers;
    }
}

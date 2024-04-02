package com.aws.backend.domain;

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
//@Table(name = "utilisateur")
public class Utilisateur extends User{
    @OneToMany(mappedBy="utilisateur")
    private Collection<Postuler> postulers;

    public Collection<Postuler> getPostulers() {
        return postulers;
    }

    public void setPostulers(Collection<Postuler> postulers) {
        this.postulers = postulers;
    }

    @Override
    public void setRole(String role) {
        super.role = "UTILISATEUR";
    }
}

package com.aws.backend.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
//@Table(name = "administrateur")
public class Administrateur extends User{
    @Override
    public void setRole(String role) {
        super.role = "ADMINISTRATEUR";
    }
}

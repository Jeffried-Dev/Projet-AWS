package com.aws.backend.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.Collections;
import java.util.Date;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@MappedSuperclass
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
//@Table(name = "user")
public class User implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
    protected Long  id;
    @Column(name = "name", nullable = true, unique = false, length = 100)
    protected String name;
    @Column(name = "username", nullable = true, unique = true, length = 100)
    protected String username;
    @Column(name = "password", nullable = false, length = 100)
    protected String password;
    @Column(name = "mail", nullable = false, unique = true, length = 100)
    protected String mail;
    @Column(name = "tel", nullable = true, unique = true, length = 100)
    protected Long tel;
    @Column(name = "image", nullable = true, unique = false, length = 100)
    protected String image;
    @Column(name = "actived", nullable = true)
    protected Boolean actived = false;
    @Column(name = "verification", nullable = true)
    protected Boolean verification;
    @Column(name = "activation_key", length = 20, nullable = true)
    protected String activationKey;
    @Column(name = "reset_key", length = 20, nullable = true)
    protected String resetKey;
    @Column(name = "reset_date", nullable = true)
    protected Date resetDate = null;
    @Column(name = "created_date", nullable = true)
    protected Date createdDate = null;
    @Column(name = "gender", nullable = true)
    protected String gender;
    @Column(name = "nationality", nullable = true)
    protected String nationality;
    @Column(name = "secondName", nullable = true)
    protected String secondName;
    @Column(name = "dateNaiss", nullable = true)
    protected Date dateNaiss;
    @Column(name = "role", nullable = true, unique = false, length = 100)
    protected String role;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return  Collections.singletonList(new SimpleGrantedAuthority("ROLE_"+this.role));
    }

    @Override
    public String getPassword() {
        return this.password;
    }

    @Override
    public String getUsername() {
        return this.mail;
    }

    @Override
    public boolean isAccountNonExpired() {
        return this.actived;
    }

    @Override
    public boolean isAccountNonLocked() {
        return this.actived;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return this.actived;
    }

    @Override
    public boolean isEnabled() {
        return this.actived;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getMail() {
        return mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public Long getTel() {
        return tel;
    }

    public void setTel(Long tel) {
        this.tel = tel;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public Boolean getActived() {
        return actived;
    }

    public void setActived(Boolean actived) {
        this.actived = actived;
    }

    public Boolean getVerification() {
        return verification;
    }

    public void setVerification(Boolean verification) {
        this.verification = verification;
    }

    public String getActivationKey() {
        return activationKey;
    }

    public void setActivationKey(String activationKey) {
        this.activationKey = activationKey;
    }

    public String getResetKey() {
        return resetKey;
    }

    public void setResetKey(String resetKey) {
        this.resetKey = resetKey;
    }

    public Date getResetDate() {
        return resetDate;
    }

    public void setResetDate(Date resetDate) {
        this.resetDate = resetDate;
    }

    public Date getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Date createdDate) {
        this.createdDate = createdDate;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getNationality() {
        return nationality;
    }

    public void setNationality(String nationality) {
        this.nationality = nationality;
    }

    public String getSecondName() {
        return secondName;
    }

    public void setSecondName(String secondName) {
        this.secondName = secondName;
    }

    public Date getDateNaiss() {
        return dateNaiss;
    }

    public void setDateNaiss(Date dateNaiss) {
        this.dateNaiss = dateNaiss;
    }

    public String getRole(){
        return role;
    }

    public void setRole(String role){
        this.role = role;
    }
}

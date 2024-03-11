package com.aws.backend.service.impl;

import com.aws.backend.domain.User;
import lombok.AllArgsConstructor;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@AllArgsConstructor
@Service
public class NotificationServiceImpl {
    JavaMailSender javaMailSender;
    public void envoyer(User validation) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("no-reply@CS.Recrut");
        message.setTo(validation.getMail());
        message.setSubject("Votre code d'activation");

        String texte = String.format(
                "Bonjour %s, <br /> Votre code d'action est %s; A bientôt",
                validation.getName(),
                validation.getActivationKey()
        );
        message.setText(texte);

        javaMailSender.send(message);
    }
}

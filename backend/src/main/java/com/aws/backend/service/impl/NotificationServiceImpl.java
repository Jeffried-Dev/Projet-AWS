package com.aws.backend.service.impl;

import com.aws.backend.domain.User;
import com.aws.backend.service.NotificationService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@AllArgsConstructor
@Service
public class NotificationServiceImpl implements NotificationService {
    @Autowired
    private JavaMailSender javaMailSender;
    @Value("${spring.mail.username}") private String sender;
    @Override
    public void envoyer(User validation) {
        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setFrom(sender);
            message.setTo(validation.getMail());
            message.setSubject("Votre code d'activation");

            String texte = String.format(
                    "Bonjour %s, <br /> Votre code d'action est %s; A bientôt",
                    validation.getName(),
                    validation.getActivationKey()
            );
            message.setText(texte);

            javaMailSender.send(message);
            System.out.println("Mail bien envoyé !");
        }
        catch (Exception e) {
            System.out.println("Erreur à l'envoi...");
            //return "Error while Sending Mail";
        }
    }

    @Override
    public int test() {
        return 0;
    }
}

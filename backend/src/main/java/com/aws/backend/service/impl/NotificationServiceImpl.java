package com.aws.backend.service.impl;

import com.aws.backend.domain.User;
import com.aws.backend.service.NotificationService;
import jakarta.mail.internet.MimeMessage;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
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
            MimeMessage message = javaMailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");
            helper.setTo(validation.getMail());
            helper.setSubject("Confirmation de création de compte");
            String htmlBody = "<!DOCTYPE html>\n" +
                    "<html lang=\"fr\">\n" +
                    "<head>\n" +
                    "    <meta charset=\"UTF-8\">\n" +
                    "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n" +
                    "    <title>Confirmation de création de compte</title>\n" +
                    "</head>\n" +
                    "<body>\n" +
                    "    <div style=\"max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f7f7f7; font-family: Arial, sans-serif;\">\n" +
                    "        <h2 style=\"text-align: center;\">Confirmation de création de compte</h2>\n" +
                    "        <p>Bonjour cher nouvel utilisateur ,</p>\n" +
                    "        <p>Votre compte a été créé avec succès. Pour activer votre compte, veuillez renseigner le code ci-dessous :</p>\n" +
                    "        <p><b>" + validation.getActivationKey() + "<b></p>\n" +
                    "        <p>Une fois votre compte activé, vous pourrez vous connecter à notre site en utilisant vos identifiants.</p>\n" +
                    "        <p>Merci d'avoir créé un compte avec nous.</p>\n" +
                    "        <p>Cordialement,<br>L'équipe CSRecrut</p>\n" +
                    "    </div>\n" +
                    "</body>\n" +
                    "</html>";
            helper.setText(htmlBody, true);
            javaMailSender.send(message);


//            SimpleMailMessage message = new SimpleMailMessage();
//            message.setFrom(sender);
//            message.setTo(validation.getMail());
//            message.setSubject("Votre code d'activation");
//
//            String texte = String.format(
//                    "Bonjour %s, <br /> Votre code d'action est %s; A bientôt",
//                    validation.getName(),
//                    validation.getActivationKey()
//            );
//            message.setText(texte);
//
//            javaMailSender.send(message);
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

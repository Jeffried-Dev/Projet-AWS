# Application web Sécurisé : **CSRecrut**

## Presentation du projet et context :

Ce projet vise à développer une application web sécurisée dédiée à la recherche d'emplois dans le domaine de l'informatique, nommée **"CSrecrut" (pour "Computer Science Recrutement")**. Son objectif principal est de faciliter l'interaction entre les chercheurs d'emploi dans le domaine de l'informatique et les entreprises. Les chercheurs d'emploi auront la possibilité de créer un compte et de se connecter pour consulter les offres d'emploi, ainsi que de rechercher et de postuler aux offres publiées par les entreprises. De leur côté, les entreprises pourront créer leur propre profil et publier des annonces d'emploi destinées aux chercheurs. Pour garantir la sécurité de l'application, un administrateur sera mis en place. Son rôle consistera à assurer la sécurité et la maintenance de l'application, ainsi qu'à gérer les données des entreprises et des utilisateurs.

## Objectifs :

- Créer une plateforme conviviale et intuitive pour les entreprises afin de publier des offres d'emploi ;
- Permettre aux candidats de rechercher des opportunités d'emploi en fonction de leurs compétences et de leurs intérêts ;
- Mettre en place un système de gestion des candidatures éfficace pour les recruteurs ;
- Assurer la confidentialité et la sécurité des données des utilisateurs.

## Frontend

Le **frontend** de l'application de recrutement dans le domaine de l'informatique est la partie visible et interactive avec laquelle les utilisateurs interagissent directement. Il offre une interface utilisateur conviviale permettant aux utilisateurs de naviguer, de rechercher des offres d'emploi, de postuler pour des postes, et de suivre l'état de leurs candidatures. Développé avec que **React avec Typescript**, le frontend communique avec le backend via des **API REST** pour récupérer et afficher les données dynamiques, assurant ainsi une expérience utilisateur fluide et réactive.

nécéssite : node js

pour deployer le projet :
- npm install ;
- npm start.

## Base de donnees

La **base de données** stocke de manière sécurisée les données essentielles à l'application, telles que les informations sur les utilisateurs, les offres d'emploi, les candidatures, etc. Dans une **architecture de microservices**, il peut y avoir plusieurs bases de données, chacune dédiée à un service backend spécifique ou partagée entre plusieurs services. Elle doit être conçue pour répondre aux besoins de l'application en termes de **performances, de scalabilité et de cohérence des données**, garantissant ainsi la **disponibilité** et la **fiabilité** des données.

nécéssite : mysql 

pour deployer : 
- il faut creer une base de donnees vide dans votre SGBD ;
- il faut renseigneir les bonnes informations de connexion a votre base de donnees dans le fichier **application.properties** ;
- les tables vont se creer automatiquement au lancement de l'application backend.

## Backend

Le **backend** de l'application de recrutement gère la logique métier, le traitement des requêtes utilisateur et la communication avec la base de données. Divisé en plusieurs services autonomes, chaque service est responsable d'une fonctionnalité spécifique, telle que la gestion des utilisateurs, la publication des offres d'emploi ou la gestion des candidatures. Utilisant comme framework **Spring Boot (Java)**, le backend expose des **API REST** pour permettre aux services frontend et autres services backend de communiquer entre eux, facilitant ainsi le développement et la maintenance de l'application.

nécéssite : java 17

pour deployer : 
- mvn clean ;
- mvn install ;
- mvn run.

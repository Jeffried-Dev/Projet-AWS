import React, { useState, useEffect } from "react";
//import axios from "axios"; // Importer axios pour effectuer des requêtes HTTP

const ListeOffresEmploi = () => {
  // État local pour stocker la liste des offres d'emploi
  /*const [offresEmploi, setOffresEmploi] = useState([]);

  // Utilisez useEffect pour charger les offres d'emploi lors du chargement initial du composant
  useEffect(() => {
    // Fonction pour charger les offres d'emploi depuis votre API
    const chargerOffresEmploi = async () => {
      try {
        // Effectuez une requête GET pour récupérer les offres d'emploi depuis votre API
        const response = await axios.get("URL_API/offres-emploi");
        // Mettez à jour l'état local avec les données des offres d'emploi
        setOffresEmploi(response.data);
      } catch (error) {
        console.error("Erreur lors du chargement des offres d'emploi :", error);
      }
    };

    // Appelez la fonction pour charger les offres d'emploi
    chargerOffresEmploi();
  }, []); // Le tableau vide en tant que deuxième argument signifie que useEffect s'exécutera une seule fois lors du chargement initial du composant

  return (
    <div>
      <h1>Liste des offres d'emploi</h1>
     
      {offresEmploi.map((offre) => (
        <div key={offre.id}>
          <h2>{offre.titre}</h2>
          <p>{offre.description}</p>
          <p>Lieu : {offre.lieu}</p>
          <p>Type de contrat : {offre.typeContrat}</p>
         
        </div>
      ))}
    </div>
  );*/
};

export default ListeOffresEmploi;

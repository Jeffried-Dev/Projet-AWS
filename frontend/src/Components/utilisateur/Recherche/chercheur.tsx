import { useState,  ChangeEvent } from "react";
import "./chercheur.css"
import { Link } from 'react-router-dom';


function Chercheur(){
    // Liste des métiers informatiques
    const data = ["Développeur de logiciels", "Ingénieur en développement web", "Analyste de données", "Administrateur système", "Administrateur de base de données", "Ingénieur en cybersécurité", "Ingénieur réseau","Architecte logiciel","Responsable de la gestion de projet informatique","Consultant en informatique","Expert en big data", "Analyste en intelligence artificielle","Architecte cloud"];
    
    // État local pour stocker la valeur de la recherche
    const [value, setValue] = useState("");
   
    // Fonction de gestion du changement dans le champ de recherche
    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setValue(event.target.value);
    }
    
    // Rendu du composant
    return (
        <div className="searchPage">
            {/* Navbar */}
            <div className="navbar">
 
                <h1 className="logo">CSRecrut</h1>
                <nav>
                    <ul>
                        <li><Link to="/">Accueil</Link></li>
                        <li><Link to="/a-propos">À propos</Link></li>
                        {/* Ajoutez d'autres liens de navigation ici */}
                    </ul>
                </nav>
            </div>

        <div className="searchBar">
            {/* Barre de recherche */}
            <div className="inputSearch">
                {/* Champ de saisie de texte pour la recherche */}
                <input type="text" value={value} onChange={handleChange} />
                {/* Bouton de recherche */}
                <button onClick={() => console.log(value)}>
                    {/* Icône de recherche */}
                    <span className="material-symbols-outlined">search</span>
                </button>
            </div>
            {/* Liste des métiers */}
            <ul>
                {/* Affichage des métiers filtrés en fonction de la recherche */}
                {value &&
                    data
                        .filter((element) =>
                            element.toLowerCase().includes(value.toLowerCase())
                        )
                        .map((element, index) => (
                            // Élément de liste cliquable pour sélectionner un métier
                            <li onClick={() => setValue(element)} key={index}>
                                {/* Affichage du nom du métier */}
                                {element}
                            </li>
                        ))}
            </ul>
        </div>
        </div>
    );
}

export default Chercheur;
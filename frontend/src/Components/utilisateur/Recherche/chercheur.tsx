import { useState,  ChangeEvent } from "react";
import "./chercheur.css"
import { Link } from 'react-router-dom';
import logo from '../../../assets/Logof.jpg';


function Chercheur(){
    // Liste des métiers informatiques
    const data = ["Développeur de logiciels", "Ingénieur en développement web", "Analyste de données", "Administrateur système", "Administrateur de base de données", "Ingénieur en cybersécurité", "Ingénieur réseau","Architecte logiciel","Responsable de la gestion de projet informatique","Consultant en informatique","Expert en big data", "Analyste en intelligence artificielle","Architecte cloud"];
    
    // État local pour stocker la valeur de la recherche
    const [value, setValue] = useState("");
   
    // Fonction de gestion du changement dans le champ de recherche
    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setValue(event.target.value);
    }
    
   
    return (
        <div className="searchPage">
            <div className="navbar">
            <div className="logo-container">
                <img src={logo} className='logo' alt="Logo"></img>
                <h2 className="logos">CSRecrut</h2>
            </div>
                <nav>
                    <ul>
                        <li><Link to="/">Accueil</Link></li>
                        <li><Link to="/Apropos">À propos</Link></li>
                        <li><Link to="/utilisateur/profile">Contact</Link></li>
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
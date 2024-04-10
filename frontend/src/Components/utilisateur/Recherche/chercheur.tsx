import { useState,  ChangeEvent , useEffect} from "react";
import "./chercheur.css"
import { Link } from 'react-router-dom';
import logo from '../../../assets/Logof.jpg';

interface offreDto {
    id: number;
    name: string;
    description: string;
}

function Chercheur(){
    // Liste des métiers informatiques
    const data = ["Développeur de logiciels", "Ingénieur en développement web", "Analyste de données", "Administrateur système", "Administrateur de base de données", "Ingénieur en cybersécurité", "Ingénieur réseau","Architecte logiciel","Responsable de la gestion de projet informatique","Consultant en informatique","Expert en big data", "Analyste en intelligence artificielle","Architecte cloud"];
    // État local pour stocker la valeur de la recherche
    //const [value, setValue] = useState("");
    // Fonction de gestion du changement dans le champ de recherche
   // function handleChange(event: ChangeEvent<HTMLInputElement>) {
    //    setValue(event.target.value);
    //}

    const [objects, setObjects] = useState<offreDto[]>([]);
    const [selectedObject, setSelectedObject] = useState<offreDto | null>(null);
    const [filter, setFilter] = useState<string>("");

    useEffect(() => {
        // Fonction pour récupérer la liste d'objets via fetch au chargement de la page
        const fetchObjects = async () => {
        try {
            const response = await fetch("https://projet-aws-backend.onrender.com/offre/list",{
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': 'Bearer ' + localStorage.getItem("token")
                },
              });
            if (!response.ok) {
            throw new Error("Erreur lors de la récupération des données");
            }
            const data = await response.json();
            setObjects(data);
        } catch (error) {
            console.error("Erreur:", error);
        }
        };

        fetchObjects();
    }, []);

    const handleObjectClick = (obj: offreDto) => {
        setSelectedObject(obj);
    };

    const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilter(event.target.value);
    };

    // Filtrer la liste d'objets en fonction du texte saisi dans le champ de saisie
    const filteredObjects = objects.filter((obj) =>
        obj.name.toLowerCase().includes(filter.toLowerCase())
    );
        
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
                    <input type="text" value={filter} onChange={handleFilterChange}/>
                    {/* Bouton de recherche */}
                    <button onClick={() => console.log(filter)}>
                        {/* Icône de recherche */}
                        <span className="material-symbols-outlined">search</span>
                    </button>
                </div>
                {/* Liste des métiers */}
                <ul>
                    {/* Affichage des métiers filtrés en fonction de la recherche */}
                    {filter &&
                        data
                            .filter((element) =>
                                element.toLowerCase().includes(filter.toLowerCase())
                            )
                            .map((element, index) => (
                                // Élément de liste cliquable pour sélectionner un métier
                                <li onClick={() => setFilter(element)} key={index}>
                                    {/* Affichage du nom du métier */}
                                    {element}
                                </li>
                            ))}
                </ul>
            </div>
            {/* Liste d'objets */}
            <div style={{ display: "flex" }}>
                {/* Partie gauche: Liste d'objets */}
                <div style={{ flex: 1 }}>
                <h2>Liste des objets</h2>
                <ul>
                    {filteredObjects.map((obj) => (
                    <li key={obj.id} onClick={() => handleObjectClick(obj)}>
                        {obj.name}
                    </li>
                    ))}
                </ul>
                </div>
                {/* Partie droite: Détails de l'objet sélectionné */}
                <div style={{ flex: 2 }}>
                {selectedObject && (
                    <div>
                    <h2>Détails de l'objet</h2>
                    <p>Nom: {selectedObject.name}</p>
                    <p>Description: {selectedObject.description}</p>
                    {/* Afficher d'autres détails de l'objet si nécessaire */}
                    </div>
                )}
                </div>
            </div>                   
        </div>
    );
}

export default Chercheur;
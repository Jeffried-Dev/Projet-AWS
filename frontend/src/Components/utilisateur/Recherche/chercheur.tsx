import { useState,  ChangeEvent , useEffect} from "react";
import "./chercheur.css"
import { Link } from 'react-router-dom';
import logo from '../../../assets/Logof.jpg';
import Ioffres from "../../../objets/offres"
import React from "react";

function Chercheur(){
    // Liste des métiers informatiques
    const data = ["Développeur de logiciels", "Ingénieur en développement web", "Analyste de données", "Administrateur système", "Administrateur de base de données", "Ingénieur en cybersécurité", "Ingénieur réseau","Architecte logiciel","Responsable de la gestion de projet informatique","Consultant en informatique","Expert en big data", "Analyste en intelligence artificielle","Architecte cloud"];
    // État local pour stocker la valeur de la recherche
    //const [value, setValue] = useState("");
    // Fonction de gestion du changement dans le champ de recherche
   // function handleChange(event: ChangeEvent<HTMLInputElement>) {
    //    setValue(event.target.value);
    //}

    const [objects, setObjects] = useState<Ioffres[]>([]);
    const [selectedObject, setSelectedObject] = useState<Ioffres | null>(null);
    const [filter, setFilter] = useState<string>("");

    const listOfObjects: Ioffres[] = [
        { id: 1, name: "Développeur", typeOffre:"CDI", entreprise: {username: "CSRECRUT", mail: "test@gmail.com",}, adresse:{rue : "AVENUE DE ETATS UNIS", numero: 26, ville: {name:"Versaille", code:78000}}, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"},
        { id: 2, name: "Ingénieur en développement", typeOffre:"CDD", entreprise: {username: "CSRECRUT", mail: "test@gmail.com",}, adresse:{rue : "AVENUE DE ETATS UNIS", numero: 26, ville: {name:"Versaille", code:78000}}, description:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?" },
        { id: 3, name: "Analyste de données", typeOffre:"STAGE",entreprise: {username: "CSRECRUT", mail: "test@gmail.com",}, adresse:{rue : "AVENUE DE ETATS UNIS", numero: 26, ville: {name:"Versaille", code:78000}}, description:"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"}
    ];

    useEffect(() => {
        // Fonction pour récupérer la liste d'Offres via fetch au chargement de la page
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
            setObjects(listOfObjects);
        } catch (error) {
            console.error("Erreur:", error);
        }
        };

        fetchObjects();
    }, []);

    const handleObjectClick = (obj: Ioffres) => {
        setSelectedObject(obj);
    };

    const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilter(event.target.value);
    };

    // Filtrer la liste d'Offres en fonction du texte saisi dans le champ de saisie
    const filteredObjects = Array.isArray(objects)
  ? objects.filter((obj) =>{
        if (obj.name) {
            return obj.name.toLowerCase().includes(filter.toLowerCase());
        }
        return false;}
    )
  : [];
        
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
            {/* Liste d'Offres */}
            <div style={{ display: "flex" }}>
                {/* Partie gauche: Liste d'Offres */}
                <div style={{ flex: 1 }}>
                    <div>
                        {filteredObjects.map((obj) => (
                        /*<li key={obj.id} onClick={() => handleObjectClick(obj)}>
                            {obj.name}
                        </li>*/
                        <div
                            key={obj.id}
                            onClick={() => {
                                console.log("Clicked on:", obj);
                                handleObjectClick(obj);
                            }}
                            style={{
                                background: "#f0f0f0", // Couleur d'arrière-plan
                                borderRadius: "8px", // Rayon de la bordure
                                padding: "8px", // Marge intérieure
                                marginBottom: "8px", // Marge inférieure entre les éléments
                                cursor: "pointer", // Curseur indiquant que l'élément est cliquable
                            }}
                            >
                            {obj.name}
                        </div>
                        ))}
                    </div>
                </div>
                {/* Partie droite: Détails de l'Offre sélectionné */}
                <div style={{ flex: 2, margin: "1rem" }}>
                {selectedObject && (
                    <div style={{
                        background: "#f0f0f0", // Couleur d'arrière-plan
                        borderRadius: "8px", // Rayon de la bordure
                        padding: "8px", // Marge intérieure
                        marginBottom: "8px", // Marge inférieure entre les éléments
                      }}>
                        <h2>Détails de l'Offre</h2><br></br>
                        <p>Nom: {selectedObject.name}</p><br></br>
                        <p>entreprise: {selectedObject.entreprise?.username}</p><br></br>
                        <p>Adresse: {selectedObject.adresse?.numero} {selectedObject.adresse?.rue} {selectedObject.adresse?.ville?.name}, {selectedObject.adresse?.ville?.code}</p><br></br>
                        <p>Description: {selectedObject.description}</p><br></br>

                        {/* Afficher d'autres détails de l'Offre si nécessaire */}
                    </div>
                )}
                </div>
            </div>                   
        </div>
    );
}


export default Chercheur;
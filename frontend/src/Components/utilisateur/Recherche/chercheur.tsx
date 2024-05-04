import { useState,  ChangeEvent , useEffect} from "react";
//import "./chercheur.css"
import { Link } from 'react-router-dom';
import logo from '../../../assets/Logof.jpg';
import Ioffres from "../../../objets/offres"
import React from "react";

function Chercheur(){
    const [suggestions, setSuggestions] = useState<string[]>([]);
    
    const data = ["Développeur de logiciels", "Ingénieur en développement web", "Analyste de données", "Administrateur système", "Administrateur de base de données", "Ingénieur en cybersécurité", "Ingénieur réseau","Architecte logiciel","Responsable de la gestion de projet informatique","Consultant en informatique","Expert en big data", "Analyste en intelligence artificielle","Architecte cloud"];
 
    const [filter, setFilter] = useState<string>("");

    const listOfObjects: Ioffres[] = [
        { id: 1, name: "Développeur", typeOffre:"CDI", entreprise: {username: "CSRECRUT", mail: "test@gmail.com",}, adresse:{rue : "AVENUE DE ETATS UNIS", numero: 26, ville: {name:"Versaille", code:78000}}, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"},
        { id: 2, name: "Ingénieur en développement", typeOffre:"CDD", entreprise: {username: "CSRECRUT", mail: "test@gmail.com",}, adresse:{rue : "AVENUE DE ETATS UNIS", numero: 26, ville: {name:"Versaille", code:78000}}, description:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?" },
        { id: 3, name: "Analyste de données", typeOffre:"STAGE",entreprise: {username: "CSRECRUT", mail: "test@gmail.com",}, adresse:{rue : "AVENUE DE ETATS UNIS", numero: 26, ville: {name:"Versaille", code:78000}}, description:"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"},
        { id: 4, name: "Développeur", typeOffre:"CDI", entreprise: {username: "CSRECRUT", mail: "test@gmail.com",}, adresse:{rue : "AVENUE DE ETATS UNIS", numero: 26, ville: {name:"Versaille", code:78000}}, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"},
        { id: 5, name: "Ingénieur en développement", typeOffre:"CDD", entreprise: {username: "CSRECRUT", mail: "test@gmail.com",}, adresse:{rue : "AVENUE DE ETATS UNIS", numero: 26, ville: {name:"Versaille", code:78000}}, description:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?" },
        { id: 6, name: "Analyste de données", typeOffre:"STAGE",entreprise: {username: "CSRECRUT", mail: "test@gmail.com",}, adresse:{rue : "AVENUE DE ETATS UNIS", numero: 26, ville: {name:"Versaille", code:78000}}, description:"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"},
        { id: 7, name: "Développeur", typeOffre:"CDI", entreprise: {username: "CSRECRUT", mail: "test@gmail.com",}, adresse:{rue : "AVENUE DE ETATS UNIS", numero: 26, ville: {name:"Versaille", code:78000}}, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"},
        { id: 8, name: "Ingénieur en développement", typeOffre:"CDD", entreprise: {username: "CSRECRUT", mail: "test@gmail.com",}, adresse:{rue : "AVENUE DE ETATS UNIS", numero: 26, ville: {name:"Versaille", code:78000}}, description:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?" },
        { id: 9, name: "Analyste de données", typeOffre:"STAGE",entreprise: {username: "CSRECRUT", mail: "test@gmail.com",}, adresse:{rue : "AVENUE DE ETATS UNIS", numero: 26, ville: {name:"Versaille", code:78000}}, description:"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"},
        { id: 10, name: "Développeur", typeOffre:"CDI", entreprise: {username: "CSRECRUT", mail: "test@gmail.com",}, adresse:{rue : "AVENUE DE ETATS UNIS", numero: 26, ville: {name:"Versaille", code:78000}}, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"},
        { id: 11, name: "Ingénieur en développement", typeOffre:"CDD", entreprise: {username: "CSRECRUT", mail: "test@gmail.com",}, adresse:{rue : "AVENUE DE ETATS UNIS", numero: 26, ville: {name:"Versaille", code:78000}}, description:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?" },
        { id: 12, name: "Analyste de données", typeOffre:"STAGE",entreprise: {username: "CSRECRUT", mail: "test@gmail.com",}, adresse:{rue : "AVENUE DE ETATS UNIS", numero: 26, ville: {name:"Versaille", code:78000}}, description:"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"},
    ];
    const [objects, setObjects] = useState<Ioffres[]>(listOfObjects);
    const [selectedObject, setSelectedObject] = useState<Ioffres | null>(listOfObjects[0]);
    // useEffect(() => {
    //     //Fonction pour récupérer la liste d'Offres via fetch au chargement de la page
    //     const fetchObjects = async () => {
    //     try {
    //         // const response = await fetch("https://projet-aws-backend.onrender.com/offre/list",{
    //         //     method: 'GET',
    //         //     headers: {
    //         //       'Content-Type': 'application/json',
    //         //       'Authorization': 'Bearer ' + localStorage.getItem("token")
    //         //     },
    //         //   });
    //         // if (!response.ok) {
    //         // throw new Error("Erreur lors de la récupération des données");
    //         // }
    //         // const data = await response.json();
    //         // setObjects(data);
    //         setObjects(listOfObjects);
    //     } catch (error) {
    //         console.error("Erreur:", error);
    //     }
    //     };

    //     // fetchObjects();
    // }, []);

    const handleObjectClick = (obj: Ioffres) => {
        setSelectedObject(obj);
    };

    // const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        
    // };

    const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilter(event.target.value);
        // const userInput = event.target.value;
        // const filteredSuggestions = objects
        //     .map((offre) => offre.name) // Ou une autre propriété contenant les suggestions
        //     .filter((name): name is string => name !== null && name !== undefined); // Filtrer les valeurs null ou undefined
        // const matchedSuggestions = filteredSuggestions.filter(name =>
        //     name.toLowerCase().includes(userInput.toLowerCase())
        // );
        // setSuggestions(matchedSuggestions);
    };

    // Filtrer la liste d'Offres en fonction du texte saisi dans le champ de saisie
    const filteredObjects = Array.isArray(objects) ? objects.filter((obj) =>{
        if (obj.name) {
            return obj.name.toLowerCase().includes(filter.toLowerCase());
        }
        return false;}
    ) : [];
        
    return (
        <div className="min-h-screen bg-[#f1f2f6] flex flex-col items-center justify-start p-6">
    {/* Barre de recherche */}
    <div className="w-70 bg-gray-200 rounded-md mt-8 px-4 py-2 flex items-center">
        {/* Champ de saisie de texte pour la recherche */}
        <input type="text" value={filter} onChange={handleFilterChange} className="text-lg flex-grow px-4 bg-transparent focus:outline-none" placeholder="Rechercher un métier..." />
        {/* Bouton de recherche */}
        <button onClick={() => console.log(filter)} className="bg-blue-500 text-white text-lg px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none">
            {/* Icône de recherche */}
            <span className="material-symbols-outlined text-3xl">search</span>
        </button>
    </div>
    {/* Liste des métiers */}
    {/* {suggestions.length > 0 && (
        <ul className="absolute bg-white w-70 rounded-md shadow-md mt-1">
            {suggestions.map((suggestion, index) => (
                <li
                    key={index}
                    onClick={() => {
                        setFilter(suggestion);
                        setSuggestions([]);
                    }}
                    className="px-4 py-2 cursor-pointer hover:bg-blue-500 hover:text-white text-lg"
                >
                    {suggestion}
                </li>
            ))}
        </ul>
    )} */}
    {/* Liste d'Offres */}
    <div className="flex mt-8 max-w-[1000px]">
        {/* Partie gauche: Liste d'Offres */}
        <div className="flex-1 overflow-auto max-h-[650px]">
            <div>
                {filteredObjects.map((obj) => (
                    <div
                        key={obj.id}
                        onClick={() => {
                            console.log("Clicked on:", obj);
                            handleObjectClick(obj);
                        }}
                        className="bg-gray-200 rounded-lg p-4 mb-4 cursor-pointer"
                    >
                        {obj.name}
                    </div>
                ))}
            </div>
        </div>
        {/* Partie droite: Détails de l'Offre sélectionné */}
        <div className="flex-1 ml-4 max-h-[650px]">
            {selectedObject && (
                <div className="bg-gray-200 rounded-lg p-4 mb-4">
                    <h2 className="text-xl font-bold mb-4">Détails de l'Offre</h2>
                    <p><span className="font-bold">Nom:</span> {selectedObject.name}</p>
                    <p><span className="font-bold">entreprise:</span> {selectedObject.entreprise?.username}</p>
                    <p><span className="font-bold">Adresse:</span> {selectedObject.adresse?.numero} {selectedObject.adresse?.rue} {selectedObject.adresse?.ville?.name}, {selectedObject.adresse?.ville?.code}</p>
                    <p><span className="font-bold">Description:</span> {selectedObject.description}</p>
                </div>
            )}
        </div>
    </div>
</div>

    );
}


export default Chercheur;
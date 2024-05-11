import { useState, useEffect} from "react";
//import "./chercheur.css"
import { useNavigate } from 'react-router-dom';
import Ioffres from "../../../objets/offres";
import React from "react";

function Chercheur(){
    //const [suggestions, setSuggestions] = useState<string[]>([]);
    const navigate = useNavigate();

    const [filter, setFilter] = useState<string>("");

    const [objects, setObjects] = useState<Ioffres[] | null >(null);
    const [selectedObject, setSelectedObject] = useState<Ioffres | null>(null);
    

    const handleObjectClick = (obj: Ioffres) => {
        setSelectedObject(obj);
    };

    useEffect(() => {
        //Fonction pour récupérer la liste d'Offres via fetch au chargement de la page
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
            const temp = data.data;
            if(temp.length !== 0){
              setObjects(temp);
              setSelectedObject(temp[0])
            }
        } catch (error) {
          console.error("Erreur:", error);
          navigate('/');
        }
        };

        fetchObjects();
    }, []);
    
    const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const filteredObjects = objects?.filter((obj) =>
            obj.name?.toLowerCase().includes(event.target.value.toLowerCase())
        );
    
        setFilter(event.target.value);
    
        // Mettre à jour selectedObject avec le premier élément de la liste filtrée
        if (filteredObjects && filteredObjects.length > 0) {
            setSelectedObject(filteredObjects[0]);
        } else {
            setSelectedObject(null); // Si la liste filtrée est vide, mettre selectedObject à null
        }
    };

    // Filtrer la liste d'Offres en fonction du texte saisi dans le champ de saisie
    const filteredObjects = Array.isArray(objects) ? objects.filter((obj) =>{
        if (obj.name) {
            return obj.name.toLowerCase().includes(filter.toLowerCase());
        }
        return false;}
    ) : [];
    if (objects === null) {
        return (
            <div className="min-h-screen bg-[#f1f2f6] flex items-center justify-center container mx-auto flex flex-wrap pb-20 pt-20">
                <div className="w-70 bg-gray-200 rounded-md mt-8 px-4 py-2 flex items-center">
                    {/* Champ de saisie de texte pour la recherche */}
                    <input type="text" value={filter} onChange={handleFilterChange} className="text-lg flex-grow px-4 bg-transparent focus:outline-none" placeholder="Rechercher un métier..." />
                    {/* Bouton de recherche */}
                    <button onClick={() => console.log(filter)} className="bg-blue-500 text-white text-lg px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none">
                        {/* Icône de recherche */}
                        <span className="material-symbols-outlined text-3xl">Recherche</span>
                    </button>
                </div>
                <br></br>
                <br></br>
                <div className="flex mt-8 max-w-[1000px] px-4 py-2"><p className="text-lg text-gray-700 mb-8">Aucune offre disponible pour le moment.</p></div>
                
            </div>);
    }else{    
        function handlepostule() {
            navigate('/utilisateur/importercv',{
                state: {
                  offre: selectedObject,
                }
            });
        }

        return (
            <div className="min-h-screen bg-[#f1f2f6] flex flex-col items-center justify-start p-6 pt-20">
                {/* Barre de recherche */}
                <div className="w-70 bg-white rounded-md mt-8 px-4 py-2 flex items-center">
                    {/* Champ de saisie de texte pour la recherche */}
                    <input type="text" value={filter} onChange={handleFilterChange} className="text-lg flex-grow px-4 bg-transparent focus:outline-none" placeholder="Rechercher un métier..." />
                    {/* Bouton de recherche */}
                    <button onClick={() => console.log(filter)} className="bg-blue-500 text-white text-lg px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none">
                        {/* Icône de recherche */}
                        <span className="material-symbols-outlined text-3xl">Recherche</span>
                    </button>
                </div>
                {/* Liste d'Offres */}
                <div className="flex mt-8 max-w-[1000px]">
                    {/* Partie gauche: Liste d'Offres */}
                    <div className="flex-1 overflow-auto h-[650px] max-h-full">
                        <div>
                            {filteredObjects.map((obj) => (
                                <div key={obj.id}
                                    onClick={() => {
                                        console.log("Clicked on:", obj);
                                        handleObjectClick(obj);
                                    }}
                                    className="bg-white rounded-lg p-4 mb-4 cursor-pointer bg-white"
                                >
                                <h1 className="text-xl font-bold mb-4 text-blue-900">{obj.name}</h1>
                                <p><span className="font-bold text-blue-500">Entreprise:</span> {obj.entreprise?.name}</p>
                                <p><span className="font-bold text-blue-500">Ville:</span> {obj.adresse?.ville?.name}</p>
                                <p><span className="font-bold text-blue-500">Type Contrat:</span> {obj.typeOffre}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Partie droite: Détails de l'Offre sélectionné */}
                    <div className="flex-1 ml-4 ">
                        {selectedObject && (
                            <div className="bg-white rounded-lg p-4 mb-4 bg-white">
                                <h2 className="text-xl font-bold mb-4 text-blue-900">Détails de l'Offre</h2>
                                <p><span className="font-bold text-blue-500">Poste : </span> {selectedObject.name}</p>
                                <p><span className="font-bold text-blue-500">Entreprise : </span> {selectedObject.entreprise?.name}</p>
                                <p><span className="font-bold text-blue-500">Type Contrat : </span> {selectedObject.typeOffre}</p>
                                <p><span className="font-bold text-blue-500">Mode de Travail : </span> {selectedObject.lieuPoste}</p>
                                <p><span className="font-bold text-blue-500">Frequence salaire : </span> {selectedObject.frequenceSalaire}</p>
                                <p><span className="font-bold text-blue-500">Salaire minimale : </span> {selectedObject.salaireMin}</p>
                                <p> <span className="font-bold text-blue-500">Salaire maximale : </span> {selectedObject.salaireMax}</p>
                                <p><span className="font-bold text-blue-500">Adresse : </span> {selectedObject.adresse?.numero} {selectedObject.adresse?.rue} {selectedObject.adresse?.ville?.name}, {selectedObject.adresse?.ville?.code}</p>
                                <br></br>
                                <p><span className="font-bold text-blue-500">Description : </span> {selectedObject.description}</p>
                                <br></br>
                                <button onClick={handlepostule} className="bg-blue-500 text-white text-lg px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none">
                                    <span className="material-symbols-outlined text-xl">Postuler</span>
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

        );
    }
}


export default Chercheur;
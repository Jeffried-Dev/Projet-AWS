import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Ipostulers from '../../../objets/postuler';

const ListePostulants = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { offre } = location.state;
    const [objects, setObjects] = useState<Ipostulers[] | null >(null);
    
    useEffect(() => {
        //Fonction pour récupérer la liste d'Offres via fetch au chargement de la page
        const fetchObjects = async () => {
            try {
                const response = await fetch(`https://projet-aws-backend.onrender.com/postuler/PostulerByOffreId/${offre.id}`,{
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
                //console.error("Erreur:", data);
                const temp = data.data;
                console.log(temp)
                if(temp.length !== 0){
                setObjects(temp);
                }
                
                // setObjects(listOfObjects);
            } catch (error) {
            console.error("Erreur:", error);
            navigate('/entreprise/connexion');
            }
        };
    
        fetchObjects();
    }, []);
    if (objects === null) {
        return   <div className="min-h-screen bg-[#f1f2f6] flex items-center justify-center container mx-auto flex flex-wrap pb-20 pt-20"><p className="text-lg text-gray-700 mb-8">Aucun postulant pour le moment.</p></div>;
    }else{

        async function handleCv(obj: Ipostulers){
            try {
                console.log(obj.cv)
                const response = await fetch(`https://projet-aws-backend.onrender.com/postuler/files/${obj.cv}`,{
                    method: 'GET',
                    headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem("token")
                    },
                });
                if (!response.ok) {
                    throw new Error("Erreur lors de la récupération des données");
                }
                const blob = await response.blob();

                // Créez un URL à partir du blob
                const url = window.URL.createObjectURL(blob);
                // // Ouvrez une nouvelle fenêtre pour afficher le fichier PDF
                // const pdfWindow = window.open(url, '_blank');
                // if (!pdfWindow) {
                //     throw new Error("Impossible d'ouvrir une nouvelle fenêtre");
                // }
                // // Créez un lien <a> pour télécharger le fichier
                const link = document.createElement('a');
                link.href = url;
                const nompdf = 'Cv_' + obj.offre?.name +'_'+ Math.random()+'.pdf'
                link.setAttribute('download', nompdf); // Définissez le nom du fichier
                // Ajoutez le lien au DOM
                document.body.appendChild(link);
                // Cliquez sur le lien pour démarrer le téléchargement
                link.click();
                //Nettoyez l'URL après le téléchargement
                window.URL.revokeObjectURL(url);
            } catch (error) {
                console.error("Erreur:", error);
            }
        }

        async function handleDecision(obj: Ipostulers,decision: boolean) {
            try {
                const form = obj
                form.state = true
                form.decision = decision
                const response = await fetch("https://projet-aws-backend.onrender.com/postuler/update",{
                    method: 'PUT',
                    headers: {
                      'Content-Type': 'application/json',
                      'Authorization': 'Bearer ' + localStorage.getItem("token")
                    },
                    body: JSON.stringify(form),
                  });
                if (!response.ok) {
                throw new Error("Erreur lors de la récupération des données");
                }else{
                    const responseData = await response.json();
                    if(responseData.status === 200){
                        const updatedObjects = objects?.map((obj) => {
                            if (obj.id === form.id) {
                                return {
                                    ...obj,
                                    'decision': decision,
                                    'state': true  
                                };
                            } else {
                                return obj;
                            }
                        });
                        if(updatedObjects){
                            setObjects(updatedObjects);
                        }
                    }else{
                        console.log(responseData)
                    }

                }
            } catch (error) {
                console.error("Erreur:", error);
            }
        }

        return (
            <div className="min-h-screen bg-[#f1f2f6] flex items-center justify-center container mx-auto flex flex-wrap pb-20 pt-20">
                <table className="text-left w-full md:w-[75%] border-collapse bg-white"> 
                    <thead>
                        <tr>
                            <th className="py-4 px-6 bg-blue-lightest font-bold uppercase text-sm text-blue-dark border-b border-blue-light">Prénom</th>
                            <th className="py-4 px-6 bg-blue-lightest font-bold uppercase text-sm text-blue-dark border-b border-blue-light">Nom</th>
                            <th className="py-4 px-6 bg-blue-lightest font-bold uppercase text-sm text-blue-dark border-b border-blue-light">Adresse e-mail</th>
                            <th className="py-4 px-6 bg-blue-lightest font-bold uppercase text-sm text-blue-dark border-b border-blue-light">CV</th>
                            <th className="py-4 px-6 bg-blue-lightest font-bold uppercase text-sm text-blue-dark border-b border-blue-light">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {objects?.map((obj) => (<tr className="hover:bg-blue-lighter">
                            <td className="py-4 px-6 border-b border-blue-light">{obj.utilisateur?.secondName}</td>
                            <td className="py-4 px-6 border-b border-blue-light">{obj.utilisateur?.name}</td>
                            <td className="py-4 px-6 border-b border-blue-light">{obj.utilisateur?.mail}</td>
                            <td className="py-4 px-6 border-b border-blue-light"><button onClick={() => {
                                        console.log("Clicked on:", obj);
                                        handleCv(obj);
                                    }
                                } className='bg-blue-600 mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'><i className="fas fa-eye mr-2"></i>Visualiser</button></td>
                            {obj.state ? 
                                <td> {obj.decision ? <span className='text-green-600 font-bold'>Accepté(e)</span> : <span className='text-red-600 font-bold'>Refusé(e)</span>} </td>
                            : <td className="py-4 px-6 border-b border-blue-light"><button onClick={() => {
                                        console.log("Clicked on:", obj);
                                        handleDecision(obj,true);
                                    }} className='bg-green-600 mx-auto lg:mx-0 hover:underline gradient text-Black font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'>accepter</button> <button onClick={() => {
                                        console.log("Clicked on:", obj);
                                        handleDecision(obj,false);
                                    }} className='bg-red-600 mx-auto lg:mx-0 hover:underline gradient text-Black font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'>rejeter</button></td>}
                        </tr>))} 
                    </tbody>
                </table>
            </div>
        );
    }
};

export default ListePostulants;


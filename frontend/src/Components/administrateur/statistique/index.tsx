import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Ipostulers from '../../../objets/postuler';

const Statistique = () => {
    const navigate = useNavigate();
    const [objects, setObjects] = useState<Ipostulers[] | null >(null);
    useEffect(() => {
        //Fonction pour récupérer la liste d'Offres via fetch au chargement de la page
        const fetchObjects = async () => {
            try {
                const response = await fetch(`https://projet-aws-backend.onrender.com/postuler/list`,{
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
            navigate('/admin');
            }
        };
    
        fetchObjects();
    }, []);

    if (objects === null) {
        return   <div className="min-h-screen bg-[#f1f2f6] flex items-center justify-center container mx-auto flex flex-wrap pb-20 pt-20"><p className="text-lg text-gray-700 mb-8">Aucun postulant pour le moment.</p></div>;
    }else{

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
                            <td className="py-4 px-6 border-b border-blue-light">{obj.utilisateur?.name}</td>
                            <td className="py-4 px-6 border-b border-blue-light">{obj.utilisateur?.mail}</td>
                        </tr>))} 
                    </tbody>
                </table>
            </div>
        );
    }
};

export default Statistique;
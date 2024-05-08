import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Ipostulers from '../../../objets/postuler';

const Candidature = () => {
  const [objects, setObjects] = useState<Ipostulers[] | null >(null);
  const navigate = useNavigate();

  const truncateDescription = (description: string): string => {
    return description.length > 200 ? description.substring(0, 300) + '...' : description;
  };

  useEffect(() => {
    //Fonction pour récupérer la liste d'Offres via fetch au chargement de la page
    const fetchObjects = async () => {
    try {
        const response = await fetch("http://localhost:8000/postuler/PostulerByUser",{
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
        if(temp.length !== 0){
          setObjects(temp);
        }
        
        // setObjects(listOfObjects);
    } catch (error) {
      console.error("Erreur:", error);
      navigate('/utilisateur/connexion');
    }
    };

    fetchObjects();
  }, []);

    // function handlepostule() {
    //   navigate('/utilisateur/importercv',{
    //       state: {
    //         offre: selectedObject,
    //       }
    //   });
    // }

    // faire une modale pour le deatail sur la candidature, pour suprimer et autre

  if (objects === null) {
    return   <div className="min-h-screen bg-[#f1f2f6] flex items-center justify-center container mx-auto flex flex-wrap pb-20 pt-20"><p className="text-lg text-gray-700 mb-8">Aucune offre disponible pour le moment.</p></div>;
  }else{
    return (
      <div className="min-h-screen bg-[#f1f2f6] flex items-center justify-center container mx-auto flex flex-wrap pb-20 pt-20">
        {objects?.map((obj) => (
          <div className="w-full hover:scale-105 focus:outline-none focus:shadow-outline md:w-1/3 p-6 flex flex-col  flex-shrink">
            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
              <a href="#" className="flex flex-wrap no-underline hover:no-underline">
                <div className="w-full font-bold text-xl text-blue-600 px-6">
                  {obj.offre?.name}
                </div>
                <p className="w-full text-blue-400 text-xs md:text-sm px-6">
                  {obj.offre?.typeOffre}
                </p>
                <br></br>
                <p className="text-gray-800 text-base px-6 mb-5">
                  {truncateDescription(obj.offre?.description || "")}
                </p>
              </a>
            </div>
            <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
              <div className="flex items-center justify-center">
                <button className=" bg-blue-600 mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                  Action
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default Candidature;
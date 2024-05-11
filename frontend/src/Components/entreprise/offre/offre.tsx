import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Ioffres from "../../../objets/offres";

const Publication = () => {
  const [objects, setObjects] = useState<Ioffres[] | null >(null);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const truncateDescription = (description: string): string => {
    return description.length > 200 ? description.substring(0, 300) + '...' : description;
  };

  useEffect(() => {
    //Fonction pour récupérer la liste d'Offres via fetch au chargement de la page
    const fetchObjects = async () => {
    try {
        const response = await fetch("https://projet-aws-backend.onrender.com/offre/Mylist",{
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
      navigate('/entreprise/connexion');
    }
    };

    fetchObjects();
  }, []);

    // faire une modale pour le deatail sur l'offre, pour suprimer et autre action

  if (objects === null) {
    return   <div className="min-h-screen bg-[#f1f2f6] flex items-center justify-center container mx-auto flex flex-wrap pb-20 pt-20"><p className="text-lg text-gray-700 mb-8">Aucune offre disponible pour le moment.</p></div>;
  }else{
    const handleclick = (obj: Ioffres) => {
      setIsLoading(true);
        navigate('/entreprise/ListePostulants',{
          state: {
            offre: obj,
          }
        });
      setIsLoading(false);
    }
    const handleActivation = async (obj: Ioffres, bool: boolean) => {
      setIsLoading(true);
      try {
        const form = obj
        form.state = bool
        const response = await fetch("https://projet-aws-backend.onrender.com/offre/update",{
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
                            'state': bool  
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
      setIsLoading(false);
    }

    return (
      <div className="min-h-screen bg-[#f1f2f6] flex items-center justify-center container mx-auto flex flex-wrap pb-20 pt-20">
        {objects?.map((obj) => (
          <div className="w-full hover:scale-105 focus:outline-none focus:shadow-outline md:w-1/3 p-6 flex flex-col  flex-shrink">
            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
              <a href="#" className="flex flex-wrap no-underline hover:no-underline">
                <div className="w-full font-bold text-xl text-blue-600 px-6">
                  {obj.name}
                </div>
                <p className="w-full text-blue-400 font-bold text-xs md:text-sm px-6">
                  {obj.typeOffre}
                </p>
                <br></br>
                <p className="text-gray-800 text-base px-6 mb-5">
                  {truncateDescription(obj.description || "")}
                </p>
              </a>
            </div>
            <div className=" flex items-center justify-between flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
              <button onClick={() => {
                                      console.log("Clicked on:", obj);
                                      handleclick(obj);
                                  }} className="bg-blue-600 mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-2 px-4 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out" disabled={isLoading}>{isLoading ? 'Chargement...' : 'Liste des postulants'}
                
              </button>
              {obj.state ? <button onClick={() => {
                                      console.log("Clicked on:", obj);
                                      handleActivation(obj,false);
                                  }} className="bg-red-600 mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-2 px-4 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out" disabled={isLoading}>{isLoading ? 'Chargement...' : 'Desactiver'}
                
              </button> : <button onClick={() => {
                                      console.log("Clicked on:", obj);
                                      handleActivation(obj,true);
                                  }} className="bg-green-600 mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-2 px-4 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out" disabled={isLoading}>{isLoading ? 'Chargement...' : 'Activer'}
                
              </button>}
            </div>
          </div>
        ))}
      </div>
    );
  }
  
}
export default Publication;

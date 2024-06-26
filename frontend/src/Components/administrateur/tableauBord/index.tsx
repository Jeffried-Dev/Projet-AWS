import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Ientreprise from '../../../objets/entreprise';
import Iutilisateur from '../../../objets/utilisateur';
import Ioffres from '../../../objets/offres';

const TableauBord = () => {
    const navigate = useNavigate();
    const [objects, setObjects] = useState<Ientreprise[] | null >(null);
    const [utilisateurs, setUtilisateurs] = useState<Iutilisateur[] | null >(null);
    const [offres, setOffres] = useState<Ioffres[] | null >(null);
    const [isLoading, setIsLoading] = useState(false);
    const truncateDescription = (description: string): string => {
        return description.length > 200 ? description.substring(0, 300) + '...' : description;
      };
    useEffect(() => {
        const fetchObjects = async () => {
            try {

                const response = await fetch(`https://projet-aws-backend.onrender.com/entreprise/list`,{
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

                const response1 = await fetch(`https://projet-aws-backend.onrender.com/utilisateur/list`,{
                    method: 'GET',
                    headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem("token")
                    },
                });
                if (!response1.ok) {
                    throw new Error("Erreur lors de la récupération des données");
                }
                const data1 = await response1.json();
                //console.error("Erreur:", data);
                const temp1 = data1.data;
                console.log(temp1)
                if(temp1.length !== 0){
                    setUtilisateurs(temp1);
                }

                const response2 = await fetch(`https://projet-aws-backend.onrender.com/offre/list`,{
                    method: 'GET',
                    headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem("token")
                    },
                });
                if (!response1.ok) {
                    throw new Error("Erreur lors de la récupération des données");
                }
                const data2 = await response2.json();
                //console.error("Erreur:", data);
                const temp2 = data2.data;
                console.log(temp2)
                if(temp2.length !== 0){
                    setOffres(temp2);
                }
            } catch (error) {
                console.error("Erreur:", error);
                navigate('/admin');
            }
        };
    
        fetchObjects();
    }, []);

    const handleActivationOffre = async (obj: Ioffres, bool: boolean) => {
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
                  const updatedObjects = offres?.map((obj) => {
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
                    setOffres(updatedObjects);
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

    const handleActivationUser = async (obj: Iutilisateur, bool: boolean) => {
        setIsLoading(true);
        try {
          const form = obj
          form.actived = bool
          const response = await fetch("https://projet-aws-backend.onrender.com/utilisateur/update",{
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
                  const updatedObjects = utilisateurs?.map((obj) => {
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
                    setUtilisateurs(updatedObjects);
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

    const handleActivationEntreprise = async (obj: Ientreprise, bool: boolean) => {
        setIsLoading(true);
        try {
          const form = obj
          form.actived = bool
          console.log(form)
          const response = await fetch("https://projet-aws-backend.onrender.com/entreprise/update",{
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
        <div className="min-h-screen bg-[#f1f2f6] flex items-center container mx-auto flex flex-wrap pb-20 pt-20 py-4 px-6">
            <h1 className="text-3xl text-blue-600 pb-6">Tableau de bord</h1>
            <div>
                <p className="text-xl pb-3 flex items-center text-blue-500">Tableau des entreprises</p>
                <br></br>
                { objects ? 
                    <table className="text-left w-full border-separate border border-slate-500 bg-white"> 
                        <thead>
                            <tr>
                                <th className="py-4 px-6 font-bold uppercase border border-slate-600">ID</th>
                                <th className="py-4 px-6 font-bold uppercase border border-slate-600">Nom</th>
                                <th className="py-4 px-6 font-bold uppercase border border-slate-600">Adresse e-mail</th>
                                <th className="py-4 px-6 font-bold uppercase border border-slate-600">Description</th>
                                <th className="py-4 px-6 font-bold uppercase border border-slate-600">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {objects?.map((obj) => (<tr className="hover:bg-blue-lighter">
                                <td className="py-4 px-6 border border-slate-700">{obj.id}</td>
                                <td className="py-4 px-6 border border-slate-700">{obj.name}</td>
                                <td className="py-4 px-6 border border-slate-700">{obj.mail}</td>
                                {obj.description ? <td className="py-4 px-6 border border-slate-700">{truncateDescription(obj.description)}</td> : <td className="py-4 px-6 border-b"></td>}
                                <td className="py-4 px-6 border border-slate-700">
                                {obj.actived ? <button onClick={() => {
                                      console.log("Clicked on:", obj);
                                      handleActivationEntreprise(obj,false);
                                  }} className="bg-red-600 mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-2 px-4 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out" disabled={isLoading}>{isLoading ? 'Chargement...' : 'Desactiver'}
                
              </button> : <button onClick={() => {
                                      console.log("Clicked on:", obj);
                                      handleActivationEntreprise(obj,true);
                                  }} className="bg-green-600 mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-2 px-4 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out" disabled={isLoading}>{isLoading ? 'Chargement...' : 'Activer'}
                
              </button>}
                                </td>
                            </tr>))} 
                        </tbody>
                    </table> : 
                    <table className="text-left w-full border-collapse bg-white">
                        <thead>
                            <tr >
                                <th className="py-4 px-6 font-bold uppercase border border-slate-700"><span className='text-blue-300'>ID</span></th>
                                <th className="py-4 px-6 font-bold uppercase border border-slate-700">Nom</th>
                                <th className="py-4 px-6 font-bold uppercase border border-slate-700">Adresse e-mail</th>
                                <th className="py-4 px-6 font-bold uppercase border border-slate-700">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <td colSpan={4} className="py-4 px-6 border-b">Aucune entreprise pour le moment.</td>
                        </tbody>
                    </table>
                }
            </div>
            <div className='w-full'>
                <br></br>
                <p className="text-xl pb-3 flex items-center text-blue-500">Tableau des utilisateurs</p>
                <br></br>
                { utilisateurs ? 
                    <table className="text-left w-full border-collapse bg-white"> 
                        <thead>
                            <tr>
                                <th className="py-4 px-6 font-bold border-b">ID</th>
                                <th className="py-4 px-6 font-bold border-b">Prénom</th>
                                <th className="py-4 px-6 font-bold border-b">Nom</th>
                                <th className="py-4 px-6 font-bold border-b">Adresse e-mail</th>
                                <th className="py-4 px-6 font-bold border-b">Tel</th>
                                <th className="py-4 px-6 font-bold border-b">Genre</th>
                                <th className="py-4 px-6 font-bold border-b">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {utilisateurs?.map((obj) => (<tr className="hover:bg-blue-lighter">
                                <td className="py-4 px-6 border-b">{obj.id}</td>
                                <td className="py-4 px-6 border-b">{obj.secondName}</td>
                                <td className="py-4 px-6 border-b">{obj.name}</td>
                                <td className="py-4 px-6 border-b">{obj.mail}</td>
                                <td className="py-4 px-6 border-b">{obj.tel}</td>
                                <td className="py-4 px-6 border-b">{obj.gender}</td>
                                <td className="py-4 px-6 border-b">
                                {obj.actived ? <button onClick={() => {
                                      console.log("Clicked on:", obj);
                                      handleActivationUser(obj,false);
                                  }} className="bg-red-600 mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-2 px-4 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out" disabled={isLoading}>{isLoading ? 'Chargement...' : 'Desactiver'}
                
                                    </button> : <button onClick={() => {
                                        console.log("Clicked on:", obj);
                                        handleActivationUser(obj,true);
                                    }} className="bg-green-600 mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-2 px-4 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out" disabled={isLoading}>{isLoading ? 'Chargement...' : 'Activer'}
                    
                                    </button>}
                                </td>
                            </tr>))} 
                        </tbody>
                    </table> : 
                    <div className="min-h-screen bg-[#f1f2f6] flex items-center justify-center container mx-auto flex flex-wrap pb-20 pt-20">
                        <table className="text-left w-full border-collapse bg-white">
                            <thead>
                                <tr>
                                    <th className="py-4 px-6 font-bold border-b">ID</th>
                                    <th className="py-4 px-6 font-bold border-b">Nom</th>
                                    <th className="py-4 px-6 font-bold border-b">Prénom</th>
                                    <th className="py-4 px-6 font-bold border-b">Adresse e-mail</th>
                                    <th className="py-4 px-6 font-bold border-b">Tel</th>
                                    <th className="py-4 px-6 font-bold border-b">Genre</th>
                                </tr>
                            </thead>
                            <tbody>
                                <td colSpan={6} className="py-4 px-6 border-b">Aucun utilisateur pour le moment.</td>
                            </tbody>
                        </table>
                    </div>
                }
            </div>
            <div>
                <br></br>
                <p className="text-xl pb-3 flex items-center text-blue-500">Tableau des offres</p>
                <br></br>
                { offres ? 
                    <table className="text-left w-full border-separate border border-slate-500 bg-white"> 
                        <thead>
                            <tr>
                                <th className="py-4 px-6 font-bold uppercase border border-slate-600">ID</th>
                                <th className="py-4 px-6 font-bold uppercase border border-slate-600">Poste</th>
                                <th className="py-4 px-6 font-bold uppercase border border-slate-600">Entreprise</th>
                                <th className="py-4 px-6 font-bold uppercase border border-slate-600">Type contrat</th>
                                <th className="py-4 px-6 font-bold uppercase border border-slate-600">Frequence salaire</th>
                                <th className="py-4 px-6 font-bold uppercase border border-slate-600">Description</th>
                                <th className="py-4 px-6 font-bold uppercase border border-slate-600">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {offres?.map((obj) => (<tr className="hover:bg-blue-lighter">
                                <td className="py-4 px-6 border border-slate-700">{obj.id}</td>
                                <td className="py-4 px-6 border border-slate-700">{obj.name}</td>
                                <td className="py-4 px-6 border border-slate-700">{obj.entreprise?.name}</td>
                                <td className="py-4 px-6 border border-slate-700">{obj.typeOffre}</td>
                                <td className="py-4 px-6 border border-slate-700">{obj.frequenceSalaire}</td>
                                {obj.description ? <td className="py-4 px-6 border border-slate-700">{truncateDescription(obj.description)}</td> : <td className="py-4 px-6 border-b"></td>}
                                <td className="py-4 px-6 border border-slate-700">
                                {obj.state ? <button onClick={() => {
                                      console.log("Clicked on:", obj);
                                      handleActivationOffre(obj,false);
                                  }} className="bg-red-600 mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-2 px-4 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out" disabled={isLoading}>{isLoading ? 'Chargement...' : 'Desactiver'}
                
                                </button> : <button onClick={() => {
                                    console.log("Clicked on:", obj);
                                    handleActivationOffre(obj,true);
                                }} className="bg-green-600 mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-2 px-4 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out" disabled={isLoading}>{isLoading ? 'Chargement...' : 'Activer'}
                                    
                                </button>}
                                </td>
                            </tr>))} 
                        </tbody>
                    </table> : 
                    <table className="text-left w-full border-collapse bg-white">
                        <thead>
                            <tr >
                                <th className="py-4 px-6 font-bold uppercase border border-slate-700"><span className='text-blue-300'>ID</span></th>
                                <th className="py-4 px-6 font-bold uppercase border border-slate-700">Nom</th>
                                <th className="py-4 px-6 font-bold uppercase border border-slate-700">Adresse e-mail</th>
                                <th className="py-4 px-6 font-bold uppercase border border-slate-700">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <td colSpan={4} className="py-4 px-6 border-b">Aucune entreprise pour le moment.</td>
                        </tbody>
                    </table>
                }
            </div>
        </div>
    );

};

export default TableauBord;
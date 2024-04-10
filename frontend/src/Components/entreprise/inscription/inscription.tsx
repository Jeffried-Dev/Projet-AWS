import React from "react";
import compLogo from '../../../assets/comp.jpg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface InscriptionFormData {
  mail: string;
  password: string;
  repeatedpassword: string;
  name: string;
  adresse: locationData;
  description: string;
}

interface locationData{
  streetNumber: string; 
  street: string; 
  city: string
}

export default function Component() {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState<locationData>({
    streetNumber: '',
    street: '',
    city: ''
  });
  const [formData, setFormData] = useState<InscriptionFormData>({
    mail: '',
    password: '',
    repeatedpassword: '',
    name: '',
    adresse: location,
    description: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(formData.password = formData.repeatedpassword){
      formData.description = description
      formData.adresse = location
      try {
        const response = await fetch('https://projet-aws-backend.onrender.com/entreprise/inscription', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            //'Authorization': 'Bearer ' + localStorage.getItem("token") 
          },
          body: JSON.stringify(formData),
        });
        if (response.ok) {
          // Login successful
         // onSignUpSuccess(response);
          navigate('/entreprise/Validation',{
            state: {
              mail: formData.mail,
            }
          });
        } else {
          // Handle login failure
          console.error('Login failed');
          setError('Nom d\'utilisateur ou mot de passe incorrect');
          
        }
      } catch (error) {
        console.error('Error during login:', error);
      }
    }else{
      console.error('password failed');
    }
    
  };

  return (
    <div className="min-h-screen bg-[#f1f2f6] flex justify-center items-center p-4">
      {/* Conteneur principal */}
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
        {/* Conteneur pour la mise en page en grille */}
        <div className="flex gap-8">
          {/* Première moitié de la mise en page avec une image */}
          <div className="w-1/2">
            <img
              alt="Team working together"
              className="rounded-lg"
             // height="548"
              src={compLogo}
              style={{
                height: '100%', // Redimensionner l'image 
                maxWidth: '100%', // Ajuster l'objet de l'image pour qu'elle s'adapte à la nouvelle taille
               }}
             // width="675"
            />
          </div>
          {/* Deuxième moitié de la mise en page avec les détails de l'entreprise */}
          <div className="w-1/2">
            <h2 className="text-3xl font-bold mb-6">Détails de l'entreprise</h2>
            {/* Formulaire d'inscription */}
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4">
                <div>
                  {/* Champ pour le nom de l'entreprise */}
                  <label className="block text-sm font-semibold mb-1" htmlFor="company-name">
                    Nom de l'entreprise
                  </label>
                  <input className="border-2 border-[#004c8c] rounded-md" type="text" placeholder="Enter your company's name" value={formData.name}
                      onChange={handleChange} name="name" required/>
                </div>
                <div>
                  {/* Champ pour l'adresse e-mail */}
                  <label className="block text-sm font-semibold mb-1" htmlFor="email-address">
                    Adresse e-mail
                  </label>
                  <input className="border-2 border-[#004c8c] rounded-md" type="email" placeholder="example@mail.com" required value={formData.mail}
                      onChange={handleChange} name="mail"/>
                </div>
                {/*<div>
                  Champ pour l'adresse 
                  <label className="block text-sm font-semibold mb-1" htmlFor="location">
                    Adresse
                  </label>
                    <input type="text" id="streetNumber" name="streetNumber" placeholder="Numéro de rue" value={location.streetNumber} onChange={handleChange} required />
                    <span></span>
                    <input type="text" id="street" name="street" placeholder="Rue" value={location.street} onChange={handleChange} required />
                    <span></span>
                    <input type="text" id="city" name="city" placeholder="Ville" value={location.city} onChange={handleChange} required />
                </div>*/}
                <div>
                  {/* Champ pour la description de l'entreprise */}
                  <label className="block text-sm font-semibold mb-1" htmlFor="description">
                    Description
                  </label>
                  <textarea className="border-2 border-[#004c8c] rounded-md" placeholder="A brief description of your company" name="description" required value={description} 
                      onChange={(e) => setDescription(e.target.value)}/>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {/* Champ pour le mot de passe */}
                  <div>
                    <label className="block text-sm font-semibold mb-1" htmlFor="password">
                      Mot de passe
                    </label>
                    <input className="border-2 border-[#004c8c] rounded-md" name="password" type="password" placeholder="Enter your password" required value={formData.password}
                      onChange={handleChange}/>
                  </div>
                  {/* Champ pour retaper le mot de passe */}
                  <div>
                    <label className="block text-sm font-semibold mb-1" htmlFor="retype-password">
                      Retapez le mot de passe
                    </label>
                    <input className="border-2 border-[#004c8c] rounded-md" type="password" name="repeatedpassword" placeholder="Re-enter your password" required value={formData.repeatedpassword}
                      onChange={handleChange}/>
                  </div>
                </div>
                {/* Bouton d'inscription */}
                <button className="w-full bg-[#004c8c] text-white" type="submit">S'inscrire</button>
                {error && <div style={{ color: 'red' }}>{error}</div>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

import userLogo from '../../../assets/Utilisateur.jpg';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Iutilisateur from '../../../objets/utilisateur';

const UserInscription = () => {
  const [formData, setFormData] = useState<Iutilisateur>({
    mail: '',
    password: '',
    repeatedpassword: '',
    gender: '',
    nationality: '',
    secondName: '',
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(formData.password === formData.repeatedpassword){
      try {
        const response = await fetch('https://projet-aws-backend.onrender.com/utilisateur/inscription', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            
          },
          body: JSON.stringify(formData),
        });
        if (response.ok) {
          // Login successful
         // onSignUpSuccess(response);
          navigate('/utilisateur/Validation',{
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
          <div className="w-1/2 flex justify-center items-center">
            <img
              alt="Team working together"
              className="rounded-lg"
              height="548"
              src={userLogo}
              style={{
                aspectRatio: "675/548",
                objectFit: "cover",
              }}
              width="675"
            />
          </div>
          {/* Deuxième moitié de la mise en page avec les détails de l'entreprise */}
          <div className="w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-blue-500">Création de compte</h2>
            {/* Formulaire d'inscription */}
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4">

                <div className="w-full">
                  {/* Champ pour l'adresse e-mail */}
                  <label className="block text-sm font-semibold mb-1" htmlFor="email-address">
                    Adresse e-mail <span className='text-red-500'>*</span> 
                  </label>
                  <input 
                    className="border-2 border-blue-600 rounded-md w-full h-[35px] p-2" 
                    type="email" 
                    placeholder="example@mail.com"
                    name="mail"
                    value={formData.mail}
                    onChange={handleChange}
                    required
                    />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {/* Champ pour le mot de passe */}
                  <div>
                    <label className="block text-sm font-semibold mb-1" htmlFor="password">
                      Mot de passe <span className='text-red-500'>*</span> 
                    </label>
                    <input className="border-2 border-blue-600 rounded-md w-full h-[35px] p-2" 
                      type="password" 
                      placeholder="taper le mot de passe"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      />
                  </div>
                  {/* Champ pour retaper le mot de passe */}
                  <div>
                    <label className="block text-sm font-semibold mb-1" htmlFor="retype-password">
                      Retapez le mot de passe <span className='text-red-500'>*</span> 
                    </label>
                    <input className="border-2 border-blue-600 rounded-md w-full h-[35px] p-2" 
                      type="password" 
                      placeholder="retaper le mot de passe" 
                      name="repeatedpassword"
                      value={formData.repeatedpassword}
                      onChange={handleChange}
                      required/>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-1" htmlFor="secondName">
                        Prénom <span className='text-red-500'>*</span> 
                    </label>
                    <input
                        className="border-2 border-blue-600 rounded-md w-full h-[35px] p-2"
                        type="text"
                        placeholder="Prénom"
                        name="secondName"
                        value={formData.secondName}
                        onChange={handleChange}
                        required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1" htmlFor="secondName">
                        Nom <span className='text-red-500'>*</span> 
                    </label>
                    <input
                        className="border-2 border-blue-600 rounded-md w-full h-[35px] p-2"
                        type="text"
                        placeholder="Nom"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-1" htmlFor="tel">
                        Téléphone
                    </label>
                    <input
                        className="border-2 border-blue-600 rounded-md w-full h-[35px] p-2"
                        type="text"
                        placeholder="numéro de tel"
                        name="tel"
                        value={formData.tel}
                        onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1" htmlFor="nationality">
                        Nationalité
                    </label>
                    <input
                        className="border-2 border-blue-600 rounded-md w-full h-[35px] p-2"
                        type="text"
                        placeholder="Nationalité"
                        name="nationality"
                        value={formData.nationality}
                        onChange={handleChange}
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-semibold mb-1" htmlFor="gender">
                      Sexe
                    </label>
                    <select
                        className="border-2 border-blue-600 rounded-md w-full h-[35px] p-2"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                    >
                      <option value=""></option>
                      <option value="Homme">Homme</option>
                      <option value="Femme">Femme</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-semibold mb-1" htmlFor="dateNaiss">
                        Date de naissance
                    </label>
                    <input
                        className="border-2 border-blue-600 rounded-md w-full h-[35px] p-2"
                        type="date"
                        name="dateNaiss"
                        value={formData.dateNaiss?.toISOString().split('T')[0]}
                        onChange={handleChange}
                    />
                </div>
                </div>
                
                {/* Bouton d'inscription */}
                <button className="w-full bg-blue-600 text-white h-[35px] rounded-md" type="submit">S'inscrire</button>
                {error && <div style={{ color: 'red' }}>{error}</div>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserInscription;
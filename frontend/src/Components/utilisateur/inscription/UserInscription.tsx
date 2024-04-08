import userLogo from '../../../assets/Utilisateur.jpg';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface InscriptionFormProps {
  //onSignUpSuccess: (e:any) => void;
}

interface InscriptionFormData {
  mail: string;
  password: string;
  repeatedpassword: string;
}
const UserInscription: React.FC<InscriptionFormProps> = () => {
  const [formData, setFormData] = useState<InscriptionFormData>({
    mail: '',
    password: '',
    repeatedpassword: '',
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

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
      try {
        const response = await fetch('http://localhost:8000/utilisateur/inscription', {
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
          <div className="w-1/2">
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
            <h2 className="text-3xl font-bold mb-6">Création de compte</h2>
            {/* Formulaire d'inscription */}
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4">
                <div>
                  {/* Champ pour l'adresse e-mail */}
                  <label className="block text-sm font-semibold mb-1" htmlFor="email-address">
                    Adresse e-mail
                  </label>
                  <input 
                    className="border-2 border-[#004c8c] rounded-md" 
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
                      Mot de passe
                    </label>
                    <input className="border-2 border-[#004c8c] rounded-md" 
                      type="password" 
                      placeholder="Enter your password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      />
                  </div>
                  {/* Champ pour retaper le mot de passe */}
                  <div>
                    <label className="block text-sm font-semibold mb-1" htmlFor="retype-password">
                      Retapez le mot de passe
                    </label>
                    <input className="border-2 border-[#004c8c] rounded-md" 
                      type="password" 
                      placeholder="Re-enter your password" 
                      name="repeatedpassword"
                      value={formData.repeatedpassword}
                      onChange={handleChange}
                      required/>
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

export default UserInscription;
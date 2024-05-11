import { useState } from 'react'; // Importez useState si nécessaire
import imgEntrep from '../../../assets/entreprise.jpg';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import Ientreprise from '../../../objets/entreprise';

export default function Loginentre() {
  // État pour le nom d'utilisateur et le mot de passe
  const [formData, setFormData] = useState<Ientreprise>({
    mail: '',
    password: '',
  });
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
        ...prevState,
        [name]: value,
    }));
  };

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch('https://projet-aws-backend.onrender.com/entreprise/connexion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const responseData = await response.json();
        if(responseData.status != 200){
          setError(responseData.message)
        }else{
          const signUpUser = responseData.data;
          if(formData.mail){
            localStorage.setItem('mail', formData.mail);
          }
          localStorage.setItem('token', signUpUser.token);
          localStorage.setItem('role', signUpUser.role);
          navigate('/entreprise/offre');
        }
      } else {
        // Handle login failure
        console.error('error failed');
        setError('Email ou mot de passe incorrect');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#f1f2f6] flex items-center justify-center p-6">
      {/* Conteneur principal */}
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-4xl flex space-x-8">
        {/* Première moitié de la mise en page avec une image */}
        <div className="w-1/2">
          <img
            alt="Illustration"
            className="w-full h-auto"
            //height="400"
            src={imgEntrep}
            style={{
              height: '100%', // Redimensionner l'image 
              maxWidth: '100%', // Ajuster l'objet de l'image pour qu'elle s'adapte à la nouvelle taille
             }}
            //width="400"
          />
        </div>
        {/* Deuxième moitié de la mise en page avec le formulaire de connexion */}
        <div className="w-1/2 space-y-6">
          <h2 className="text-4xl font-bold text-blue-500">Connexion</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              {/* Champ pour le nom d'utilisateur */}
              <label className="block text-sm font-medium text-gray-700" htmlFor="username">
                Adresse e-mail <span className='text-red-500'>*</span> 
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  className="border-2 border-blue-600 rounded-md w-full h-[35px] p-2"
                  id="username"
                  placeholder="example@mail.com"
                  type="text"
                  name="mail"
                  value={formData.mail}
                  onChange={handleChange}
                  required
                />
                {/* Icône utilisateur va ici */}
              </div>
            </div>
            <div className="mb-12">
              {/* Champ pour le mot de passe */}
              <label className="block text-sm font-medium text-gray-700" htmlFor="password">
                Mot de passe <span className='text-red-500'>*</span> 
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  className="border-2 border-blue-600 rounded-md w-full h-[35px] p-2"
                  name="password"
                  placeholder="mot de passe"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                {/* Icône de verrouillage va ici */}
              </div>
            </div>
            {/* Bouton de connexion */}
            <button className="w-full bg-blue-600 text-white py-2 rounded-md h-[35px]" type="submit" disabled={isLoading}>{isLoading ? 'Chargement...' : 'Se connecter'}</button>
            {error && <div style={{ color: 'red' }}>{error}</div>}
          </form>
          {/* Liens pour la récupération de mot de passe et l'inscription */}
          {/* 
          <div className="text-sm">
            <Link to="#" className="font-medium text-[#2682C4] hover:text-[#059669]">
              Forgot password?
            </Link>
            <p className="text-gray-600 mt-2">
              Don't have an account?{' '}
              <Link to="#" className="font-medium text-[#2682C4] hover:text-[#059669]">
                Sign up
              </Link>
            </p>
          </div>
          */}
        </div>
      </div>
    </div>
  );
}

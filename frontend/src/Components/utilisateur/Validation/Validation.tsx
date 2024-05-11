import React, { useState } from 'react';
//import './Validation.css'
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const VerificationPage = () => {
  const [verificationDigits, setVerificationDigits] = useState(Array(6).fill('')); // Crée un tableau de 6 éléments vides
  const location = useLocation();
  const { mail } = location.state;
  const [isLoading, setIsLoading] = useState(false);
  console.log(mail)
  const [error, setError] = useState('');
  const navigate = useNavigate();
  // Fonction pour gérer le changement de chaque chiffre de vérification
  const handleChange = (index :any, value: any) => {
    const newDigits = [...verificationDigits];
    newDigits[index] = value;
    setVerificationDigits(newDigits);
  };
  

  // Fonction pour soumettre le code de vérification
  const handleSubmit = async (e :any) => {
    e.preventDefault();
    // Ici, vous pouvez ajouter la logique pour valider le code de vérification
    const code = verificationDigits.join(''); // Combinez les chiffres pour former le code complet
    console.log('Code de vérification soumis :', code);
    setIsLoading(true);
    // Vous pouvez également implémenter la redirection vers la page suivante après la vérification
    try {
      const response = await fetch('https://projet-aws-backend.onrender.com/utilisateur/validation/'+code+'/'+mail, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          
        },
      });
      if (response.ok) {
        // Login successful
       // onSignUpSuccess(response);
        navigate('/utilisateur/connexion');
      } else {
        // Handle login failure
        console.error('error failed');
        setError('mauvais code');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#f1f2f6] flex items-center justify-center p-6 flex-grow">
      <div className="verification-container mx-auto  my-8 p-6 bg-white rounded-lg shadow-xl">
        <h2 className="text-2xl font-bold text-center mb-6">Vérification du compte</h2>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <div className="verificationDigits flex justify-center mb-6">
            {verificationDigits.map((digit, index) => (
              <input
                key={index}
                type="text"
                value={digit}
                maxLength={1}
                onChange={(e) => handleChange(index, e.target.value)}
                className="w-12 h-12 border border-gray-300 rounded-md text-center mr-2"
              />
            ))}
          </div>
          <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"disabled={isLoading}>{isLoading ? 'Chargement...' : 'Valider'}
          </button>
          {error && <div className="text-red-500 mt-2">{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default VerificationPage;
import React, { useState } from 'react';
import './Validation.css'

const VerificationPage = () => {
  const [verificationDigits, setVerificationDigits] = useState(Array(6).fill('')); // Crée un tableau de 6 éléments vides

  // Fonction pour gérer le changement de chaque chiffre de vérification
  const handleChange = (index :any, value: any) => {
    const newDigits = [...verificationDigits];
    newDigits[index] = value;
    setVerificationDigits(newDigits);
  };

  // Fonction pour soumettre le code de vérification
  const handleSubmit = (e :any) => {
    e.preventDefault();
    // Ici, vous pouvez ajouter la logique pour valider le code de vérification
    const code = verificationDigits.join(''); // Combinez les chiffres pour former le code complet
    console.log('Code de vérification soumis :', code);
    // Vous pouvez également implémenter la redirection vers la page suivante après la vérification
  };

  return (
    <div className='verification-container'>
    {/* En-tête de la section de vérification */}
      <h2 className='text'>Vérification du compte</h2>
     {/* Formulaire de vérification */}
      <form onSubmit={handleSubmit}>
     {/* Zone de saisie des chiffres de vérification */}
        <div className='verificationDigits'>
            
          {verificationDigits.map((digit, index) => (
            <input
              key={index}
              type="text"
             
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              style={{ width: '30px', marginRight: '5px' }}
            />
          ))}
        </div>
     {/* Bouton de soumission du formulaire */}

        <div>
          <button type="submit">Valider</button>
        </div>
      </form>
    </div>
  );
};

export default VerificationPage;
import React, { useState } from 'react';
import './Validation.css'
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from '../../../assets/Logof.jpg';

const VerificationPage = () => {
  const [verificationDigits, setVerificationDigits] = useState(Array(6).fill('')); // Crée un tableau de 6 éléments vides
  const location = useLocation();
  const { mail } = location.state;
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
  };

  return (
    <div>
        <div className="navbar">
          <div className="logo-container">
            <img src={logo} className='logo' alt="Logo"></img>
            <h2 className="logos">CSRecrut</h2>
          </div>
          <nav>
            <ul>
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/Apropos">À propos</Link></li>
              <li><Link to="/utilisateur/profile">Contact</Link></li>
              {/* Ajoutez d'autres liens de navigation ici */}
            </ul>
          </nav>
        </div>
      <div className='verification-container'>
      {/* En-tête de la section de vérification */}
        <h2 className='text'>Vérification du compte</h2>
      {/* Formulaire de vérification */}
        <form onSubmit={handleSubmit}>
      {/* Zone de saisie des chiffres de vérification */}
          <div className='verificationDigits'>
            <input type='hidden' value={mail} ></input>
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
            {error && <div style={{ color: 'red' }}>{error}</div>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default VerificationPage;
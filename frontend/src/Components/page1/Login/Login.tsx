import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import loginImg from '../../../assets/login.jpg';

// Le composant de connexion
const Login = (props: any) => {
  // États pour stocker les valeurs de l'email, du mot de passe et les messages d'erreur
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // Hook de navigation fourni par React Router
  const navigate = useNavigate();

  // Fonction appelée lorsqu'on clique sur le bouton de connexion
  const onButtonClick = () => {
    //  À mettre à jour plus tard avec la logique de connexion
  };

  // Rendu du composant
  return (
    <div className={'Rectangle'}>
      <div className={'container'}>
        {/* Section de l'image de connexion */}
        <div className={'imageContainer'}>
          <img src={loginImg} className={'leftImage'} alt="Login" />
        </div>

        {/* Section du formulaire de connexion */}
        <div className={'formContainer'}>
          {/* Titre du formulaire */}
          <div className={'titleContainer'}>
            <div>Login</div>
          </div>
          <br />

          {/* Champ d'email avec gestion d'erreur */}
          <div className={'inputContainer'}>
            <input
              value={email}
              placeholder="Enter your email here"
              onChange={(ev) => setEmail(ev.target.value)}
              className={'inputBox'}
            />
            <label className="errorLabel">{emailError}</label>
          </div>
          <br />

          {/* Champ de mot de passe avec gestion d'erreur */}
          <div className={'inputContainer'}>
            <input
              value={password}
              placeholder="Enter your password here"
              onChange={(ev) => setPassword(ev.target.value)}
              className={'inputBox'}
            />
            <label className="errorLabel">{passwordError}</label>
          </div>
          <br />

          {/* Bouton de connexion */}
          <div className={'inputContainer'}>
            <input className={'inputButton'} type="button" onClick={onButtonClick} value={'Log in'} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

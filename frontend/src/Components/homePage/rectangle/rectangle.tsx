import React from 'react';
import { Link } from 'react-router-dom';  // Importez Link depuis react-router-dom
import compLogo from '../../../assets/comp.jpg';
import userLogo from '../../../assets/Utilisateur.jpg';
import './rectangle.css';

interface RectangleProps {
  color: string;
  bottomTextColor: string;
  isLeftButtonVisible?: boolean; 
  isRightButtonVisible?: boolean; 
}

function inscriRecru() {
  // Logique de la fonction si nécessaire
}

const Rectangle: React.FC<RectangleProps> = ({ color, bottomTextColor, isLeftButtonVisible, isRightButtonVisible }) => {
  let phrase: string;
  let logo;

  if (color === '#ccc') {
    phrase = "Inscrivez-vous en tant que recruteur";
    logo = compLogo;
  } else if (color === '#999') {
    phrase = "Inscrivez-vous en tant que chercheur d'emploi";
    logo = userLogo;
  } else {
    phrase = ""; 
  }

  let bottomText: string = "Déjà connecté(e)?";

  return (
    <div className="rectangle" style={{ backgroundColor: color }}>
      <div className="circle"><img src={logo} className="circle" alt="Logo"></img></div>
      <div className="button-container">
        {/* Utilisation de la balise Link pour la navigation */}
        <Link to="./inscription" className="button">{phrase}</Link>
        <div className="bottom-text" style={{ color: bottomTextColor }}>{bottomText}</div>
        {isLeftButtonVisible && <button className="bottom-button left-bottom-button">Connectez-vous ici</button>}
        {isRightButtonVisible && <button className="bottom-button right-bottom-button">Connectez-vous ici</button>}
      </div>
    </div>
  );
}

export default Rectangle;

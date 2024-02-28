// Rectangle.tsx
  import React from 'react';
//import logo from '../../assets/comp.jpg';
import compLogo from '../../assets/comp.jpg';
import userLogo from '../../assets/Utilisateur.jpg';
import './rectangle.css';

interface RectangleProps {
  color: string;
  bottomTextColor: string;
  isLeftButtonVisible?: boolean; 
  isRightButtonVisible?: boolean; 
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
      <div className="circle"><img src={logo} className="circle"></img></div>
      <div className="button-container">
        <button className="button">{phrase}</button>
        <div className="bottom-text" style={{ color: bottomTextColor }}>{bottomText}</div> {/* Texte en dessous du bouton */}
        {isLeftButtonVisible && <button className="bottom-button left-bottom-button">Connectez-vous ici</button>} {/* Afficher le bouton à gauche si isLeftButtonVisible est vrai */}
        {isRightButtonVisible && <button className="bottom-button right-bottom-button">Connectez-vous ici</button>} {/* Afficher le bouton à droite si isRightButtonVisible est vrai */}
      </div>
    </div>
  );
}

export default Rectangle;






























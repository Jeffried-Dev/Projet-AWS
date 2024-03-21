import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import compLogo from '../../../../assets/comp.jpg';
import userLogo from '../../../../assets/Utilisateur.jpg';
import './rectangle.css';

interface RectangleProps {
  color: string;
  bottomTextColor: string;
  isLeftButtonVisible?: boolean;
  isRightButtonVisible?: boolean;
}

const Rectangle: React.FC<RectangleProps> = ({ color, bottomTextColor, isLeftButtonVisible, isRightButtonVisible }) => {
  let logo;

  if (color === '#F1F2F6') {
    logo = compLogo;
  } else if (color === '#74BBE4') {
    logo = userLogo;
  } else {
    return null;
  }

  const [leftPhrase, setLeftPhrase] = useState("");
  const [rightPhrase, setRightPhrase] = useState("");

  useEffect(() => {
    const leftTargetPhrase = "Joignez-vous à nous !";
    const rightTargetPhrase = "Ouvert à de nouveaux défis professionnels";
    const typeSpeed = 100;

    let leftIndex = 0;
    let rightIndex = 0;
    const typeNextLeftChar = () => {
        if (isLeftButtonVisible) {
            setLeftPhrase(prevPhrase => prevPhrase + leftTargetPhrase.charAt(leftIndex));
            leftIndex++;
            setTimeout(typeNextLeftChar, typeSpeed);
        }
    };

    const typeNextRightChar = () => {
        if (isRightButtonVisible) {
            setRightPhrase(prevPhrase => prevPhrase + rightTargetPhrase.charAt(rightIndex));
            rightIndex++;
            setTimeout(typeNextRightChar, typeSpeed);
        }
    };

    typeNextLeftChar();
    setTimeout(typeNextRightChar, leftTargetPhrase.length * typeSpeed); // Commencer la deuxième phrase après la première
  }, []);

  return (
    <div className="rectangle container" style={{ backgroundColor: color }}>
      <div className="circle"><img src={logo} className="circle" alt="Logo" /></div>
      <div className="button-container">
        <button className="button">{color === '#F1F2F6' ? <Link to="/entreprise/inscription">Inscrivez-vous en tant que recruteur</Link> : <Link to="/utilisateur/inscription">Inscrivez-vous en tant que chercheur d'emploi</Link>}</button>
        <div className="bottom-text" style={{ color: bottomTextColor }}>{color === '#F1F2F6' ? <span className="already-registered-text-left">Déjà inscrit(e)?</span> : <span className="already-registered-text-right">Déjà inscrit(e)?</span>}</div>
        {isLeftButtonVisible && <button className="bottom-button left-bottom-button"><Link to="/entreprise/connexion">Connectez-vous ici</Link></button>}
        {isRightButtonVisible && <button className="bottom-button right-bottom-button"><Link to="/utilisateur/connexion">Connectez-vous ici</Link></button>}
      </div>
      <div className="animated-phrases-container">
        <div className="animated-phrase left-phrase">{leftPhrase}</div>
        <div className="animated-phrase right-phrase">{rightPhrase}</div>
      </div>
    </div>
  );
}

export default Rectangle;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import compLogo from '../../../../assets/comp.jpg';
import userLogo from '../../../../assets/Utilisateur.jpg';
//import './rectangle.css';

interface RectangleProps {
  color: string;
  bottomTextColor: string;
  isLeftButtonVisible?: boolean;
  isRightButtonVisible?: boolean;
}

const Rectangle: React.FC<RectangleProps> = ({ color, bottomTextColor, isLeftButtonVisible, isRightButtonVisible }) => {
  let logo;
  const [leftPhrase, setLeftPhrase] = useState("");
  const [rightPhrase, setRightPhrase] = useState("");

  useEffect(() => {
    const leftTargetPhrase = "Joignez-vous à nous !";
    const rightTargetPhrase = "Ouvert à de nouveaux défis professionnels !";
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

  if (color === '#F1F2F6') {
    logo = compLogo;
  } else if (color === '#74BBE4') {
    logo = userLogo;
  } else {
    return null;
  }

  return (
    <div className="rectangle container bg-white w-full h-screen flex flex-col justify-center items-center flex-grow" style={{ backgroundColor: color }}>
      <div className="animated-phrases-container mt-8 flex flex-col items-center">
        {isLeftButtonVisible ? <div className="animated-phrase left-phrase text-blue-500">{leftPhrase}</div> : <div className="animated-phrase right-phrase text-white">{rightPhrase}</div>}
      </div>
      <div className="circle bg-white w-40 h-40 rounded-full flex items-center justify-center mx-auto mt-8">
        <img src={logo} className="circle rounded-full" alt="Logo" />
      </div>
      <div className="button-container flex flex-col justify-center items-center mt-32">
        <button className="button bg-blue-500 text-white px-8 py-2 rounded-full mb-8 transition duration-300 hover:bg-blue-600">
          {color === '#F1F2F6' ? <Link to="/entreprise/inscription">Inscrivez-vous en tant que recruteur</Link> : <Link to="/utilisateur/inscription">Inscrivez-vous en tant que chercheur d'emploi</Link>}
        </button>
        <div className="bottom-text" style={{ color: bottomTextColor }}>
          {color === '#F1F2F6' ? <span className="already-registered-text-left text-blue-900">Déjà inscrit(e)?</span> : <span className="already-registered-text-right">Déjà inscrit(e)?</span>}
        </div>
        {isLeftButtonVisible && <button className="bottom-button left-bottom-button bg-blue-400 text-white px-4 py-2 rounded-full my-2 transition duration-300 hover:bg-blue-600"><Link to="/entreprise/connexion">Connectez-vous ici</Link></button>}
        {isRightButtonVisible && <button className="bottom-button right-bottom-button bg-white text-blue-500 px-4 py-2 rounded-full my-2 transition duration-300 hover:bg-blue-600"><Link to="/utilisateur/connexion">Connectez-vous ici</Link></button>}
      </div>
    </div>
  );
}

export default Rectangle;

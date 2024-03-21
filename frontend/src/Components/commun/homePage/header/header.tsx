import React from 'react';
import logo from '../../../../assets/Logof.jpg';
import logoLangue from '../../../../assets/icone.png';
import './header.css';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  
  return (
    <header className="header">
      <img src={logo} className='logo' alt="Logo"></img>
      {/* Utilisez Link pour envelopper le texte du bouton */}
      <button className="header-button"><Link to="/">Accueil</Link></button>
      <button className="header-button">À propos</button>
      <button className="header-button"><Link to="/contact">Contact</Link></button>
      <a className="Langue"><img src={logoLangue} className='logolangue' alt="Logo Langue"></img></a>
    </header>
  );
}

export default Header;

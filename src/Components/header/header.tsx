import React from 'react';
import logo from '../../assets/Logof.jpg';
import logoLangue from '../../assets/icone.png';
import './header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <img src = {logo} className='logo'></img>
      <button className="header-button">Accueil</button>
      <button className="header-button">À propos</button>
      <button className="header-button">Contact</button>
      <a className="Langue"><img src = {logoLangue} className='logolangue'></img></a>
    </header>
  );
}

export default Header;



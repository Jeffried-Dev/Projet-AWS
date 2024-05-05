import React from 'react';
import logo from '../../../../assets/Logof.jpg';
import logoLangue from '../../../../assets/icone.png';
//import './header.css';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  
  return (
    <header className="bg-white py-2 px-4 flex justify-between items-center w-full max-h-[75px]">
      <div>
        <img src={logo} className='h-16' alt="Logo" />
      </div>
      <div className="flex items-center">
        <Link to="/" className="text-blue-500 hover:underline">Accueil</Link>
        <Link to="/Apropos" className="ml-4 text-blue-500 hover:underline">À propos</Link>
        <Link to="/contact" className="ml-4 text-blue-500 hover:underline">Contact</Link>
        <a href="#" className="ml-4"><img src={logoLangue} className='h-6' alt="Logo Langue" /></a>
      </div>
    </header>
  );
}

export default Header;

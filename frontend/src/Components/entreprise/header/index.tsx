import React from 'react';
import logo from '../../../assets/Logof.jpg';
import logoLangue from '../../../assets/icone.png';
//import './header.css';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  
  return (
    <header className="bg-white py-2 px-4 flex justify-between items-center w-full">
      <div className="logo-container flex items-center">
        <img src={logo} className="h-16" alt="Logo" />
        <h1 className="logo ml-2 text-blue-500">CSRecrut</h1>
      </div>
      <div className="flex items-center">
        <Link to="/" className="text-blue-500 hover:underline">Accueil</Link>
        <Link to="/Apropos" className="ml-4 text-blue-500 hover:underline">À propos</Link>
        <Link to="/contact" className="ml-4 text-blue-500 hover:underline">Contact</Link>
        <button className="ml-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md">Publier une offre d'emploi</button>
        {/* <button className="ml-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md">Profile</button> */}
      </div>
    </header>
  );
}

export default Header;
import React, { ChangeEvent } from "react";
import "./importercv.css";
import { Link } from 'react-router-dom';
import logo from '../../../assets/Logof.jpg';

const ImportCV = () => {
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file && typeof file === "object") {
      console.log("Nom du fichier sélectionné :", file.name);
      // Effectuez ici votre traitement pour importer le CV
    } else {
      console.log("Aucun fichier sélectionné");
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
      <div className="containercv">
        <p className="instruction">Veuillez importer votre CV ! </p>
        <label htmlFor="file-upload" className="file-button">
          Importer un CV
        </label>
        <input
          id="file-upload"
          className="file-input"
          type="file"
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
};

export default ImportCV;

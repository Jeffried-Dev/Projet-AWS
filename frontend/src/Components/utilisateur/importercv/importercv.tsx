import React, { ChangeEvent } from "react";
//import "./importercv.css";
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
    <div className="min-h-screen bg-[#f1f2f6] flex items-center justify-center p-6 flex-grow">
      <div className="containercv border-2 border-blue-500 p-8 rounded-lg text-center w-400 h-200 mx-auto mt-16">
        <p className="instruction mb-8 font-semibold text-lg">Veuillez importer votre CV !</p>
        <label htmlFor="file-upload" className="file-button bg-blue-500 text-white py-2 px-4 rounded-md cursor-pointer hover:bg-blue-600">
          Importer un CV
        </label>
        <input
          id="file-upload"
          className="file-input hidden"
          type="file"
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
};

export default ImportCV;

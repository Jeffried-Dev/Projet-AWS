import React, { ChangeEvent } from "react";
import "./importercv.css";

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
  );
};

export default ImportCV;

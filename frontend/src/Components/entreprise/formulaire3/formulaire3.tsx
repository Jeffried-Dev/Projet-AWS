import React, { useState } from 'react';

import './formulaire3.css';

const Formulaire3 = () => {
   
    return (
        <div className="containers-page">
            <div className="containers-image">
                <img src="../../../assets/3.jpg" alt="" className="image" />
                <div className="texte-sur-image">
                    <h3>Décrire l'offre</h3>
                
                </div>
            </div>

            <div className="containers-formulaire">
                
                <form>
                <label htmlFor="message">Description du poste<span className="required">*</span></label>
          <textarea id="message" name="message" rows={20}></textarea>
                </form>

                <div className="buttons-formulaire">
                    <button className="back-button-formulaire">Retour</button>
                    <button className="next-button-formulaire">Suivant</button>
                </div>
            </div>
        </div>
    );
};

export default Formulaire3;

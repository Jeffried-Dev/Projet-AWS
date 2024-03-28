import React, { useState } from 'react';
import './formulaire.css';

const Formulaire = () => {
    const [selectedNumber, setSelectedNumber] = useState<string>('');

    const handleNumberChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedNumber(event.target.value);
    };

    const renderNumberOptions = () => {
        const numbers: (string | number)[] = ['Choisir une option', ...Array.from(Array(10).keys()).map((num: number) => num + 1), 'Plus de 10'];
        return numbers.map((num: string | number, index: number) => (
            <option key={index} value={typeof num === 'number' ? num.toString() : ''}>{num}</option>
        ));
    };

    return (
        <div className="container-page">
            <div className="container-image">
                <img src="../../../assets/comp.jpg" alt="" className="image" />
                <div className="texte-sur-image">
                    <h2>Créer une offre <br /> d'emploi</h2>
                </div>
            </div>

            <div className="container-formulaire">
                <form>
                    <label htmlFor="name">Nom de l'entreprise<span className="required">*</span></label>
                    <input type="text" id="name" name="name" required />

                    <label htmlFor="email">Intitulé du poste<span className="required">*</span></label>
                    <input type="email" id="email" name="email" />

                    <label htmlFor="numberOfPeople">Nombre de personnes à recruter<span className="required">*</span></label>
                    <div className="select-container">
                        <select id="numberOfPeople" name="numberOfPeople" value={selectedNumber} onChange={handleNumberChange}>
                            {renderNumberOptions()}
                        </select>
                        
                    </div>
                    <label htmlFor="lieuPoste">Type de lieu du poste<span className="required">*</span></label>
                    <div className="select-container">
                    <select id="lieuPoste" name="lieuPoste">
                    <option value="">Choisir une option</option>
                    <option value="option1">Télétravail complet</option>
                    <option value="option2">Déplacements fréquents</option>
                    <option value="option2">En personne,lieu précis</option>
                    <option value="option3">Hybride</option>
                    </select>
                    </div>


                    <label htmlFor="email">Lieu du poste<span className="required">*</span></label>
                    <input type="email" id="email" name="email" />

                    <label htmlFor="email">Code postal<span className="required">*</span></label>
                    <input type="email" id="email" name="email" />
                </form>

                <div className="buttons-formulaire">
                    <button className="back-button-formulaire">Retour</button>
                    <button className="next-button-formulaire">Suivant</button>
                </div>
            </div>
        </div>
    );
};

export default Formulaire;

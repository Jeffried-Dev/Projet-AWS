import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './formulaire2.css';

const Formulaire2 = () => {
    const [selectedTypePoste, setSelectedTypePoste] = useState<string>('');
    const [selectedFrequenceSalaire, setSelectedFrequenceSalaire] = useState<string>('');
    const [salaireMin, setSalaireMin] = useState<string>('');
    const [salaireMax, setSalaireMax] = useState<string>('');

    const [buttonClicked, setButtonClicked] = useState<boolean>(false);

    const handleTypePosteChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedTypePoste(event.target.value);
    };

    const handleFrequenceSalaireChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedFrequenceSalaire(event.target.value);
    };

    const handleSalaireMinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setSalaireMin(value);
    };

    const handleSalaireMaxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setSalaireMax(value);
    };

    const isFormValid = () => {
        return selectedTypePoste.trim() !== '' && selectedFrequenceSalaire.trim() !== '' && salaireMin.trim() !== '' && salaireMax.trim() !== '';
    };

    const handleNextButtonClick = () => {
        setButtonClicked(true);
    };

    
    return (
        <div className="containerss-page">
            <div className="containerss-image">
                <img src="../../../assets/2..jpg" alt="" className="image" />
                <div className="texte-sur-image">
                    <h1>Plus de détails</h1>
                </div>
            </div>

            <div className="containerss-page">
                <div className="containerss-formulaire">
                    <form>
                        <label htmlFor="typePoste">Type de poste<span className="required">*</span></label>
                        <div className="select-containerss">
                            <select id="typePoste" name="typePoste" value={selectedTypePoste} onChange={handleTypePosteChange}>
                                <option value="">Choisir une option</option>
                                <option value="CDI">CDI</option>
                                <option value="CDD">CDD</option>
                                <option value="ALTERNANCE">ALTERNANCE</option>
                                <option value="STAGE">STAGE</option>
                            </select>
                        </div>
                        {(buttonClicked && selectedTypePoste.trim() === '') && <span className="error-message">Veuillez choisir une option</span>}

                        <label htmlFor="frequenceSalaire">Fréquence du salaire<span className="required">*</span></label>
                        <div className="select-containerss">
                            <select id="frequenceSalaire" name="frequenceSalaire" value={selectedFrequenceSalaire} onChange={handleFrequenceSalaireChange}>
                                <option value="">Choisir une option</option>
                                <option value="De l'heure">De l'heure</option>
                                <option value="Par jour">Par jour</option>
                                <option value="Par mois">Par mois</option>
                                <option value="Par an">Par an</option>
                            </select>
                        </div>
                        {(buttonClicked && selectedFrequenceSalaire.trim() === '') && <span className="error-message">Veuillez choisir une option</span>}

                        <label htmlFor="salaireMin">Salaire minimum<span className="required">*</span></label>
                        <input type="text" id="salaireMin" name="salaireMin" value={salaireMin} onChange={handleSalaireMinChange} />
                        {(buttonClicked && salaireMin.trim() === '') && <span className="error-message">Veuillez remplir ce champ</span>}

                        <label htmlFor="salaireMax">Salaire maximum<span className="required">*</span></label>
                        <input type="text" id="salaireMax" name="salaireMax" value={salaireMax} onChange={handleSalaireMaxChange} />
                        {(buttonClicked && salaireMax.trim() === '') && <span className="error-message">Veuillez remplir ce champ</span>}

                        <div className="buttons-formulaire">
                            <button className="back-button-formulaire">Retour</button>
                            {/* Utilisez aria-disabled pour désactiver le lien */}
                            <Link to={isFormValid() ? "/entreprise/formulaire3" : ""} onClick={handleNextButtonClick} className={`next-button-formulaire ${!isFormValid() ? 'disabled' : ''}`} aria-disabled={!isFormValid()}>Suivant</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Formulaire2;

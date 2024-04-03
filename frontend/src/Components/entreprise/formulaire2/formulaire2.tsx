import React, { useState } from 'react';
import './formulaire2.css';

const Formulaire2 = () => {
    const [selectedTypePoste, setSelectedTypePoste] = useState<string>('');
    const [selectedFrequenceSalaire, setSelectedFrequenceSalaire] = useState<string>('');

    const handleTypePosteChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedTypePoste(event.target.value);
    };

    const handleFrequenceSalaireChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedFrequenceSalaire(event.target.value);
    };

    const renderTypePosteOptions = () => {
        const typesPoste: string[] = ['Choisir une option', 'CDI', 'CDD', 'ALTERNANCE', 'STAGE'];
        return typesPoste.map((typePoste: string, index: number) => (
            <option key={index} value={typePoste}>{typePoste}</option>
        ));
    };

    const renderFrequenceOptions = () => {
        const frequences: string[] = ['Choisir une option', 'De l\'heure', 'Par jour', 'Par mois', 'Par an'];
        return frequences.map((frequence: string, index: number) => (
            <option key={index} value={frequence}>{frequence}</option>
        ));
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
                                {renderTypePosteOptions()}
                            </select>
                        </div>

                        <label htmlFor="frequenceSalaire">Fréquence du salaire<span className="required">*</span></label>
                        <div className="select-containerss">
                            <select id="frequenceSalaire" name="frequenceSalaire" value={selectedFrequenceSalaire} onChange={handleFrequenceSalaireChange}>
                                {renderFrequenceOptions()}
                            </select>
                        </div>

                        <label htmlFor="salaireMin">Salaire minimum<span className="required">*</span></label>
                        <input type="text" id="salaireMin" name="salaireMin" required />

                        <label htmlFor="salaireMax">Salaire maximum<span className="required">*</span></label>
                        <input type="email" id="salaireMax" name="salaireMax" />

                     

                        <div className="buttons-formulaire">
                            <button className="back-button-formulaire">Retour</button>
                            <button className="next-button-formulaire">Suivant</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Formulaire2;

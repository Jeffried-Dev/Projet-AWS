import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
        <div className="flex flex-col items-center bg-gray-200 pt-30 min-h-screen">
            <div className="w-full md:w-1/2 rounded-lg overflow-hidden mb-10" style={{ backgroundImage: "url('../../../assets/2..jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
                <div className="relative">
                <h1 className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white text-2xl md:text-3xl font-bold px-4">Plus de détails</h1>
                </div>
            </div>

            <div className="w-full md:w-3/4 rounded-lg bg-white shadow-md p-8">
                <form>
                <label htmlFor="typePoste" className="block mb-2">
                    Type de poste<span className="text-red-500">*</span>
                </label>
                <div className="select-containerss">
                    <select id="typePoste" name="typePoste" value={selectedTypePoste} onChange={handleTypePosteChange} className="w-full border border-gray-300 rounded-lg p-2 appearance-none">
                    <option value="">Choisir une option</option>
                    <option value="CDI">CDI</option>
                    <option value="CDD">CDD</option>
                    <option value="ALTERNANCE">ALTERNANCE</option>
                    <option value="STAGE">STAGE</option>
                    </select>
                </div>
                {(buttonClicked && selectedTypePoste.trim() === '') && <span className="error-message">Veuillez choisir une option</span>}

                <label htmlFor="frequenceSalaire" className="block mb-2">
                    Fréquence du salaire<span className="text-red-500">*</span>
                </label>
                <div className="select-containerss">
                    <select id="frequenceSalaire" name="frequenceSalaire" value={selectedFrequenceSalaire} onChange={handleFrequenceSalaireChange} className="w-full border border-gray-300 rounded-lg p-2 appearance-none">
                    <option value="">Choisir une option</option>
                    <option value="De l'heure">De l'heure</option>
                    <option value="Par jour">Par jour</option>
                    <option value="Par mois">Par mois</option>
                    <option value="Par an">Par an</option>
                    </select>
                </div>
                {(buttonClicked && selectedFrequenceSalaire.trim() === '') && <span className="error-message">Veuillez choisir une option</span>}

                <label htmlFor="salaireMin" className="block mb-2">
                    Salaire minimum<span className="text-red-500">*</span>
                </label>
                <input type="text" id="salaireMin" name="salaireMin" value={salaireMin} onChange={handleSalaireMinChange} className="w-full border border-gray-300 rounded-lg p-2" />
                {(buttonClicked && salaireMin.trim() === '') && <span className="error-message">Veuillez remplir ce champ</span>}

                <label htmlFor="salaireMax" className="block mb-2">
                    Salaire maximum<span className="text-red-500">*</span>
                </label>
                <input type="text" id="salaireMax" name="salaireMax" value={salaireMax} onChange={handleSalaireMaxChange} className="w-full border border-gray-300 rounded-lg p-2" />
                {(buttonClicked && salaireMax.trim() === '') && <span className="error-message">Veuillez remplir ce champ</span>}

                <div className="flex justify-between mt-6">
                    <button className="back-button-formulaire bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg">Retour</button>
                    {/* Utilisez aria-disabled pour désactiver le lien */}
                    <Link to={isFormValid() ? "/entreprise/formulaire3" : ""} onClick={handleNextButtonClick} className={`next-button-formulaire bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg ${!isFormValid() ? 'opacity-50 cursor-not-allowed' : ''}`} aria-disabled={!isFormValid()}>Suivant</Link>
                </div>
                </form>
            </div>
        </div>
    );
};

export default Formulaire2;

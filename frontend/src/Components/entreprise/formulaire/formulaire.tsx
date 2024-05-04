import React, { useState, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';

const Formulaire = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [selectedNumber, setSelectedNumber] = useState('');
    const [location, setLocation] = useState<{ streetNumber: string; street: string; city: string }>({
        streetNumber: '',
        street: '',
        city: ''
    });
    const renderNumberOptions = () => {
        const numbers: (string | number)[] = ['Choisir une option', ...Array.from(Array(10).keys()).map((num: number) => num + 1), 'Plus de 10'];
        return numbers.map((num: string | number, index: number) => (
            <option key={index} value={typeof num === 'number' ? num.toString() : ''}>{num}</option>
        ));
    };

    // États de validation des champs
    const [nameValid, setNameValid] = useState(false);
    const [emailValid, setEmailValid] = useState(false);
    const [numberValid, setNumberValid] = useState(false);
    const [locationValid, setLocationValid] = useState(false);

    // État pour indiquer si le bouton Suivant a été cliqué
    const [nextClicked, setNextClicked] = useState(false);

    // Gestion des changements dans les champs
    const handleNumberChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedNumber(event.target.value);
        setNumberValid(event.target.value !== '');
    };

    const handleLocationChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setLocation(prevLocation => ({
            ...prevLocation,
            [name]: value
        }));
        setLocationValid(value.trim() !== '');
    };

    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setName(value);
        setNameValid(value.trim() !== '');
    };

    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setEmail(value);
        setEmailValid(value.trim() !== '');
    };

    // Vérification de la validité du formulaire
    const isFormValid = () => {
        // Vérification de la validité du formulaire
        return name.trim() !== '' && email.trim() !== '' && selectedNumber.trim() !== '' && location.streetNumber.trim() !== '' && location.street.trim() !== '' && location.city.trim() !== '';
    };

    // Gérer le clic sur le bouton Suivant
    const handleNextClick = () => {
        setNextClicked(true);
    };

    return (
        <div className="container-page flex flex-col items-center bg-gray-200 pt-20 min-h-screen">
            <div className="container-image w-1/2 rounded-lg overflow-hidden mb-8 relative" style={{ backgroundImage: "url('../../../assets/comp.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
                <div className="texte-sur-image absolute top-0 right-0 transform translate-y-1/2 translate-x-4 text-right">
                    <h2 className="text-blue-900 text-4xl font-bold mb-4">Créer une offre <br /> d'emploi</h2>
                </div>
            </div>

            <div className="container-formulaire w-3/5 bg-white p-8 rounded-lg shadow-md mb-8">
                <form>
                    <label htmlFor="name" className="block mb-2">Nom de l'entreprise<span className="required">*</span></label>
                    <input type="text" id="name" name="name" value={name} onChange={handleNameChange} className="w-full border border-gray-300 rounded-lg p-2" />
                    {nextClicked && !nameValid && <span className="error-message">Veuillez remplir ce champ</span>}

                    <label htmlFor="email" className="block mb-2">Intitulé du poste<span className="required">*</span></label>
                    <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} className="w-full border border-gray-300 rounded-lg p-2" />
                    {nextClicked && !emailValid && <span className="error-message">Veuillez remplir ce champ</span>}

                    <label htmlFor="numberOfPeople" className="block mb-2">Nombre de personnes à recruter<span className="required">*</span></label>
                    <div className="select-container">
                        <select id="numberOfPeople" name="numberOfPeople" value={selectedNumber} onChange={handleNumberChange} className="w-full border border-gray-300 rounded-lg p-2 appearance-none">
                            {renderNumberOptions()}
                        </select>
                        {nextClicked && !emailValid && <span className="error-message">Veuillez choisir une option</span>}
                    </div>

                    <label htmlFor="lieuPoste" className="block mb-2">Type de lieu du poste<span className="required">*</span></label>
                    <div className="select-container">
                        <select id="lieuPoste" name="lieuPoste" className="w-full border border-gray-300 rounded-lg p-2">
                            <option value="">Choisir une option</option>
                            <option value="option1">Télétravail complet</option>
                            <option value="option2">Déplacements fréquents</option>
                            <option value="option2">En personne, lieu précis</option>
                            <option value="option3">Hybride</option>
                        </select>
                        {nextClicked && !emailValid && <span className="error-message">Veuillez choisir une option</span>}
                    </div>

                    <label htmlFor="location" className="block mb-2">Lieu<span className="required">*</span></label>
                    <div className="location-inputs flex">
                        <input type="text" id="streetNumber" name="streetNumber" placeholder="Numéro de rue" value={location.streetNumber} onChange={handleLocationChange} className="w-full border border-gray-300 rounded-lg p-2 mr-2" />
                        <input type="text" id="street" name="street" placeholder="Rue" value={location.street} onChange={handleLocationChange} className="w-full border border-gray-300 rounded-lg p-2 mr-2" />
                        <input type="text" id="city" name="city" placeholder="Ville" value={location.city} onChange={handleLocationChange} className="w-full border border-gray-300 rounded-lg p-2" />
                    </div>
                    {nextClicked && !locationValid && <span className="error-message">Veuillez remplir ce champ</span>}

                    <label htmlFor="postalCode" className="block mb-2">Code postal<span className="required">*</span></label>
                    <input type="text" id="postalCode" name="postalCode" className="w-full border border-gray-300 rounded-lg p-2" />
                    {nextClicked && !emailValid && <span className="error-message">Veuillez remplir ce champ</span>}
                </form>
                <br></br>
                <div className="buttons-formulaire flex justify-between">
                    <button className="back-button-formulaire bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg">Retour</button>
                    <Link to={isFormValid() ? "/entreprise/formulaire2" : ""} onClick={handleNextClick} className={`next-button-formulaire bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg ${!isFormValid() ? 'opacity-50 cursor-not-allowed' : ''}`} aria-disabled={!isFormValid()}>Suivant</Link>
                </div>
            </div>
        </div>

    );
};

export default Formulaire;

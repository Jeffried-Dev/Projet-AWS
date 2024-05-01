import React, { useState, ChangeEvent } from 'react';
import './formulaire.css';
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
                    <input type="text" id="name" name="name" value={name} onChange={handleNameChange} />
                    {nextClicked && !nameValid && <span className="error-message">Veuillez remplir ce champ</span>}

                    <label htmlFor="email">Intitulé du poste<span className="required">*</span></label>
                    <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} />
                    {nextClicked && !emailValid && <span className="error-message">Veuillez remplir ce champ</span>}

                    <label htmlFor="numberOfPeople">Nombre de personnes à recruter<span className="required">*</span></label>
                    <div className="select-container">
                        <select id="numberOfPeople" name="numberOfPeople" value={selectedNumber} onChange={handleNumberChange}>
                            {renderNumberOptions()}
                        </select>
                        {nextClicked && !emailValid && <span className="error-message">Veuillez choisir une option</span>}
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
                        {nextClicked && !emailValid && <span className="error-message">Veuillez choisir une option</span>}
                    </div>

                    <label htmlFor="location">Lieu<span className="required">*</span></label>
                    <div className="location-inputs">
                        <input type="text" id="streetNumber" name="streetNumber" placeholder="Numéro de rue" value={location.streetNumber} onChange={handleLocationChange} />
                        <input type="text" id="street" name="street" placeholder="Rue" value={location.street} onChange={handleLocationChange} />
                        <input type="text" id="city" name="city" placeholder="Ville" value={location.city} onChange={handleLocationChange} />
                    </div>
                    {nextClicked && !locationValid && <span className="error-message">Veuillez remplir ce champ</span>}

                    <label htmlFor="postalCode">Code postal<span className="required">*</span></label>
                    <input type="text" id="postalCode" name="postalCode" />
                    {nextClicked && !emailValid && <span className="error-message">Veuillez remplir ce champ</span>}
                </form>

                {/* Bouton de navigation vers la deuxième étape */}
                <div className="buttons-formulaire">
                    <button className="back-button-formulaire">Retour</button>
                    {/* Utilisez aria-disabled pour désactiver le lien */}
                    <Link to={isFormValid() ? "/entreprise/formulaire2" : ""} onClick={handleNextClick} className={`next-button-formulaire ${!isFormValid() ? 'disabled' : ''}`} aria-disabled={!isFormValid()}>Suivant</Link>
                </div>
            </div>
        </div>
    );
};

export default Formulaire;

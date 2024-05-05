import React, { ChangeEvent, ChangeEventHandler, useState } from 'react';
import Ioffres from '../../../objets/offres';
import Iadresse from '../../../objets/adresse';
import compImage from '../../../assets/comp.jpg';
import compImage2 from '../../../assets/2..jpg';
import compImage3 from '../../../assets/3.jpg';
import { useNavigate } from 'react-router-dom';

interface Props {
    data: Ioffres;
    setData: React.Dispatch<React.SetStateAction<Ioffres>>;
    onNext?: (data: Ioffres) => void ;
    onPrevious?:  () => void;
    onCancel?:  () => void;
    onSubmit?:  (data: Ioffres) => void;
}

const Formulaire: React.FC<Props> = ({ data, setData, onNext, onCancel }) => {
    const [name, setName] = useState(data.name ||'');
    const [ville, setVille] = useState(data.adresse?.ville?.name ||'');
    const [code, setCode] = useState(data.adresse?.ville?.code || 0);
    const [lieuPoste, setLieuPoste] = useState(data.lieuPoste ||'');
    const [selectedNumber, setSelectedNumber] = useState('');
    const [adresse, setLocation] = useState<Iadresse>({
        numero: data.adresse?.numero || 0,
        rue: data.adresse?.rue || '',
        ville: {
            name: data.adresse?.ville?.name || '',
            code: data.adresse?.ville?.code || 0,
        }
    });
    const renderNumberOptions = () => {
        const numbers: (string | number)[] = ['Choisir une option', ...Array.from(Array(10).keys()).map((num: number) => num + 1), 'Plus de 10'];
        return numbers.map((num: string | number, index: number) => (
            <option key={index} value={typeof num === 'number' ? num.toString() : ''}>{num}</option>
        ));
    };

    // États de validation des champs
    const [nameValid, setNameValid] = useState(false);
    const [numberValid, setNumberValid] = useState(false);
    const [locationValid, setLocationValid] = useState(false);
    const [nextClicked, setNextClicked] = useState(false);

    // Gestion des changements dans les champs
    const handleNumberChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedNumber(event.target.value);
        setNumberValid(event.target.value !== '');
    };

    const handleLieuPosteChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedLieuPoste = event.target.value;
        setLieuPoste(selectedLieuPoste);
    };

    const handleVilleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        const { value } = event.target;
        setVille(value)
        setLocationValid(value.trim() !== '');
        setLocation(prevLocation => ({
            ...prevLocation,
            ville: {
                name: value,
                code: code
            }
        }));
    };

    const handleCodeChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        const { value } = event.target;
        setCode(parseInt(value))
        setLocationValid(value.trim() !== '');
        setLocation(prevLocation => ({
            ...prevLocation,
            ville: {
                name: ville,
                code: parseInt(value)
            }
        }));
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

    // Vérification de la validité du formulaire
    const isFormValid = () => {
        // Vérification de la validité du formulaire
        return name.trim() !== '' && adresse.numero?.toString().trim() !== '' && adresse.rue?.trim() !== '' && ville.trim() !== '';
    };

    // Gérer le clic sur le bouton Suivant
    const handleNext = () => {
        
        console.log(adresse)
        if (onNext) {
            onNext({ name, lieuPoste, adresse });
        }
      };
    
    return (
        <div className="container-page flex flex-col items-center bg-gray-200 pt-20 min-h-screen">
            <div className="container-image w-2/3 rounded-lg overflow-hidden mb-8 relative" style={{ backgroundImage: `url(${compImage})`, backgroundSize: "contain", backgroundPosition: "center", height: "200px", width: ""}}>
                <div className="texte-sur-image  top-0 right-0 transform translate-y-1/2 translate-x-11/5 text-right">
                    <h2 className="text-blue-900 text-4xl font-bold mb-4">Créer une offre <br /> d'emploi</h2>
                </div>
            </div>

            <div className="container-formulaire w-4/5 bg-white p-8 rounded-lg shadow-md mb-8">
                <form>
                    {/* <label htmlFor="name" className="block mb-2">Nom de l'entreprise<span className="required">*</span></label>
                    <input type="text" id="name" name="name" value={name} onChange={handleNameChange} className="w-full border border-gray-300 rounded-lg p-2" />
                    {!nameValid && <span className="error-message">Veuillez remplir ce champ</span>} */}

                    <label htmlFor="email" className="block mb-2">Intitulé du poste<span className="required">*</span></label>
                    <input type="email" id="email" name="email" value={name} onChange={handleNameChange} className="w-full border border-gray-300 rounded-lg p-2" />
                    {nextClicked && <span className="error-message">Veuillez remplir ce champ</span>}

                    <label htmlFor="numberOfPeople" className="block mb-2">Nombre de personnes à recruter<span className="required">*</span></label>
                    {/* <div className="select-container">
                        <select id="numberOfPeople" name="numberOfPeople" value={selectedNumber} onChange={handleNumberChange} className="w-full border border-gray-300 rounded-lg p-2 appearance-none">
                            {renderNumberOptions()}
                        </select>
                        {nextClicked && <span className="error-message">Veuillez choisir une option</span>}
                    </div> */}

                    <label htmlFor="lieuPoste" className="block mb-2">Type de lieu du poste<span className="required">*</span></label>
                    <div className="select-container">
                        <select id="lieuPoste" name="lieuPoste" value={lieuPoste} onChange={handleLieuPosteChange} className="w-full border border-gray-300 rounded-lg p-2">
                            <option value="">Choisir une option</option>
                            <option value="option1">Télétravail complet</option>
                            <option value="option2">Déplacements fréquents</option>
                            <option value="option2">En personne, lieu précis</option>
                            <option value="option3">Hybride</option>
                        </select>
                        {nextClicked && <span className="error-message">Veuillez choisir une option</span>}
                    </div>

                    <label htmlFor="adresse" className="block mb-2">Lieu<span className="required">*</span></label>
                    <div className="adresse-inputs flex">
                        <input type="text" id="streetNumber" name="numero" placeholder="Numéro de rue" value={adresse.numero || ''} onChange={handleLocationChange} className="w-full border border-gray-300 rounded-lg p-2 mr-2" />
                        <input type="text" id="street" name="rue" placeholder="Rue" value={adresse.rue || ''} onChange={handleLocationChange} className="w-full border border-gray-300 rounded-lg p-2 mr-2" />
                        <input type="text" id="city" name="ville" placeholder="Ville" value={ville || ''} onChange={handleVilleChange} className="w-full border border-gray-300 rounded-lg p-2" />
                    </div>
                    {nextClicked && !locationValid && <span className="error-message">Veuillez remplir ce champ</span>}

                    <label htmlFor="postalCode" className="block mb-2">Code postal<span className="required">*</span></label>
                    <input type="text" id="postalCode" name="code" value={code || ''} onChange={handleCodeChange} className="w-full border border-gray-300 rounded-lg p-2" />
                    {nextClicked && <span className="error-message">Veuillez remplir ce champ</span>}
                </form>
                <br></br>
                <div className="buttons-formulaire flex justify-between">
                <button className="back-button-formulaire bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg"  onClick={onCancel}>Annuler</button>
                    <button
                        onClick={handleNext}
                        disabled={!isFormValid()}
                        className={`next-button-formulaire bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg ${!isFormValid() ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                        Suivant
                    </button>
                </div>
            </div>
        </div>

    );
};

const Formulaire2: React.FC<Props> = ({ data, setData, onNext, onPrevious }) => {
    const [typeOffre, setTypeOffre] = useState(data.typeOffre ||'');
    const [frequenceSalaire, setFrequenceSalaire] = useState(data.frequenceSalaire ||'');
    const [salaireMin, setSalaireMin] = useState(data.salaireMin ||'');
    const [salaireMax, setSalaireMax] = useState(data.salaireMax ||'');

    const handleNext = () => {
        if (onNext) {
            onNext({ typeOffre,frequenceSalaire,salaireMin,salaireMax });
        }
      };

    const [buttonClicked, setButtonClicked] = useState<boolean>(false);

    const handleTypePosteChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setTypeOffre(event.target.value);
    };

    const handleFrequenceSalaireChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setFrequenceSalaire(event.target.value);
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
        return typeOffre.trim() !== '' && frequenceSalaire.trim() !== '' && salaireMin.trim() !== '' && salaireMax.trim() !== '';
    };

    const handleNextButtonClick = () => {
        setButtonClicked(true);
    };

    
    return (
        <div className="container-page flex flex-col items-center bg-gray-200 pt-20 min-h-screen">
            <div className="container-image w-2/3 rounded-lg overflow-hidden mb-8 relative" style={{ backgroundImage: `url(${compImage2})`,  backgroundPosition: "center", height: "200px", width: ""}}>
                <div className="relative">
                <h1 className="absolute top-0 right-0 transform translate-y-1/2 text-white text-2xl md:text-3xl font-bold px-4">Plus de détails</h1>
                </div>
            </div>

            <div className="container-formulaire w-4/5 rounded-lg bg-white shadow-md p-8">
                <form>
                <label htmlFor="typePoste" className="block mb-2">
                    Type de poste<span className="text-red-500">*</span>
                </label>
                <div className="select-containerss">
                    <select id="typePoste" name="typePoste" value={typeOffre} onChange={handleTypePosteChange} className="w-full border border-gray-300 rounded-lg p-2 appearance-none">
                    <option value="">Choisir une option</option>
                    <option value="CDI">CDI</option>
                    <option value="CDD">CDD</option>
                    <option value="ALTERNANCE">ALTERNANCE</option>
                    <option value="STAGE">STAGE</option>
                    </select>
                </div>
                {(buttonClicked && typeOffre.trim() === '') && <span className="error-message">Veuillez choisir une option</span>}

                <label htmlFor="frequenceSalaire" className="block mb-2">
                    Fréquence du salaire<span className="text-red-500">*</span>
                </label>
                <div className="select-containerss">
                    <select id="frequenceSalaire" name="frequenceSalaire" value={frequenceSalaire} onChange={handleFrequenceSalaireChange} className="w-full border border-gray-300 rounded-lg p-2 appearance-none">
                    <option value="">Choisir une option</option>
                    <option value="De l'heure">De l'heure</option>
                    <option value="Par jour">Par jour</option>
                    <option value="Par mois">Par mois</option>
                    <option value="Par an">Par an</option>
                    </select>
                </div>
                {(buttonClicked && frequenceSalaire.trim() === '') && <span className="error-message">Veuillez choisir une option</span>}

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
                    <button className="back-button-formulaire bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg"  onClick={onPrevious}>Retour</button>
                    {/* Utilisez aria-disabled pour désactiver le lien */}
                    <button
                        onClick={handleNext}
                        disabled={!isFormValid()}
                        className={`next-button-formulaire bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg ${!isFormValid() ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                        Suivant
                    </button>
                </div>
                </form>
            </div>
        </div>
    );
};

const Formulaire3: React.FC<Props> = ({ data, setData, onPrevious, onSubmit }) => {
    const [description, setDescription] = useState(data.description ||'');

    const handleSubmit = () => {
        if (onSubmit) {
            onSubmit({ description });
        }
    };
   
    return (
        <div className="container-page flex flex-col items-center bg-gray-200 pt-20 min-h-screen">
            <div className="container-image w-2/3 rounded-lg overflow-hidden mb-8 relative" style={{ backgroundImage: `url(${compImage3})`,  backgroundPosition: "center", height: "200px", width: ""}}>
                <div className="relative">
                <h1 className="absolute top-0 right-0 transform translate-y-1/2 text-white text-2xl md:text-3xl font-bold px-4">Décrire l'offre</h1>
                </div>
            </div>

            <div className="container-formulaire w-4/5 rounded-lg bg-white shadow-md p-8">
                <form>
                <label htmlFor="message" className="block mb-2">
                    Description du poste<span className="text-red-500">*</span>
                </label>
                <textarea id="message" name="message" value={description} onChange={(e) => setDescription(e.target.value)} rows={15} className="w-full border border-gray-300 rounded-lg p-2"></textarea>
                </form>

                <div className="flex justify-between mt-6">
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg" onClick={onPrevious}>Retour</button>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg" onClick={handleSubmit}>Poster</button>
                </div>
            </div>
        </div>
    );
};


const ThreePartForm = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({});
    const navigate = useNavigate();
  
    const handleNext = (data: React.SetStateAction<{}>) => {
      setFormData({ ...formData, ...data });
      setStep(step + 1);
    };
  
    const handlePrevious = () => {
      setStep(step - 1);
    };

    const handleCancel = () => {
      setFormData({})
      setStep(1);
      navigate('/entreprise/offre');
    };
    const handleSubmit = (data: any) => {
      // Soumettre le formulaire avec toutes les données
      //setFormData({ ...formData, ...data });
      console.log('Formulaire soumis :', { ...formData, ...data });
    };
  
    return (
      <div>
        {step === 1 && <Formulaire data={formData} setData={setFormData} onNext={handleNext} onCancel={handleCancel} />}
        {step === 2 && <Formulaire2 data={formData} setData={setFormData} onNext={handleNext} onPrevious={handlePrevious} />}
        {step === 3 && <Formulaire3 data={formData} setData={setFormData} onPrevious={handlePrevious} onSubmit={handleSubmit} />}
      </div>
    );
  };
  
  export default ThreePartForm;
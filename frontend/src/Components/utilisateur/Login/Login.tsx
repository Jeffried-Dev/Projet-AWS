import { useState } from 'react'; // Importez useState si nécessaire
import login from '../../../assets/login.jpg'; // Importez l'image de connexion depuis les assets
import { useNavigate } from 'react-router-dom';

interface ConnexionFormData {
  mail: string;
  password: string;
}

export default function Loginentre() {
  // État pour le nom d'utilisateur et le mot de passe
 // const [username, setUsername] = useState('');
  //const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [formData, setFormData] = useState<ConnexionFormData>({
    mail: '',
    password: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    try {
      const response = await fetch('https://projet-aws-backend.onrender.com/utilisateur/connexion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const responseData = await response.json();
        const signUpUser = responseData.data;
        localStorage.setItem('mail', formData.mail);
        localStorage.setItem('token', signUpUser.token);
        navigate('/utilisateur/recherche');
      } else {
        // Handle login failure
        console.error('error failed');
        setError('Nom d\'utilisateur ou mot de passe incorrect');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    // Conteneur principal avec une mise en page centrée verticalement et horizontalement
    <div className="min-h-screen bg-[#f1f2f6] flex items-center justify-center p-6">
      {/* Div pour contenir le formulaire de connexion */}
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-4xl flex space-x-8">
        {/* Première moitié de la mise en page avec l'image de connexion */}
        <div className="w-1/2">
          <img
            alt="Illustration"
            className="w-full h-auto"
            src={login}
            style={{
              height: '100%', // Redimensionner l'image 
              maxWidth: '100%', // Ajuster l'objet de l'image pour qu'elle s'adapte à la nouvelle taille
             }}
          />
        </div>
        {/* Deuxième moitié de la mise en page avec le formulaire de connexion */}
        <div className="w-1/2 space-y-6">
          {/* Titre du formulaire */}
          <h2 className="text-4xl font-bold">Connexion</h2>
          {/* Formulaire de connexion */}
          <form onSubmit={handleSubmit}>
            {/* Champ pour le nom d'utilisateur */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700" htmlFor="username">
                Nom d'utilisateur
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  className="block w-full pl-10 pr-3 sm:text-sm border-gray-300 rounded-md"
                  name="mail"
                  placeholder="@username OR example@mail.com"
                  type="text"
                  value={formData.mail}
                  onChange={handleChange}
                  required
                />
                {/* Icône utilisateur va ici */}
              </div>
            </div>
            {/* Champ pour le mot de passe */}
            <div className="mb-12">
              <label className="block text-sm font-medium text-gray-700" htmlFor="password">
                Mot de passe
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  className="block w-full pl-10 pr-3 sm:text-sm border-gray-300 rounded-md"
                  name="password"
                  placeholder="Enter your password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                {/* Icône de verrouillage va ici */}
              </div>
            </div>
            {/* Bouton de connexion */}
            <button className="w-full bg-[#004c8c] text-white py-2 rounded-md" type="submit">Se connecter</button>
            {error && <div style={{ color: 'red' }}>{error}</div>}
          </form>
          {/* Liens pour la récupération de mot de passe et l'inscription */}
          {/* 
          <div className="text-sm">
            <Link to="#" className="font-medium text-[#2682C4] hover:text-[#059669]">
              Forgot password?
            </Link>
            <p className="text-gray-600 mt-2">
              Don't have an account?{' '}
              <Link to="#" className="font-medium text-[#2682C4] hover:text-[#059669]">
                Sign up
              </Link>
            </p>
          </div>
          */}
        </div>
      </div>
    </div>
  );
}

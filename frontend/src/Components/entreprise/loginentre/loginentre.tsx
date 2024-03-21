import { useState } from 'react'; // Importez useState si nécessaire
import { Link } from 'react-router-dom'; // Importez Link de React Router
import imgEntrep from '../../../assets/entreprise.jpg';

export default function Loginentre() {
  // État pour le nom d'utilisateur et le mot de passe
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    // Ajoutez votre logique de connexion ici
  };

  return (
    <div className="min-h-screen bg-[#f1f2f6] flex items-center justify-center p-6">
      {/* Conteneur principal */}
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-4xl flex space-x-8">
        {/* Première moitié de la mise en page avec une image */}
        <div className="w-1/2">
          <img
            alt="Illustration"
            className="w-full h-auto"
            height="400"
            src={imgEntrep}
            style={{
              aspectRatio: '400/400',
              objectFit: 'cover',
            }}
            width="400"
          />
        </div>
        {/* Deuxième moitié de la mise en page avec le formulaire de connexion */}
        <div className="w-1/2 space-y-6">
          <h2 className="text-4xl font-bold">Connexion</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              {/* Champ pour le nom d'utilisateur */}
              <label className="block text-sm font-medium text-gray-700" htmlFor="username">
                Nom d'utilisateur
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  className="block w-full pl-10 pr-3 sm:text-sm border-gray-300 rounded-md"
                  id="username"
                  placeholder="@username OR example@mail.com"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                {/* Icône utilisateur va ici */}
              </div>
            </div>
            <div className="mb-12">
              {/* Champ pour le mot de passe */}
              <label className="block text-sm font-medium text-gray-700" htmlFor="password">
                Mot de passe
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  className="block w-full pl-10 pr-3 sm:text-sm border-gray-300 rounded-md"
                  id="password"
                  placeholder="Enter your password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {/* Icône de verrouillage va ici */}
              </div>
            </div>
            {/* Bouton de connexion */}
            <button className="w-full bg-[#004c8c] text-white py-2 rounded-md" type="submit">Se connecter</button>
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

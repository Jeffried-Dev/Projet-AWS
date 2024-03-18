import { useState } from 'react'; // Import useState if needed
import { Link } from 'react-router-dom'; // Import Link from React Router
import login from '../../../assets/login.jpg';
export default function Loginentre() {
  // State for username and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    // Add your login logic here
  };

  return (
    <div className="min-h-screen bg-[#f1f2f6] flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-4xl flex space-x-8">
        <div className="w-1/2">
        <img
            alt="Illustration"
            className="w-full h-auto"
            src={login}
            style={{
              maxHeight: '300px', // Redimensionner l'image pour qu'elle ne dépasse pas une hauteur de 300 pixels
              objectFit: 'contain', // Ajuster l'objet de l'image pour qu'elle s'adapte à la nouvelle taille
            }}
          />
        </div>
        <div className="w-1/2 space-y-6">
          <h2 className="text-4xl font-bold">Connexion</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
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
                {/* UserIcon goes here */}
              </div>
            </div>
            <div className="mb-12">
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
                {/* LockIcon goes here */}
              </div>
            </div >
            <button className="w-full bg-[#004c8c] text-white py-2 rounded-md" type="submit">Log In</button>
          </form>
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
          */ }
        </div>
      </div>
    </div>
  );
}

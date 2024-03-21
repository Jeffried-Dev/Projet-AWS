import { useState } from 'react'; // Importez useState si nécessaire
import { Link } from 'react-router-dom'; // Importez Link de React Router
import login from '../../../assets/login.jpg'; // Importez l'image de Contact depuis les assets

export default function Contact() {
  // État pour le mail et le message
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
  };

  return (
    // Conteneur principal avec une mise en page centrée verticalement et horizontalement
    <div className="min-h-screen bg-[#f1f2f6] flex items-center justify-center p-6">
      {/* Div pour contenir le formulaire de Contact */}
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-4xl flex space-x-8">
        {/* Première moitié de la mise en page avec l'image de Contact */}
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
        {/* Deuxième moitié de la mise en page avec le formulaire de Contact */}
        <div className="w-1/2 space-y-6">
          {/* Titre du formulaire */}
          <h2 className="text-4xl font-bold">Postuler à une offre d'emploi</h2>
          {/* Formulaire de Contact */}
          <form onSubmit={handleSubmit}>
            {/* Champ pour le nom d'utilisateur */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                adresse mail
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  className="block w-full pl-10 pr-3 sm:text-sm border-gray-300 rounded-md"
                  id="email"
                  placeholder="example@mail.com"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                {/* Icône utilisateur va ici */}
              </div>
            </div>
            {/* Champ pour le mot de passe */}
            <div className="mb-12">
              <label className="block text-sm font-medium text-gray-700" htmlFor="message">
                Message
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <textarea
                  className="block w-full pl-10 pr-3 sm:text-sm border-gray-300 rounded-md"
                  id="message"
                  placeholder="laissez un message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
                {/* Icône de verrouillage va ici */}
              </div>
            </div>
            {/* Bouton de Contact */}
            <button className="w-full bg-[#004c8c] text-white py-2 rounded-md" type="submit" style={{margin : '1px 1px 1px 1px'}}>Envoyer</button>
          </form>
          
        </div>
      </div>
    </div>
  );
}

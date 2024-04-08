import React, { useState } from 'react';
import login from 'C:/Users/bouba/OneDrive/Documents/GitHub/Projet-AWS/frontend/src/assets/login.jpg'

export default function Contact() {
  // État pour le mail et le message
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = async (event:any) => {
    event.preventDefault();
    try {
      const requestBody = {
        email: email,
        message: message
      };
      const response = await fetch('http://localhost:8000/postuler/offre', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody)
      });

      if (response.ok) {
        setMessage('Postulation réussie!');
        // Vous pouvez naviguer vers une autre page ou effectuer d'autres actions ici
      } else {
        setMessage('Échec de la postulation. Veuillez réessayer.');
      }
    } catch (error) {
      console.error('Erreur lors de la postulation:', error);
      setMessage('Une erreur est survenue. Veuillez réessayer.');
    }
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
                Adresse mail
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
                  placeholder="Laissez un message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
                {/* Icône de verrouillage va ici */}
              </div>
            </div>
            {/* Bouton de Contact */}
            <button className="w-full bg-[#004c8c] text-white py-2 rounded-md" type="submit" style={{ margin: '1px' }}>Envoyer</button>
          </form>
        </div>
      </div>
    </div>
  );
}
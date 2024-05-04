import { useState } from 'react';
import login from '../../../assets/login.jpg';
import React from 'react';

export default function Contact() {
  // État pour le mail et le message
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
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
              height: '100%', // Redimensionner l'image 
              maxWidth: '100%', // Ajuster l'objet de l'image pour qu'elle s'adapte à la nouvelle taille
            }}
          />
        </div>
        <div className="w-1/2 space-y-6">
          <h2 className="text-4xl font-bold">Contact</h2>
          <h5>Vous pouvez nous laisser un message ici! <br /> Notre équipe vous recontactera dans les meilleurs délais.</h5>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                Adresse mail
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  className="block w-full pl-3 pr-10 py-2 sm:text-sm border-gray-300 rounded-md"
                  id="email"
                  placeholder="example@mail.com"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="mb-12">
              <label className="block text-sm font-medium text-gray-700" htmlFor="message">
                Message
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <textarea
                  className="block w-full pl-3 pr-10 py-2 sm:text-sm border-gray-300 rounded-md"
                  id="message"
                  placeholder="Laissez un message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
            </div>
            <button className="w-full bg-[#004c8c] text-white py-2 rounded-md" type="submit">Envoyer</button>
          </form>
        </div>
      </div>
    </div>

  );
}

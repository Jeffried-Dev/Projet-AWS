import { useState } from 'react';
import login from '../../../assets/3.jpg';
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
    <div className="pt-20 rounded-2xl shadow-xl space-x-8 min-h-screen bg-[#f1f2f6] flex items-center justify-center p-6">
      <div className="bg-white container w-full px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center shadow-lg rounded-lg py-4">
        <div className="w-full h-[150px] md:w-1/2 md:h-full">
          <img
            alt="Illustration"
            className="w-full h-auto "
            src={login}
            style={{
              height: '100%', // Redimensionner l'image 
              maxWidth: '100%', // Ajuster l'objet de l'image pour qu'elle s'adapte à la nouvelle taille
            }}
          />
        </div>
        <div className="w-full md:w-1/2 space-y-6 md:text-left p-4">
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

    // <div className="container pt-24 md:pt-36 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        
    //     <div className="flex flex-col w-full xl:w-full justify-center lg:items-start overflow-y-hidden">
    //       <h1 className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
    //         Main
    //         <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
    //           Hero Message
    //         </span>
    //         to sell yourself!
    //       </h1>
    //       <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left">
    //         Sub-hero message, not too long and not too short. Make it just right!
    //       </p>

    //       <form className="bg-gray-900 opacity-75 w-full shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
    //         <div className="mb-4">
    //           <label className="block text-blue-300 py-2 font-bold mb-2" htmlFor="emailaddress">
    //             Signup for our newsletter
    //           </label>
    //           <input
    //             className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
    //             id="emailaddress"
    //             type="text"
    //             placeholder="you@somewhere.com"
    //           />
    //         </div>

    //         <div className="flex items-center justify-between pt-4">
    //           <button
    //             className="bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
    //             type="button"
    //           >
    //             Sign Up
    //           </button>
    //         </div>
    //       </form>
    //     </div>
        

        
    // </div>

  );
}

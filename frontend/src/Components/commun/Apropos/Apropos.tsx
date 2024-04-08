import React from 'react';

import entreprise from '../../../assets/entreprise.jpg';
import imgEntrep from '../../../assets/entreprise.jpg';

const Apropos = () => {
  return (
    <div className="min-h-screen bg-[#f1f2f6] flex items-center justify-center p-6" id="AproposPage">
      {/* Conteneur principal */}
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-4xl flex space-x-8">
        {/* Première moitié de la mise en page avec une image */}
        <div className="w-1/2">
          <img
            alt="Illustration"
            className="w-full h-auto"
            height="600"
            src={ entreprise} // Utilisez votre logo ici
            style={{
              aspectRatio: '600/600',
              objectFit: 'cover',
            }}
            width="800"
          />
        </div>
        {/* Deuxième moitié de la mise en page avec le texte */}
        <div className="w-1/2 flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-4">À propos de CSRecrut</h1>
          <p className="text-gray-600 mb-4">
            CSRecrut est une plateforme dédiée au recrutement dans le domaine de l'informatique. Nous nous efforçons de mettre en relation les entreprises à la recherche de talents avec des développeurs compétents et motivés. Notre objectif est de simplifier le processus de recrutement en utilisant les dernières technologies et en mettant l'accent sur l'expérience utilisateur. Nous croyons fermement en l'importance d'une collaboration transparente et efficace entre les entreprises et les candidats. CSRecrut est là pour vous aider à trouver les meilleurs talents et les opportunités professionnelles qui vous correspondent.
          </p>
        </div>
      </div>
    </div>  
  );
};


export default Apropos;


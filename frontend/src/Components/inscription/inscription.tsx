import React from "react";
import compLogo from '../../assets/comp.jpg';

export default function Component() {
  return (
    <div className="min-h-screen bg-[#f1f2f6] flex justify-center items-center p-4">
      {/* Conteneur principal */}
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
        {/* Conteneur pour la mise en page en grille */}
        <div className="flex gap-8">
          {/* Première moitié de la mise en page avec une image */}
          <div className="w-1/2">
            <img
              alt="Team working together"
              className="rounded-lg"
             // height="548"
              src={compLogo}
              style={{
                height: '100%', // Redimensionner l'image 
                maxWidth: '100%', // Ajuster l'objet de l'image pour qu'elle s'adapte à la nouvelle taille
               }}
             // width="675"
            />
          </div>
          {/* Deuxième moitié de la mise en page avec les détails de l'entreprise */}
          <div className="w-1/2">
            <h2 className="text-3xl font-bold mb-6">Détails de l'entreprise</h2>
            {/* Formulaire d'inscription */}
            <div className="grid gap-4">
              <div>
                {/* Champ pour le nom de l'entreprise */}
                <label className="block text-sm font-semibold mb-1" htmlFor="company-name">
                  Nom de l'entreprise
                </label>
                <input className="border-2 border-[#004c8c] rounded-md" type="text" placeholder="Enter your company's name" />
              </div>
              <div>
                {/* Champ pour l'adresse e-mail */}
                <label className="block text-sm font-semibold mb-1" htmlFor="email-address">
                  Adresse e-mail
                </label>
                <input className="border-2 border-[#004c8c] rounded-md" type="email" placeholder="example@mail.com" />
              </div>
              <div>
                {/* Champ pour l'adresse */}
                <label className="block text-sm font-semibold mb-1" htmlFor="location">
                  Adresse
                </label>
                <input className="border-2 border-[#004c8c] rounded-md" type="text" placeholder="Company's address" />
              </div>
              <div>
                {/* Champ pour la description de l'entreprise */}
                <label className="block text-sm font-semibold mb-1" htmlFor="description">
                  Description
                </label>
                <textarea className="border-2 border-[#004c8c] rounded-md" placeholder="A brief description of your company" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {/* Champ pour le mot de passe */}
                <div>
                  <label className="block text-sm font-semibold mb-1" htmlFor="password">
                    Mot de passe
                  </label>
                  <input className="border-2 border-[#004c8c] rounded-md" type="password" placeholder="Enter your password" />
                </div>
                {/* Champ pour retaper le mot de passe */}
                <div>
                  <label className="block text-sm font-semibold mb-1" htmlFor="retype-password">
                    Retapez le mot de passe
                  </label>
                  <input className="border-2 border-[#004c8c] rounded-md" type="password" placeholder="Re-enter your password" />
                </div>
              </div>
              {/* Bouton d'inscription */}
              <button className="w-full bg-[#004c8c] text-white">S'inscrire</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

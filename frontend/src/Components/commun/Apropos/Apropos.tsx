import React from 'react';
import logo from '../../../assets/en2.jpg';
import logo1 from '../../../assets/ut2.jpg';
const Apropos = () => {
  return (
    <section className="bg-[#f1f2f6] border-b py-8">
      <div className="container max-w-5xl mx-auto m-8">
        <h2 className="w-full my-2 text-4xl font-bold leading-tight text-center text-[#056BB3]">
          CSRecrut qui sommes-nous ?
        </h2>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-5/6 sm:w-1/2 p-6">
            <h3 className="text-3xl text-[#004C8C] font-bold leading-none mb-3">
              Notre mission
            </h3>
            <p className="text-gray-600 mb-8">
            CSRecrut s'engage à simplifier et à améliorer le processus de recrutement dans le domaine informatique. Nous offrons une plateforme conviviale et efficace, reliant les chercheurs d'emploi qualifiés aux entreprises en quête de talents spécialisés. Notre objectif est de créer un environnement en ligne dynamique où les candidats peuvent découvrir des opportunités professionnelles pertinentes.
              
            </p>
          </div>
          <div className="w-full sm:w-1/2 p-6">
          <img src={logo1} className='h-[70%] fill-current inline' alt="Logo" /> 
          </div>
        </div>
        <div className="flex flex-wrap flex-col-reverse sm:flex-row">
          <div className="w-full sm:w-1/2 p-6 mt-6">
          <img src={logo} className='h-[70%] fill-current inline' alt="Logo" /> 

          </div>
          <div className="w-full sm:w-1/2 p-6 mt-6">
            <div className="align-middle">
              <h3 className="text-3xl text-[#004C8C] font-bold leading-none mb-3">
              Facilité d'utilisation
              </h3>
              <p className="text-gray-600 mb-8">
              Chez CSRecrut, nous mettons l'accent sur la convivialité et la simplicité. Notre plateforme intuitive permet aux chercheurs d'emploi de naviguer facilement à travers les offres d'emploi, de postuler en quelques clics et de gérer leur profil professionnel en toute facilité. De même, les entreprises peuvent publier leurs offres rapidement et efficacement,  De même, les entreprises peuvent publier des offres et gérer le processus de recrutement de manière transparente.
            
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Apropos;


import React, { useState } from 'react';

const Formulaire3 = () => {
   
    return (
        <div className="flex flex-col items-center bg-gray-200 pt-20 min-h-screen">
            <div className="w-full md:w-1/2 rounded-lg overflow-hidden mb-10" style={{ backgroundImage: "url('../../../assets/3.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
                <div className="relative">
                <h3 className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white text-xl md:text-2xl font-bold px-4">Décrire l'offre</h3>
                </div>
            </div>

            <div className="w-full md:w-3/4 rounded-lg bg-white shadow-md p-8">
                <form>
                <label htmlFor="message" className="block mb-2">
                    Description du poste<span className="text-red-500">*</span>
                </label>
                <textarea id="message" name="message" rows={15} className="w-full border border-gray-300 rounded-lg p-2"></textarea>
                </form>

                <div className="flex justify-between mt-6">
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg">Retour</button>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg">Poster</button>
                </div>
            </div>
        </div>
    );
};

export default Formulaire3;

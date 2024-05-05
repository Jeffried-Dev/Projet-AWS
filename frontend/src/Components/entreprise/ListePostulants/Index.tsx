import React from 'react';
import { Link } from 'react-router-dom';

const ListePostulants = () => {
  return (
    <div className="min-h-screen bg-[#f1f2f6] flex items-center justify-center container mx-auto flex flex-wrap pb-20 pt-20">
        <table className="text-left w-full md:w-[75%] border-collapse bg-white"> 
            <thead>
                <tr>
                    <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Name</th>
                    <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Last Name</th>
                    <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Email</th>
                    <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Cv</th>
                    <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr className="hover:bg-grey-lighter">
                    <td className="py-4 px-6 border-b border-grey-light">Lian</td>
                    <td className="py-4 px-6 border-b border-grey-light">Smith</td>
                    <td className="py-4 px-6 border-b border-grey-light">jonsmith@mail.com</td>
                    <td className="py-4 px-6 border-b border-grey-light"><button className='mx-auto lg:mx-0 hover:underline gradient text-Black font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'>Visualiser</button></td>
                    <td className="py-4 px-6 border-b border-grey-light"><button className='mx-auto lg:mx-0 hover:underline gradient text-Black font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'>accepter</button> <button className='mx-auto lg:mx-0 hover:underline gradient text-Black font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'>rejeter</button></td>
                </tr>
                <tr className="hover:bg-grey-lighter">
                    <td className="py-4 px-6 border-b border-grey-light">Lian</td>
                    <td className="py-4 px-6 border-b border-grey-light">Smith</td>
                    <td className="py-4 px-6 border-b border-grey-light">622322662</td>
                    <td className="py-4 px-6 border-b border-grey-light">jonsmith@mail.com</td>
                </tr>
                <tr className="hover:bg-grey-lighter">
                    <td className="py-4 px-6 border-b border-grey-light">Lian</td>
                    <td className="py-4 px-6 border-b border-grey-light">Smith</td>
                    <td className="py-4 px-6 border-b border-grey-light">622322662</td>
                    <td className="py-4 px-6 border-b border-grey-light">jonsmith@mail.com</td>
                </tr>
                <tr className="hover:bg-grey-lighter">
                    <td className="py-4 px-6 border-b border-grey-light">Lian</td>
                    <td className="py-4 px-6 border-b border-grey-light">Smith</td>
                    <td className="py-4 px-6 border-b border-grey-light">622322662</td>
                    <td className="py-4 px-6 border-b border-grey-light">jonsmith@mail.com</td>
                </tr>
            </tbody>
        </table>
    </div>
  );
};

export default ListePostulants;


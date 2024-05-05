import React from 'react';
import { Link } from 'react-router-dom';

const ListePostulants = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
        <table className="text-left w-full border-collapse"> 
                            <thead>
                                <tr>
                                    <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Name</th>
                                    <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Last Name</th>
                                    <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Phone</th>
                                    <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Email</th>
                                </tr>
                            </thead>
                            <tbody>
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


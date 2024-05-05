import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../assets/Logof.jpg';

const Footer: React.FC = () => {
  return (
    
    <div className="footer-wrapper  w-full flex flex-col">
      <div className="footer-bottom py-4 px-4 bg-white text-blue-600 w-full">
        <p className="text-center">&copy; {new Date().getFullYear()} CSRecrut. Tous droits réservés.</p>
      </div>
    </div>

    // <footer className="bg-white w-full">
    //   <div className="container mx-auto px-8">
    //     <div className="w-full flex flex-col md:flex-row py-6">
    //       <div className="flex-1 mb-6 text-black">
    //       <Link to="/" className="toggleColour text-blue-600 no-underline hover:no-underline font-bold text-2xl lg:text-2xl">
    //         <img src={logo} className='h-16 fill-current inline' alt="Logo" /> 
    //         CSRecrut
    //       </Link>
    //       </div>
    //       <div className="flex-1">
    //         <p className="uppercase text-blue-500 md:mb-6">Links</p>
    //         <ul className="list-reset mb-6">
    //           <li className="mt-2 inline-block mr-2 md:block md:mr-0">
    //             <a href="#" className="no-underline hover:underline text-blue-800 hover:text-pink-500">FAQ</a>
    //           </li>
    //           <li className="mt-2 inline-block mr-2 md:block md:mr-0">
    //             <a href="#" className="no-underline hover:underline text-blue-800 hover:text-pink-500">Help</a>
    //           </li>
    //           <li className="mt-2 inline-block mr-2 md:block md:mr-0">
    //             <a href="#" className="no-underline hover:underline text-blue-800 hover:text-pink-500">Support</a>
    //           </li>
    //         </ul>
    //       </div>
    //       <div className="flex-1">
    //         <p className="uppercase text-blue-500 md:mb-6">Legal</p>
    //         <ul className="list-reset mb-6">
    //           <li className="mt-2 inline-block mr-2 md:block md:mr-0">
    //             <a href="#" className="no-underline hover:underline text-blue-800 hover:text-pink-500">Terms</a>
    //           </li>
    //           <li className="mt-2 inline-block mr-2 md:block md:mr-0">
    //             <a href="#" className="no-underline hover:underline text-blue-800 hover:text-pink-500">Privacy</a>
    //           </li>
    //         </ul>
    //       </div>
    //       <div className="flex-1">
    //         <p className="uppercase text-blue-500 md:mb-6">Social</p>
    //         <ul className="list-reset mb-6">
    //           <li className="mt-2 inline-block mr-2 md:block md:mr-0">
    //             <a href="#" className="no-underline hover:underline text-blue-800 hover:text-pink-500">Facebook</a>
    //           </li>
    //           <li className="mt-2 inline-block mr-2 md:block md:mr-0">
    //             <a href="#" className="no-underline hover:underline text-blue-800 hover:text-pink-500">Linkedin</a>
    //           </li>
    //           <li className="mt-2 inline-block mr-2 md:block md:mr-0">
    //             <a href="#" className="no-underline hover:underline text-blue-800 hover:text-pink-500">Twitter</a>
    //           </li>
    //         </ul>
    //       </div>
    //       <div className="flex-1">
    //         <p className="uppercase text-blue-500 md:mb-6">Company</p>
    //         <ul className="list-reset mb-6">
    //           <li className="mt-2 inline-block mr-2 md:block md:mr-0">
    //             <a href="#" className="no-underline hover:underline text-blue-800 hover:text-pink-500">Official Blog</a>
    //           </li>
    //           <li className="mt-2 inline-block mr-2 md:block md:mr-0">
    //             <a href="#" className="no-underline hover:underline text-blue-800 hover:text-pink-500">About Us</a>
    //           </li>
    //           <li className="mt-2 inline-block mr-2 md:block md:mr-0">
    //             <a href="#" className="no-underline hover:underline text-blue-800 hover:text-pink-500">Contact</a>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    // </footer>
  );
}

export default Footer;




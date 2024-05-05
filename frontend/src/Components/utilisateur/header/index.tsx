import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/Logof.jpg';
import logoLangue from '../../../assets/icone.png';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  // rechercher les notifications:
  const notifications = 5
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav id="header" className={`fixed w-full z-30 top-0 ${isScrolled ? 'bg-white' : 'bg-white'} text-white`}>
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <div className="pl-4 flex items-center">
          <Link to="/" className="toggleColour text-blue-600 no-underline hover:no-underline font-bold text-2xl lg:text-2xl">
            <img src={logo} className='h-8 fill-current inline' alt="Logo" /> 
            CSRecrut
          </Link>
        </div>
        <div className="block lg:hidden pr-4">
          <button id="nav-toggle" className="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out" onClick={toggleMenu}>
            <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className={`w-full flex-grow lg:flex lg:items-center lg:w-auto mt-2 lg:mt-0 ${isMenuOpen ? 'block' : 'hidden'} bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20`} id="nav-content">
          <ul className="list-reset lg:flex justify-end flex-1 items-center">
            <li className="mr-3">
              <Link to="/Apropos" className="inline-block py-2 px-4 text-blue-600 font-bold hover:text-gray-800 no-underline">Apropos</Link>
            </li>
            <li className="mr-3">
              <Link to="/contact" className="inline-block text-blue-600 no-underline font-bold hover:text-gray-800 hover:text-underline py-2 px-4">Contact</Link>
            </li>
            <li className="mr-3">
              <div className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
                {notifications > 0 && (
                  <span className="bg-red-500 rounded-full w-5 h-5 text-white text-xs flex justify-center items-center absolute -top-1 -right-1">
                    {notifications}
                  </span>
                )}
              </div>
            </li>
            <li className="mr-3">
              <div className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  onClick={handleToggle}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 17l-5-5m0 0l-5 5m5-5V3"
                  />
                </svg>
                {isOpen && (
                  <div className="absolute top-8 right-0 bg-white shadow-lg rounded-lg border border-gray-200">
                    <button className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100">
                      Modifier le profil
                    </button>
                    <button className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100">
                      Se déconnecter
                    </button>
                  </div>
                )}
              </div>
            </li>
          </ul>
        </div>
      </div>
      <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
    </nav>
  );
}

export default Header;
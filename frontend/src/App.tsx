import React from 'react';
import './App.css';
import Footer from './Components/homePage/footer/footer';
import Header from './Components/homePage/header/header';
import Rectangle from './Components/homePage/rectangle/rectangle';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page1 from './Components/page1/Login/Login';
import Inscription from './Components/inscription/inscription';
import Loginentre from './Components/loginentre/loginentre';
import Contact from './Components/commun/contact/contact';
import Logintest from './Components/loginentre/testlogin';
import Postuler from './Components/utilisateur/postuler/postuler';

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <div className="content">
        <Rectangle color="#ccc" bottomTextColor="#555" isLeftButtonVisible={true} isRightButtonVisible={false} />
        <Rectangle color="#999" bottomTextColor="red" isLeftButtonVisible={false} isRightButtonVisible={true} />
      </div>
      <Footer />
    </div>
  );
}

function AppWithRouter() {
  return (
      <Routes>
        {/* routes communes */}  
        <Route path="/" element={<App />} />
        <Route path="/contact" element={<Contact />} />
        {/* routes utilisateurs */}  
        <Route path="/utilisateur/connexion" element={<Page1 />} />
        <Route path="/utilisateur/postuler" element={<Postuler />} />
        {/* routes entreprises */}  
        <Route path="/entreprise/inscription" element={<Inscription />} /> {/* Ajoutez cette route pour la page d'inscription */}    
        <Route path="/entreprise/connexion" element={<Logintest onLoginSuccess={function (): void {
        throw new Error('Function not implemented.');
      } } />} />
        {/* routes administrateur */}
      </Routes>
  );
}

export default AppWithRouter;

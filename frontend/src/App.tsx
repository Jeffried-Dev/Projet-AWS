import React from 'react';
import './App.css';
import Footer from './Components/commun/homePage/footer/footer';
import Header from './Components/commun/homePage/header/header';
import Rectangle from './Components/commun/homePage/rectangle/rectangle';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page1 from './Components/utilisateur/Login/Login';
import Inscription from './Components/entreprise/inscription/inscription';
import InscriptionUser from './Components/utilisateur/inscription/UserInscription'
import Loginentre from './Components/entreprise/loginentre/loginentre';
import Contact from './Components/commun/contact/contact';
import Logintest from './Components/entreprise/loginentre/testlogin';
import Postuler from './Components/utilisateur/postuler/postuler';
import Chercheur from './Components/utilisateur/Recherche/chercheur'


const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <div className="content">
        <Rectangle color="#F1F2F6" bottomTextColor="#56BB3" isLeftButtonVisible={true} isRightButtonVisible={false} />
        <Rectangle color="#74BBE4" bottomTextColor="#FFFF" isLeftButtonVisible={false} isRightButtonVisible={true} />
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
        <Route path="/utilisateur/inscription" element={<InscriptionUser />} />
        <Route path="/utilisateur/postuler" element={<Postuler />} />
        <Route path="/utilisateur/recherche" element={<Chercheur />} />
        {/* routes entreprises */}  
        <Route path="/entreprise/inscription" element={<Inscription />} /> {/* Ajoutez cette route pour la page d'inscription */}    
        <Route path="/entreprise/connexion" 
        //element={<Logintest onLoginSuccess={function (): void {throw new Error('Function not implemented.');} } />} 
        element = {<Loginentre />}
        />
        {/* routes administrateur */}

      </Routes>
  );
}

export default AppWithRouter;

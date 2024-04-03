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
//import Logintest from './Components/entreprise/loginentre/testlogin';
import Postuler from './Components/utilisateur/postuler/postuler';
import Chercheur from './Components/utilisateur/Recherche/chercheur';
import UserProfile from'./Components/utilisateur/UserProfile/UserProfile';
import Publication from './Components/entreprise/offre/offre';
import Form from './Components/entreprise/formulaire/formulaire';
import Formulaire3 from  './Components/entreprise/formulaire3/formulaire3';
import Validation from './Components/utilisateur/Validation/Validation';
import ImportCV from './Components/utilisateur/importercv/importercv';
import Formulaire2 from './Components/entreprise/formulaire2/formulaire2';
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
        <Route path="/utilisateur/connexion" element={<Page1 />}> </Route>
        <Route path="/utilisateur/inscription" element={<InscriptionUser onSignUpSuccess={function (e: any): void {throw new Error('Function not implemented.');} } />} />
        <Route path="/utilisateur/postuler" element={<Postuler />} />
        <Route path="/utilisateur/importercv" element={< ImportCV />} />
        <Route path="/utilisateur/recherche" element={<Chercheur />} />
        <Route path="/utilisateur/Validation" element={<Validation />} />
        <Route path="/utilisateur/profile" element={<UserProfile username="JohnDoe" email="johndoe@example.com" bio="Lorem ipsum dolor sit amet" />} />
        
        {/* routes entreprises */}  
        <Route path="/entreprise/inscription" element={<Inscription />} /> {/* Ajoutez cette route pour la page d'inscription */}    
        <Route path="/entreprise/connexion" element = {<Loginentre />}/>
        <Route path="/entreprise/offre" element={< Publication />} />
        <Route path="/entreprise/formulaire" element={< Form />} />
        <Route path="/entreprise/formulaire3" element={< Formulaire3 />} />
        <Route path="/entreprise/offre" element={< Publication />} />
        <Route path="/entreprise/formulaire2" element={< Formulaire2 />} />
        {/* routes administrateur */}

      </Routes>
  );
}

export default AppWithRouter;

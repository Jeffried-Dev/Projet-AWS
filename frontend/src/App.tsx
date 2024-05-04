import React from 'react';
import './App.css';
import Footer from './Components/commun/homePage/footer/footer';
import Header from './Components/commun/homePage/header/header';
import EntrepriseHeader from './Components/entreprise/header/index';
import Rectangle from './Components/commun/homePage/rectangle/rectangle';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page1 from './Components/utilisateur/Login/Login';
import Inscription from './Components/entreprise/inscription/inscription';
import InscriptionUser from './Components/utilisateur/inscription/UserInscription'
import Loginentre from './Components/entreprise/loginentre/loginentre';
import Contact from './Components/commun/contact/contact';
import Apropos from './Components/commun/Apropos/Apropos';
import Postuler from './Components/utilisateur/postuler/postuler';
import Chercheur from './Components/utilisateur/Recherche/chercheur';
import UserProfile from'./Components/utilisateur/UserProfile/UserProfile';
import Publication from './Components/entreprise/offre/offre';
import Form from './Components/entreprise/formulaire/formulaire';
import Formulaire3 from  './Components/entreprise/formulaire3/formulaire3';
import Validation from './Components/utilisateur/Validation/Validation';
import ValidationEnt from './Components/entreprise/Validation/Validation';
import ImportCV from './Components/utilisateur/importercv/importercv';
import Formulaire2 from './Components/entreprise/formulaire2/formulaire2';



const App: React.FC = () => {
  return (
    <div className="app">
      <Header/>
      <div className="content">
        <Rectangle color="#F1F2F6" bottomTextColor="#56BB3" isLeftButtonVisible={true} isRightButtonVisible={false}/>
        <Rectangle color="#74BBE4" bottomTextColor="#FFFF" isLeftButtonVisible={false} isRightButtonVisible={true}/>
      </div>
      <Footer/>
    </div>
  );
}

function AppWithRouter() {
  return (
  
      <Routes>

        {/* routes communes */}  
        <Route path="/" element={<App/>}/>
        <Route path="/contact" element={<><Header /><Contact/><Footer /></>}/>
        <Route path="/Apropos" element={<><Header /><Apropos/><Footer /></>}/>
        {/* routes utilisateurs */}  
        <Route path="/utilisateur/connexion" element={<><Header /><Page1/><Footer /></>}> </Route>
        <Route path="/utilisateur/inscription" element={<><Header /><InscriptionUser/><Footer /></>}/>
        <Route path="/utilisateur/postuler" element={<><Header /><Postuler/><Footer /></>}/>
        <Route path="/utilisateur/importercv" element={<><Header />< ImportCV /><Footer /></>} />
        <Route path="/utilisateur/recherche" element={<><Header /><Chercheur/><Footer /></>}/>
        <Route path="/utilisateur/Validation" element={<><Header /><Validation/><Footer /></>}/>
        <Route path="/utilisateur/profile" element={<><Header /><UserProfile username="JohnDoe" email="johndoe@example.com" bio="Lorem ipsum dolor sit amet"/><Footer /></>}/>
        
        {/* routes entreprises */}  
        <Route path="/entreprise/inscription" element={<><Header /><Inscription /><Footer /></>}/>
        <Route path="/entreprise/connexion" element = {<><Header /><Loginentre/><Footer /></>}/>
        <Route path="/entreprise/Validation" element={<><Header /><ValidationEnt/><Footer /></>}/>
        <Route path="/entreprise/offre" element={<><EntrepriseHeader />< Publication/><Footer /></>}/>
        <Route path="/entreprise/formulaire" element={<><EntrepriseHeader />< Form/><Footer /></>}/>
        <Route path="/entreprise/formulaire3" element={<><EntrepriseHeader />< Formulaire3/><Footer /></>}/>
        <Route path="/entreprise/formulaire2" element={<><EntrepriseHeader />< Formulaire2/><Footer /></>}/>
        {/* routes administrateur */}
         {/* Routes des étapes de formulaire */}
       
  
      </Routes>
    
   
  );



}

export default AppWithRouter;

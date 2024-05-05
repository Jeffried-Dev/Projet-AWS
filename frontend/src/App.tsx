import React from 'react';
import './App.css';
import Footer from './Components/commun/homePage/footer/footer';
import Header from './Components/commun/homePage/header/header';
import EntrepriseHeader from './Components/entreprise/header/index';
import UtilisateurHeader from './Components/utilisateur/header/index';
import Rectangle from './Components/commun/homePage/rectangle/rectangle';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginUser from './Components/utilisateur/Login/Login';
import Inscription from './Components/entreprise/inscription/inscription';
import InscriptionUser from './Components/utilisateur/inscription/UserInscription'
import Loginentre from './Components/entreprise/loginentre/loginentre';
import Contact from './Components/commun/contact/contact';
import Page404 from './Components/commun/page404/index';
import Apropos from './Components/commun/Apropos/Apropos';
import Postuler from './Components/utilisateur/postuler/postuler';
import Chercheur from './Components/utilisateur/Recherche/chercheur';
import UserProfile from'./Components/utilisateur/UserProfile/UserProfile';
import Publication from './Components/entreprise/offre/offre';
import Validation from './Components/utilisateur/Validation/Validation';
import ValidationEnt from './Components/entreprise/Validation/Validation';
import ImportCV from './Components/utilisateur/importercv/importercv';
import ThreePartForm from './Components/entreprise/newOffre/index';

//import ProtectedRoute  from './Components/commun/ProtectedRoute/index';

const App: React.FC = () => {
  return (
    <div className="app">
      <Header/>
      <div className="pt-20 w-full">
        <div className="container w-full px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <div className="flex flex-col w-full md:w-1/2 justify-center items-start text-center md:text-left">
            <Rectangle color="#F1F2F6" bottomTextColor="#56BB3" isLeftButtonVisible={true} isRightButtonVisible={false}/>
          </div>
          <div className="flex flex-col w-full md:w-1/2 justify-center items-start text-center ">        
            <Rectangle color="#74BBE4" bottomTextColor="#FFFF" isLeftButtonVisible={false} isRightButtonVisible={true}/>
          </div>
        </div>
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
      {/* <Route path="/404" element={<><Header /><Page404/><Footer /></>}/> */}
      <Route path="*" element={<><Header /><Page404/><Footer /></>}/>
      {/* <ProtectedRoute path="/utilisateur/postuler" element={<><UtilisateurHeader /><Postuler/><Footer /></>} requiredRole={1} redirectPath="/404"/> */}
      
      
      {/* routes utilisateurs */}  
      <Route path="/utilisateur/connexion" element={<><Header /><LoginUser/><Footer /></>}> </Route>
      <Route path="/utilisateur/inscription" element={<><Header /><InscriptionUser/><Footer /></>}/>
      <Route path="/utilisateur/Validation" element={<><Header /><Validation/><Footer /></>}/>
      
      <Route path="/utilisateur/postuler" element={<><UtilisateurHeader /><Postuler/><Footer /></>}/>
      <Route path="/utilisateur/importercv" element={<><UtilisateurHeader />< ImportCV /><Footer /></>} />
      <Route path="/utilisateur/recherche" element={<><UtilisateurHeader /><Chercheur/><Footer /></>}/>
      <Route path="/utilisateur/profile" element={<><UtilisateurHeader /><UserProfile username="JohnDoe" email="johndoe@example.com" bio="Lorem ipsum dolor sit amet"/><Footer /></>}/>
      
      {/* routes entreprises */}  
      <Route path="/entreprise/inscription" element={<><Header /><Inscription /><Footer /></>}/>
      <Route path="/entreprise/connexion" element = {<><Header /><Loginentre/><Footer /></>}/>
      <Route path="/entreprise/Validation" element={<><Header /><ValidationEnt/><Footer /></>}/>
      <Route path="/entreprise/offre" element={<><EntrepriseHeader />< Publication/><Footer /></>}/>
      <Route path="/entreprise/formulaire" element={<><EntrepriseHeader />< ThreePartForm/><Footer /></>}/>
      {/* routes administrateur */}
      {/* Routes des étapes de formulaire */}
    </Routes>
  );

}

export default AppWithRouter;

import React from 'react';
import logo from '../../../assets/Logof.jpg';
import './offre.css'; 

const Navbars = () => {
  return (
    <nav className="navbars">
      <div className="navbars-logo">
      <img src={logo} className='logo' alt="Logo"></img>
      </div>
      <ul className="navbars-links">
        <li><a href="#">Accueil</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <button className="publish-button">Publier une offre d'emploi</button>
    </nav>
  );
}

const Publication = () => {
  return (
    <div className="home">
      <Navbars/>
      <div className="contents">
  <div className="text-containers">
    <h1>
    Trouvez votre prochain défi <br /> professionnel avec nous<br />  
    </h1>
    <p>
     <br /> 
    </p>
  </div>
</div>
</div>

  );
}
export default Publication;

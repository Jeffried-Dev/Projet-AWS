import React from 'react';
import backgr from '../../assets/backgr.jpg';

// Interface définissant les propriétés attendues pour le composant UserProfile
interface UserProfileProps {
  username: string;
  email: string;
  bio: string;
}

// Composant UserProfile fonctionnel avec les propriétés spécifiées
const UserProfile: React.FC<UserProfileProps> = ({ username, email, bio }) => {
  return (
    <div style={{
      backgroundImage: `url(${backgr})`,
      border: '1px solid #ccc',
      padding: '20px',
      margin: '20px',
      borderRadius: '8px',
      width: '300px', // Ajoutez une largeur pour contrôler la largeur du rectangle
      textAlign: 'center', // Alignez le texte au centre
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Ajoutez une ombre pour un effet de profondeur
      backgroundColor: 'white', // Ajoutez une couleur d'arrière-plan
    }}>
      {/* Titre du profil utilisateur */}
      <h2>User Profile</h2>

      {/* Informations du profil utilisateur */}
      <p>
        <strong>Username:</strong> {username}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Bio:</strong> {bio}
      </p>

      {/* Ajoutez d'autres éléments du profil utilisateur ici */}
    </div>
  );
};

export default UserProfile;

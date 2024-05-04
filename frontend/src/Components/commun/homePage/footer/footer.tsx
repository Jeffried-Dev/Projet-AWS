import React from 'react';

const Footer: React.FC = () => {
  return (
    <div className="footer-wrapper  w-full flex flex-col">
      <div className="footer-bottom py-4 px-4 bg-white text-blue-600 w-full">
        <p className="text-center">&copy; {new Date().getFullYear()} CSRecrut. Tous droits réservés.</p>
      </div>
    </div>
  );
}

export default Footer;




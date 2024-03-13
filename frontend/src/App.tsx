import React from 'react';
import './App.css';
import Footer from './Components/homePage/footer/footer';
import Header from './Components/homePage/header/header';
import Rectangle from './Components/homePage/rectangle/rectangle';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page1 from './Components/page1/Login/Login';
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
      <Route path="/" element={<App />} />
      <Route path="/page1" element={<Page1 />} />
      {/* ... autres routes ... */}
    </Routes>
  );
}


export default AppWithRouter;

// App.tsx
import React from 'react';
import './App.css';
import Footer from './Components/footer/footer';
import Header from './Components/header/header';
import Rectangle from './Components/rectangle/rectangle';

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

export default App;
















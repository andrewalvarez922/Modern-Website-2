
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import EngineeredPerfection from './components/EngineeredPerfection';
import OurBrands from './components/OurBrands';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [walletConnected, setWalletConnected] = useState(false);

  const handleConnectWallet = () => {
    setWalletConnected(!walletConnected);
  };

  return (
    <div className="relative min-h-screen bg-background-dark">
      <Navbar 
        onConnectWallet={handleConnectWallet} 
        isConnected={walletConnected} 
      />
      
      <main>
        <Hero />
        <Ticker />
        <EngineeredPerfection />
        <OurBrands />
        <CTA />
      </main>

      <Footer />
    </div>
  );
};

export default App;

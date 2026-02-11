
import React from 'react';

interface NavbarProps {
  onConnectWallet: () => void;
  isConnected: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ onConnectWallet, isConnected }) => {
  return (
    <nav className="fixed w-full z-50 top-0 left-0 px-4 md:px-6 py-4">
      <div className="glass-panel max-w-7xl mx-auto px-6 py-3 rounded-full flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="material-icons text-primary text-3xl">spa</span>
          <span className="font-bold text-xl tracking-tight text-white">
            MODERN<span className="text-primary">CANNABIS</span>
          </span>
        </div>
        
        <div className="hidden lg:flex gap-8 text-sm font-semibold text-gray-300">
          <a className="hover:text-primary transition-colors" href="#">Products</a>
          <a className="hover:text-primary transition-colors" href="#">Strains</a>
          <a className="hover:text-primary transition-colors" href="#">Lab Results</a>
          <a className="hover:text-primary transition-colors" href="#">About Us</a>
        </div>

        <button 
          onClick={onConnectWallet}
          className={`bg-gradient-to-r ${isConnected ? 'from-gray-700 to-gray-900 text-white' : 'from-primary to-[#1a3d2f] text-background-dark'} font-bold px-6 py-2 rounded-full hover:shadow-[0_0_20px_rgba(13,242,89,0.4)] transition-all transform hover:-translate-y-0.5 whitespace-nowrap`}
        >
          {isConnected ? '0x71C...4e82' : 'Connect Wallet'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

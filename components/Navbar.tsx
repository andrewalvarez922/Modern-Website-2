
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed w-full z-50 top-0 left-0 px-4 md:px-6 py-4">
      <div className="glass-panel max-w-7xl mx-auto px-6 py-3 rounded-full flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="material-icons text-primary text-3xl">spa</span>
          <span className="font-bold text-xl tracking-tight text-white">
            MODERN<span className="text-primary">CANNABIS</span>
          </span>
        </div>
        
        <div className="hidden lg:flex gap-10 text-sm font-semibold text-gray-300">
          <a className="hover:text-primary transition-colors" href="#">Premium Retail</a>
          <a className="hover:text-primary transition-colors" href="#">Wholesale</a>
          <a className="hover:text-primary transition-colors" href="#">Services</a>
          <a className="hover:text-primary transition-colors" href="#">Contact Us</a>
        </div>

        <div className="flex items-center">
          <button className="bg-primary/10 border border-primary/30 text-primary px-6 py-2 rounded-full font-bold text-sm hover:bg-primary hover:text-background-dark transition-all">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

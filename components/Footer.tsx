
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050b07] border-t border-white/5 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <span className="material-icons text-primary text-3xl">spa</span>
            <span className="font-bold text-2xl tracking-tight text-white">
              MODERN<span className="text-primary">CANNABIS</span>
            </span>
          </div>
          <p className="text-gray-500 max-w-sm">
            Pioneering the future of botanical science and distribution. We provide the infrastructure for the modern cannabis economy.
          </p>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6">Platform</h4>
          <ul className="space-y-4 text-gray-500">
            <li><a className="hover:text-primary transition-colors" href="#">Marketplace</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Analytics</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Logistics</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Compliance</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6">Company</h4>
          <ul className="space-y-4 text-gray-500">
            <li><a className="hover:text-primary transition-colors" href="#">About</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Investors</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Careers</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Legal</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between text-gray-600 text-sm">
        <p>© 2024 Modern Cannabis Inc. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
          <a className="hover:text-white transition-colors" href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import React from 'react';

const Hero: React.FC = () => {
  return (
    <header className="relative w-full h-[120vh] md:h-screen flex flex-col md:flex-row overflow-hidden pt-20 md:pt-0">
      {/* Consumer Panel */}
      <div className="group relative flex-1 h-full overflow-hidden border-b md:border-b-0 md:border-r border-white/10 transition-all duration-700 md:hover:flex-[1.5]">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" 
          style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBZ26LDWBnePI69Fz4e3ZsNbK6EvW4kLq1K2EwuqjB5eSo7jBZCOHbKun08Hj0ae_H8kPAn1Bf4nEtPgYDSNCumE7C7zAozbvpj-QTLQ5C66EMFdSWIF0P7MZsNY02LIlo2n2wGmr6VGgrTaNweRb5q2qz9o7wJKmSElu9pxgcI1ipAgZXdNeheYVqWaU6SzvNsRcA_PZON2g3awRbxlu1IeDXS5d84sCerRpif8IW6pPiImpwoktqiQ752oGVgGu1LmOnElBsBVAJO')` }}
        />
        <div className="absolute inset-0 bg-background-dark/70 group-hover:bg-background-dark/50 transition-colors duration-500"></div>
        
        <div className="relative z-10 h-full flex flex-col justify-center items-center md:items-start p-8 md:p-16 text-center md:text-left">
          <span className="text-primary font-bold tracking-[0.2em] mb-4 text-xs md:text-sm uppercase border border-primary/30 px-4 py-1 rounded-full bg-primary/10 backdrop-blur-sm">
            Consumer
          </span>
          <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
            Premium <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">Retail</span>
          </h1>
          <p className="text-gray-300 max-w-md text-base md:text-lg mb-8 font-medium">
            Curated for the connoisseur. Experience purity, potency, and precision in every gram.
          </p>
          <a className="inline-flex items-center gap-2 text-white font-bold group-hover:text-primary transition-colors" href="#">
            Shop Collection <span className="material-icons text-primary group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </a>
        </div>
      </div>

      {/* Business Panel */}
      <div className="group relative flex-1 h-full overflow-hidden transition-all duration-700 md:hover:flex-[1.5]">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" 
          style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDfjo6zrJdKIcZagZh_xessexNCd1QxSw86ntpn9y4q6sCwkjrcAjw72ulFMm6g0JtycKMAqylpxUhiX99EyzgtWpM6JABlmVkVBdxD3GrYs_JKNYe_Ge1tY7bxpkM5H6YP0XW3ejhkHhioLIpPVDybkcahVL_U8YKZ2f7rdZ5XBvbDRV6Izz05vFsi4UQ59_bkTwRXYQvcNtOOnvNVRATJ4scmCg9YqgFnKFEysFlmX9pA0lGXGTsilnilKA5plLf2aSUwQ3SeqeCU')` }}
        />
        <div className="absolute inset-0 bg-background-dark/80 group-hover:bg-background-dark/60 transition-colors duration-500"></div>
        
        <div className="relative z-10 h-full flex flex-col justify-center items-center md:items-end p-8 md:p-16 text-center md:text-right">
          <span className="text-primary font-bold tracking-[0.2em] mb-4 text-xs md:text-sm uppercase border border-primary/30 px-4 py-1 rounded-full bg-primary/10 backdrop-blur-sm">
            Business
          </span>
          <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
            Industrial <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-primary to-white">Wholesale</span>
          </h1>
          <p className="text-gray-300 max-w-md text-base md:text-lg mb-8 font-medium">
            Scalable solutions for dispensaries and manufacturers. Consistent quality at volume.
          </p>
          <a className="inline-flex items-center gap-2 text-white font-bold group-hover:text-primary transition-colors flex-row-reverse" href="#">
            Partner With Us <span className="material-icons text-primary group-hover:-translate-x-1 transition-transform">arrow_back</span>
          </a>
        </div>
      </div>

      {/* Central Bolt Icon */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 hidden md:block pointer-events-none">
        <div className="w-24 h-24 rounded-full bg-background-dark border-4 border-primary/20 flex items-center justify-center backdrop-blur-xl">
          <span className="material-icons text-primary text-4xl animate-pulse-slow">bolt</span>
        </div>
      </div>
    </header>
  );
};

export default Hero;

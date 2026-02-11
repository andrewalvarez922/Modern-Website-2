
import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-background-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 to-transparent opacity-50 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h2 className="text-sm font-bold tracking-[0.5em] text-primary uppercase mb-8">Ready to Scale?</h2>
        
        <a className="group block relative" href="tel:+15550192834">
          <span className="text-[10vw] md:text-[8vw] leading-none font-extrabold text-white group-hover:text-primary transition-colors duration-300 block">
            +1 (555) 019-2834
          </span>
          <span className="text-xl md:text-4xl font-light text-gray-500 group-hover:text-white transition-colors mt-4 block">
            Call our VIP line directly
          </span>
          <div className="h-1 w-0 bg-primary mx-auto mt-8 group-hover:w-1/2 transition-all duration-500"></div>
        </a>

        <div className="mt-16 flex flex-col md:flex-row justify-center gap-6">
          <button className="bg-gradient-to-r from-primary to-[#1a3d2f] text-background-dark font-bold text-lg px-12 py-5 rounded-full hover:shadow-[0_0_40px_rgba(13,242,89,0.3)] hover:scale-105 transition-all">
            Start Order
          </button>
          <button className="glass-panel text-white font-bold text-lg px-12 py-5 rounded-full hover:bg-white/10 transition-all border border-white/20">
            Download Catalog
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;

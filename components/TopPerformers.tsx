
import React, { useRef } from 'react';
import { Strain } from '../types';

const performers: Strain[] = [
  {
    id: '1',
    name: 'Neon Haze',
    thc: '28%',
    description: 'Sativa dominant hybrid known for energetic cerebral effects and citrus notes.',
    type: 'Sativa',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvLRBvp6Qn_6pm1O0dya2kkjUpN2Hkqnik57HjdJz5HHZ4n0XTgpS8DJocvRiyEzvclIeB4K2QbwUfjhKxFtm2ovMsK1AM8GEhHf2sJc-E94AM3RBso9_KdiEGYoepy1tGyDpnyY0n7PDQH0OI4FEKBx7ftwkXBlDNBH7osAHEQm8hmSXMzWQGZ8Cej8ZmEMxts75nlLB37kc-wwO5HK06pt5ig_j9JLz8MUTW3jiyfYBKcRTVROcC8261PqIJdQorv8GIzzyROa1H'
  },
  {
    id: '2',
    name: 'Void Star',
    thc: '31%',
    description: 'Ultra-potent Indica strain engineered for maximum relaxation and pain relief.',
    type: 'Indica',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBuFl_dhSrC0k_ntK-iZUelDh3jOQClAmyEp7lb6HR7EeWRT6HABS-qe8WzbkCCSO2t64K-KTCXgZWJodpEWrIcRpAyoWetOc4_EJys7XNoq7QWQbGJLo4dHDRhrDCAOuAkW1HZWN0bSXHFXJdyCr5ul-FWreVh5B6lqF1Hv1jTdu6v9_5c4aAfvTozBpvkAEf3aakA8vbAj1c2ijJzcsicKyPYmQcCi_2reR51eiteut6-ReRoW2sXsroisFOcgtUowsS6YUh8kcKi'
  },
  {
    id: '3',
    name: 'Cyber Kush',
    thc: '24%',
    description: 'Perfectly balanced hybrid offering creative focus and body calm.',
    type: 'Hybrid',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBIeaKcRMWBc50J5w8YM7CK04Y6ApjQgjElV-mb8czPhgsOjNgcd_SohWXr6gEoT-LoNE9Xs1vLpRCQK6Vkbkky0gpfy0hVyG0vLjv7ahBtw_ZoUnSbedz5PXgpdMG6FZooEklPP94m2LKvyiVtVZJKXuTJEtRHQo-W74uy1_I5fq5tHTowjONjs6we304TXpOcUsIvsSW9JfqLWjnhskujhict8Uhc1j6l1bT5xG7kYDy57qC91qcNBok2nY8aoTXnUoMlLPaNflgV'
  },
  {
    id: '4',
    name: 'Green Protocol',
    thc: '22%',
    description: 'Classic profile with modern genetic stability. Earthy pine notes.',
    type: 'Hybrid',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJL8-_ffOiXLrPeEbEvtY7bqW6rl8VI7KRNXdVdGtKHCqunvsHoE8sKOeK2jbdjv1DNpfu_SyI6-w5eNePueiAcgf4PZe5IylDG4CY0ef9Wtk8aYn978IVUmBJkyNDvoEOb2ekCrWHgtlWJKpF0Q6e8B9W-nmm4YjKJ7zCZpXR8hE0u0nLYnOBcXQE2a4lV4M218wlxdJrYrloFqLXYpu_wtI2qIJ4bdUzPmWkq5InVpNkMLyIJGrlSx7em3GLGnt6F2ttOwr-IixY'
  }
];

const TopPerformers: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 overflow-hidden bg-surface-dark/30 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">
          Top <span className="text-primary">Performers</span>
        </h2>
        <div className="flex gap-2">
          <button 
            onClick={() => scroll('left')}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-primary hover:text-primary transition-colors"
          >
            <span className="material-icons">chevron_left</span>
          </button>
          <button 
            onClick={() => scroll('right')}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-primary hover:text-primary transition-colors"
          >
            <span className="material-icons">chevron_right</span>
          </button>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-8 px-6 md:px-[max(2rem,calc((100vw-80rem)/2))] snap-x hide-scrollbar"
      >
        {performers.map((strain) => (
          <div key={strain.id} className="min-w-[300px] md:min-w-[400px] snap-center">
            <div className="relative h-[500px] rounded-[3rem] overflow-hidden group cursor-pointer border border-white/10">
              <img 
                src={strain.imageUrl} 
                alt={strain.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/20 to-transparent opacity-90"></div>
              <div className="absolute bottom-0 left-0 w-full p-8">
                <div className="flex justify-between items-end mb-2">
                  <h3 className="text-3xl font-extrabold text-white">{strain.name}</h3>
                  <div className="bg-primary text-background-dark font-black text-xl px-3 py-1 rounded-lg">
                    {strain.thc}
                  </div>
                </div>
                <p className="text-gray-300 font-medium mb-4 line-clamp-2">
                  {strain.description}
                </p>
                <span className="inline-block px-4 py-2 border border-white/30 rounded-full text-xs font-bold text-white uppercase tracking-wider backdrop-blur-md">
                  {strain.type}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopPerformers;

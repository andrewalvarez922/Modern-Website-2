
import React, { useRef } from 'react';

interface Brand {
  id: string;
  name: string;
  tagline: string;
  category: string;
  description: string;
  imageUrl: string;
}

const brands: Brand[] = [
  {
    id: '1',
    name: 'Oil Traderz',
    tagline: 'Liquid Gold Standards',
    category: 'Concentrates',
    description: 'Specializing in solventless hash rosin and high-terpene full spectrum extracts.',
    imageUrl: 'https://images.unsplash.com/photo-1610484826967-09c5720778c7?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: '2',
    name: 'Bud Traderz',
    tagline: 'Resin Reimagined',
    category: 'Concentrates',
    description: 'Premium cured resin and live badder engineered for the modern cannabis connoisseur.',
    imageUrl: 'https://images.unsplash.com/photo-1628151525918-28564a97475d?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: '3',
    name: 'OKC Kush Company',
    tagline: 'Oklahoma Craft Heritage',
    category: 'Flower',
    description: 'High-altitude indoor flower focused on genetic purity and artisanal hand-trimming.',
    imageUrl: 'https://images.unsplash.com/photo-1603909223429-69bb7101f420?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: '4',
    name: 'Oil & Co',
    tagline: 'Industrial Purity',
    category: 'Concentrates',
    description: 'Precision-extracted distillates and isolates for industrial scale manufacturing.',
    imageUrl: 'https://images.unsplash.com/photo-1596753177309-17075306915b?q=80&w=1000&auto=format&fit=crop'
  }
];

const OurBrands: React.FC = () => {
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
          Our <span className="text-primary">Brands</span>
        </h2>
        <div className="flex gap-2">
          <button 
            onClick={() => scroll('left')}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-primary hover:text-primary transition-colors"
            aria-label="Scroll left"
          >
            <span className="material-icons">chevron_left</span>
          </button>
          <button 
            onClick={() => scroll('right')}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-primary hover:text-primary transition-colors"
            aria-label="Scroll right"
          >
            <span className="material-icons">chevron_right</span>
          </button>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-8 px-6 md:px-[max(2rem,calc((100vw-80rem)/2))] snap-x hide-scrollbar"
      >
        {brands.map((brand) => (
          <div key={brand.id} className="min-w-[300px] md:min-w-[420px] snap-center">
            <div className="relative h-[550px] rounded-[3rem] overflow-hidden group cursor-pointer border border-white/10">
              <img 
                src={brand.imageUrl} 
                alt={brand.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/20 to-transparent opacity-90"></div>
              <div className="absolute bottom-0 left-0 w-full p-10">
                <span className="inline-block px-4 py-1.5 bg-primary/20 backdrop-blur-md border border-primary/30 rounded-full text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-4">
                  {brand.category}
                </span>
                <h3 className="text-4xl font-extrabold text-white mb-2">{brand.name}</h3>
                <p className="text-primary/80 font-bold mb-4 text-sm tracking-wide uppercase">
                  {brand.tagline}
                </p>
                <p className="text-gray-300 font-medium leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  {brand.description}
                </p>
                <div className="mt-6 flex items-center gap-2 text-white font-bold text-sm group-hover:text-primary transition-colors">
                  Explore Brand <span className="material-icons text-sm">arrow_forward</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurBrands;

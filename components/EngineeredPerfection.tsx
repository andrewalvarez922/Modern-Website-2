
import React from 'react';

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  imageUrl: string;
}

const services: ServiceItem[] = [
  {
    id: 'cultivation',
    title: 'Cultivation',
    description: 'Scaling agricultural excellence with an annual production capacity exceeding hundreds of thousands of pounds.',
    icon: 'potted_plant',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZ26LDWBnePI69Fz4e3ZsNbK6EvW4kLq1K2EwujB5eSo7jBZCOHbKun08Hj0ae_H8kPAn1Bf4nEtPgYDSNCumE7C7zAozbvpj-QTLQ5C66EMFdSWIF0P7MZsNY02LIlo2n2wGmr6VGgrTaNweRb5q2qz9o7wJKmSElu9pxgcI1ipAgZXdNeheYVqWaU6SzvNsRcA_PZON2g3awRbxlu1IeDXS5d84sCerRpif8IW6pPiImpwoktqiQ752oGVgGu1LmOnElBsBVAJO'
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    description: 'Operating high-throughput extraction labs that synthesize tens of thousands of kilograms of premium concentrate annually.',
    icon: 'precision_manufacturing',
    imageUrl: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'packaging',
    title: 'Packaging',
    description: 'Delivering industry-leading automated packaging and precision filling solutions tailored for global market standards.',
    icon: 'inventory_2',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBuFl_dhSrC0k_ntK-iZUelDh3jOQClAmyEp7lb6HR7EeWRT6HABS-qe8WzbkCCSO2t64K-KTCXgZWJodpEWrIcRpAyoWetOc4_EJys7XNoq7QWQbGJLo4dHDRhrDCAOuAkW1HZWN0bSXHFXJdyCr5ul-FWreVh5B6lqF1Hv1jTdu6v9_5c4aAfvTozBpvkAEf3aakA8vbAj1c2ijJzcsicKyPYmQcCi_2reR51eiteut6-ReRoW2sXsroisFOcgtUowsS6YUh8kcKi'
  },
  {
    id: 'distribution',
    title: 'Distribution',
    description: 'A comprehensive logistical network providing secure and expedited fulfillment to over 600 retail partners.',
    icon: 'local_shipping',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBIeaKcRMWBc50J5w8YM7CK04Y6ApjQgjElV-mb8czPhgsOjNgcd_SohWXr6gEoT-LoNE9Xs1vLpRCQK6Vkbkky0gpfy0hVyG0vLjv7ahBtw_ZoUnSbedz5PXgpdMG6FZooEklPP94m2LKvyiVtVZJKXuTJEtRHQo-W74uy1_I5fq5tHTowjONjs6we304TXpOcUsIvsSW9JfqLWjnhskujhict8Uhc1j6l1bT5xG7kYDy57qC91qcNBok2nY8aoTXnUoMlLPaNflgV'
  }
];

const EngineeredPerfection: React.FC = () => {
  return (
    <section className="py-24 px-6 relative bg-background-dark overflow-hidden">
      <div className="absolute top-1/4 left-0 w-1/3 h-1/3 bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-1/3 h-1/3 bg-[#1a3d2f]/40 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 text-left">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-2">
              Our Core <span className="text-primary">Services</span>
            </h2>
            <p className="text-gray-400 max-w-lg">Advanced agricultural technology meets industrial-scale botanical mastery.</p>
          </div>
          <button className="hidden md:block bg-surface-dark border border-white/10 px-6 py-3 rounded-full text-white hover:bg-white/5 transition-colors">
            View Capabilities
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="glass-panel rounded-3xl overflow-hidden relative group h-[400px] md:h-[500px]"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                style={{ backgroundImage: `url('${service.imageUrl}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/50 to-transparent opacity-90"></div>
              
              {/* Content Container: Explicitly set items-start and text-left */}
              <div className="absolute inset-0 p-8 flex flex-col h-full items-start text-left">
                {/* Icon wrapper - ensures it stays top-left */}
                <div className="w-12 h-12 flex-shrink-0 rounded-full bg-primary/20 flex items-center justify-center text-primary backdrop-blur-md mb-6">
                  <span className="material-icons text-2xl">{service.icon}</span>
                </div>
                
                {/* Text content pushed to the bottom */}
                <div className="mt-auto w-full">
                  <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-100 leading-tight mb-6 font-bold text-base md:text-lg drop-shadow-lg">
                    {service.description}
                  </p>
                  <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngineeredPerfection;


import React from 'react';

const tickerData = [
  "OG KUSH: 24% THC",
  "BLUE DREAM: 18% THC",
  "STOCK: HIGH",
  "NEXT HARVEST: 2 DAYS",
  "LAB TESTED: PASS",
  "PURPLE HAZE: 21% THC",
  "SOUR DIESEL: 26% THC",
  "SHIPPING: GLOBAL"
];

const Ticker: React.FC = () => {
  const content = [...tickerData, ...tickerData, ...tickerData, ...tickerData];

  return (
    <div className="bg-primary text-background-dark py-3 font-mono text-sm font-bold border-y border-white/10 relative z-20 overflow-hidden">
      <div className="flex animate-scroll whitespace-nowrap">
        {content.map((item, idx) => (
          <React.Fragment key={idx}>
            <span className="mx-8">{item}</span>
            <span className="opacity-30">•</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Ticker;

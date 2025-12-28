import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Zap, Radio, Headphones, Settings } from 'lucide-react';

const GearPage = () => {
  const equipment = [
    { category: 'Mixing', name: 'Allen & Heath Xone:96', desc: 'Analog 6+2 channel DJ mixer with dual soundcards.' },
    { category: 'Players', name: 'Pioneer CDJ-3000', desc: 'Industry standard multi-players for technical precision.' },
    { category: 'Synthesis', name: 'Moog Mother-32', desc: 'Semi-modular analog synthesizer for deep low-end textures.' },
    { category: 'Monitoring', name: 'Sennheiser HD-25', desc: 'High-fidelity audio reproduction for harsh club environments.' },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-48 pb-24 px-6 md:px-24 min-h-screen text-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-left border-b border-white/5 pb-10">
          <span className="text-accent font-mono text-[10px] tracking-[0.5em] uppercase">Tech Stack</span>
          <h1 className="text-7xl md:text-9xl font-heading uppercase italic tracking-tighter mt-4">The Setup</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-20 items-start">
          <div className="relative group overflow-hidden">
             <img src="/Images/Image2.jpg" className="w-full grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-75 transition-all duration-700" alt="Studio Setup" />
             <div className="absolute inset-0 border border-white/10 m-4 pointer-events-none" />
          </div>

          <div className="space-y-12">
            {equipment.map((item, i) => (
              <div key={i} className="group border-b border-white/5 pb-8 hover:border-accent transition-colors">
                <p className="text-accent font-mono text-[10px] uppercase tracking-widest mb-2 flex items-center gap-2">
                  <Settings size={12} /> {item.category}
                </p>
                <h3 className="text-3xl font-heading uppercase mb-2 group-hover:italic transition-all">{item.name}</h3>
                <p className="text-white/40 text-sm font-light max-w-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default GearPage;
import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, ImageIcon, Music } from 'lucide-react';

const EPKPage = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-48 pb-24 px-6 md:px-24 min-h-screen text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-24">
          <span className="text-accent font-mono text-[10px] tracking-[0.5em] uppercase block mb-4">Media Assets</span>
          <h1 className="text-7xl md:text-9xl font-heading uppercase italic tracking-tighter">EPK</h1>
        </div>

        <div className="space-y-24 text-left">
          <section>
            <h2 className="text-accent font-mono text-[10px] uppercase tracking-widest mb-10 border-b border-white/10 pb-2">Biography</h2>
            <p className="text-2xl md:text-3xl font-light leading-relaxed italic text-white/80">
              "KRISHD is a Colombo-based sonic architect specializing in deep, progressive landscapes. By blending the raw energy of the Sri Lankan coastline with precisely engineered electronic rhythms, he has established a unique presence in the South Asian underground scene."
            </p>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="p-10 bg-white/5 border border-white/10 flex flex-col items-center text-center group hover:border-accent transition-all cursor-pointer">
                <ImageIcon className="text-accent mb-6" size={32} />
                <h4 className="text-xs font-bold uppercase tracking-widest mb-4">Press Photos</h4>
                <button className="text-[10px] uppercase tracking-[0.3em] font-black flex items-center gap-2 group-hover:text-accent">Download <Download size={12}/></button>
             </div>
             <div className="p-10 bg-white/5 border border-white/10 flex flex-col items-center text-center group hover:border-accent transition-all cursor-pointer">
                <FileText className="text-accent mb-6" size={32} />
                <h4 className="text-xs font-bold uppercase tracking-widest mb-4">Tech Rider</h4>
                <button className="text-[10px] uppercase tracking-[0.3em] font-black flex items-center gap-2 group-hover:text-accent">Download <Download size={12}/></button>
             </div>
             <div className="p-10 bg-white/5 border border-white/10 flex flex-col items-center text-center group hover:border-accent transition-all cursor-pointer">
                <Music className="text-accent mb-6" size={32} />
                <h4 className="text-xs font-bold uppercase tracking-widest mb-4">Music Promo</h4>
                <button className="text-[10px] uppercase tracking-[0.3em] font-black flex items-center gap-2 group-hover:text-accent">Download <Download size={12}/></button>
             </div>
          </section>
        </div>
      </div>
    </motion.div>
  );
};

export default EPKPage;
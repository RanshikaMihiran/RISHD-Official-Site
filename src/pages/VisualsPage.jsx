import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, MapPin, Calendar, X, ChevronLeft, ChevronRight, Maximize2, Share2 } from 'lucide-react';

const VisualsPage = () => {
  const [filter, setFilter] = useState('ALL');
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const categories = ['ALL', 'FESTIVALS', 'CLUB SETS', 'SESSIONS'];

  const visualData = [
    { 
      id: 1, 
      category: 'FESTIVALS',
      title: 'Solstice Protocol', 
      location: 'Mirissa Coast', 
      date: 'AUG 2025', 
      img: '/Images/Visual1.jpg',
      specs: '35MM / ISO 400',
      span: 'md:col-span-2 md:row-span-2'
    },
    { 
      id: 2, 
      category: 'CLUB SETS',
      title: 'Obsidian Night', 
      location: 'Port City', 
      date: 'JUL 2025', 
      img: '/Images/Visual2.jpg',
      specs: 'LEICA Q2 / f1.8',
      span: 'md:col-span-1 md:row-span-1'
    },
    { 
      id: 3, 
      category: 'SESSIONS',
      title: 'Southern Drift', 
      location: 'Hiriketiya', 
      date: 'MAY 2025', 
      img: '/Images/Image1.jpg',
      specs: 'SONY A7R / 24MM',
      span: 'md:col-span-1 md:row-span-2'
    },
    { 
      id: 4, 
      category: 'FESTIVALS',
      title: 'Vibe Academy', 
      location: 'Weligama', 
      date: 'APR 2025', 
      img: '/Images/Image1.jpg',
      specs: '35MM / ISO 800',
      span: 'md:col-span-1 md:row-span-1'
    },
  ];

  const filteredVisuals = filter === 'ALL' 
    ? visualData 
    : visualData.filter(item => item.category === filter);

  const handleNext = (e) => {
    e?.stopPropagation();
    setSelectedImageIndex((prev) => (prev + 1) % filteredVisuals.length);
  };

  const handlePrev = (e) => {
    e?.stopPropagation();
    setSelectedImageIndex((prev) => (prev - 1 + filteredVisuals.length) % filteredVisuals.length);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImageIndex === null) return;
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') setSelectedImageIndex(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, filter]);

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="pt-48 pb-40 px-6 md:px-24 min-h-screen bg-black"
    >
      <div className="max-w-screen-2xl mx-auto">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 text-left border-b border-white/5 pb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-accent font-mono text-[10px] tracking-[0.6em] uppercase">
              <div className="w-12 h-[1px] bg-accent" />
              Visual Archive
            </div>
            <h1 className="text-8xl md:text-[12vw] font-heading uppercase italic tracking-tighter text-white leading-[0.8]">
              Visua<span className="text-accent">ls</span>
            </h1>
          </div>

          <div className="flex flex-wrap gap-8 mt-12 md:mt-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setFilter(cat); setSelectedImageIndex(null); }}
                className={`text-[10px] uppercase tracking-[0.4em] font-bold transition-all border-b-2 pb-2 ${
                  filter === cat ? 'text-accent border-accent' : 'text-white/20 border-transparent hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* MASONRY GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[350px] gap-6">
          <AnimatePresence mode='popLayout'>
            {filteredVisuals.map((item, index) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedImageIndex(index)}
                className={`relative group overflow-hidden bg-k-dark rounded-sm cursor-pointer ${item.span}`}
              >
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105 grayscale group-hover:grayscale-0 brightness-50 group-hover:brightness-75"
                />

                {/* DESCRIPTION & EXPAND OVERLAY - Always Visible */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent flex flex-col justify-end p-8 text-left">
                  <p className="text-accent font-mono text-[9px] uppercase tracking-[0.3em] mb-2 flex items-center gap-2">
                    <Calendar size={12} /> {item.date}
                  </p>
                  
                  <div className="flex items-end justify-between gap-4">
                    <div className="flex-grow">
                      <h3 className="text-2xl md:text-3xl font-heading uppercase text-white leading-none mb-3 italic">
                        {item.title}
                      </h3>
                      <p className="text-white/60 text-[10px] uppercase tracking-widest flex items-center gap-2">
                        <MapPin size={12} className="text-accent/50" /> {item.location}
                      </p>
                    </div>

                    {/* EXPAND BUTTON - Always Visible */}
                    <div className="p-3 bg-white/5 border border-white/10 backdrop-blur-md rounded-full text-accent shadow-xl group-hover:bg-accent group-hover:text-black transition-all pointer-events-none">
                      <Maximize2 size={16} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* LIGHTBOX MODAL */}
        <AnimatePresence>
          {selectedImageIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-2xl flex items-center justify-center"
              onClick={() => setSelectedImageIndex(null)}
            >
              <button 
                className="absolute top-10 right-10 text-white/50 hover:text-accent z-[210] transition-colors"
                onClick={() => setSelectedImageIndex(null)}
              >
                <X size={40} strokeWidth={1} />
              </button>

              <button 
                className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 text-white/20 hover:text-accent z-[210] transition-all p-4"
                onClick={handlePrev}
              >
                <ChevronLeft size={60} strokeWidth={1} />
              </button>

              <button 
                className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 text-white/20 hover:text-accent z-[210] transition-all p-4"
                onClick={handleNext}
              >
                <ChevronRight size={60} strokeWidth={1} />
              </button>

              <motion.div 
                key={selectedImageIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center p-6 gap-6"
                onClick={(e) => e.stopPropagation()}
              >
                <img 
                  src={filteredVisuals[selectedImageIndex].img} 
                  className="max-w-full max-h-[70vh] object-contain border border-white/10 shadow-2xl"
                  alt="Expanded"
                />

                <div className="text-center">
                  <h2 className="text-4xl md:text-5xl font-heading uppercase italic text-white mb-4">
                    {filteredVisuals[selectedImageIndex].title}
                  </h2>
                  <div className="flex items-center justify-center gap-8 text-[10px] uppercase tracking-[0.4em] text-white/40 font-bold">
                    <span className="flex items-center gap-2"><MapPin size={14} className="text-accent"/> {filteredVisuals[selectedImageIndex].location}</span>
                    <span className="flex items-center gap-2"><Camera size={14} className="text-accent"/> {filteredVisuals[selectedImageIndex].specs}</span>
                  </div>
                </div>
              </motion.div>

              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-accent font-mono text-[10px] tracking-[0.5em] opacity-40">
                {selectedImageIndex + 1} / {filteredVisuals.length}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-40 border-t border-white/5 pt-20 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-left md:w-1/2 text-white">
            <h4 className="text-3xl font-heading uppercase italic mb-4">Request Full Gallery</h4>
            <p className="text-white/40 text-sm font-light max-w-sm">
              Press and media partners can request access to high-resolution captures.
            </p>
          </div>
          <button className="group flex items-center gap-6 border border-white/10 px-12 py-6 hover:border-accent transition-all text-white hover:text-accent">
            <span className="text-[10px] uppercase tracking-[0.5em] font-bold font-mono">Access Media Kit</span>
            <Share2 size={18} className="group-hover:rotate-12 transition-transform" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default VisualsPage;
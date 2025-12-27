import React, { useEffect, useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { ReactLenis } from 'lenis/react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Youtube, Mail, Play, Pause, MapPin, ArrowUpRight, Disc, Zap, Radio, Volume2, Globe, Users, Headphones, Activity, SkipForward, SkipBack } from 'lucide-react';

// --- PAGE IMPORTS ---
import ArchivesPage from './pages/ArchivesPage'; 
import SessionsPage from './pages/SessionsPage';
import ContactPage from './pages/ContactPage';
import BookNowPage from './pages/BookNowPage';
import VisualsPage from './pages/VisualsPage';

// --- CONFIGURATION ---
const HERO_IMAGES = [
  "/Images/Image1.jpg",
  "/Images/Image2.jpg", 
  "/Images/Image1.jpg", 
];

// --- GLOBAL UTILITY: Scroll To Top ---
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

// --- PROFESSIONAL HEADER COMPONENT ---
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full p-6 md:px-12 transition-all duration-500 z-[100] ${scrolled ? 'bg-black/80 backdrop-blur-xl py-4 border-b border-white/5' : 'bg-transparent'}`}>
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center">
        <Link to="/" className="font-heading font-extrabold text-2xl tracking-tighter uppercase text-white">
          KRISHD<span className="text-accent italic">.</span>
        </Link>
        <div className="hidden lg:flex items-center gap-12">
          {[{ n: 'Archives', p: '/archives' }, { n: 'Sessions', p: '/tour' },{ n: 'Visuals', p: '/visuals' },{ n: 'Contact', p: '/contact' }].map((item) => (
            <Link key={item.n} to={item.p} className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/50 hover:text-accent transition-colors">
              {item.n}
            </Link>
          ))}
          <Link to="/book" className="bg-accent text-black px-6 py-2 text-[10px] font-bold uppercase tracking-widest hover:bg-white transition-all">Book Now</Link>
        </div>
        <button className="lg:hidden text-accent flex flex-col gap-1">
          <div className="w-6 h-[2px] bg-accent" /><div className="w-4 h-[2px] bg-accent self-end" />
        </button>
      </div>
    </nav>
  );
};

// --- TURNTABLE COMPONENT ---
const PhilosophyTurntable = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <section className="py-40 px-6 md:px-24 relative overflow-hidden bg-k-black/30 text-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
        <motion.div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="relative aspect-square border border-white/10 bg-[#0C0C0E] p-12 overflow-hidden rounded-sm shadow-2xl cursor-crosshair group">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[85%] aspect-square rounded-full border border-white/5 bg-gradient-to-br from-white/5 to-transparent" />
          </div>
          <motion.div className="absolute inset-0 flex items-center justify-center z-10" animate={{ rotate: isHovered ? 0 : 360 }} transition={{ duration: isHovered ? 0.6 : 3, repeat: isHovered ? 0 : Infinity, ease: isHovered ? "easeOut" : "linear" }}>
            <div className="relative flex items-center justify-center">
              <Disc size={500} strokeWidth={0.03} className={`text-accent transition-opacity duration-700 ${isHovered ? 'opacity-80' : 'opacity-20'}`} />
              <div className="absolute w-4 h-4 rounded-full bg-accent shadow-[0_0_10px_#D4FF00]" />
            </div>
          </motion.div>
          <motion.div className="absolute top-10 right-10 z-20 origin-top-right" initial={{ rotate: -45 }} animate={{ rotate: isHovered ? -25 : -5 }} transition={{ type: "spring", stiffness: 50, damping: 10 }}>
            <div className="relative"><div className="w-1 h-40 bg-gradient-to-b from-white/60 to-white/20 ml-10 shadow-lg" /><div className="w-6 h-10 bg-white/30 border border-white/20 rounded-sm mt-[-5px] ml-[31px]" /><div className="absolute top-[-15px] right-[-15px] w-12 h-12 rounded-full border border-white/20 bg-black shadow-xl" /></div>
          </motion.div>
          <div className="relative z-30 h-full flex flex-col justify-center pointer-events-none text-left">
            <motion.div animate={{ opacity: isHovered ? 0.2 : 1 }} transition={{ duration: 0.3 }}>
              <h3 className="text-5xl md:text-7xl font-heading uppercase italic leading-none accent-glow">The <span className="text-accent">Aura</span> Protocol</h3>
              <p className="text-xl text-white/70 leading-relaxed font-light mt-8 max-w-md">Translating the raw energy of the Sri Lankan coastline into precisely engineered progressive landscapes.</p>
            </motion.div>
          </div>
        </motion.div>
        <div className="grid grid-cols-1 gap-8 relative z-10 text-left">
          <div className="p-10 bg-k-dark/80 backdrop-blur-md border border-white/5 hover:border-accent transition-all group shadow-xl">
            <Radio className="text-accent mb-6 group-hover:scale-110 transition-transform" /><h4 className="text-2xl font-heading uppercase mb-4 italic">Immersive Soundscapes</h4>
            <p className="text-sm text-white/40 leading-relaxed font-light">Engineered for high-fidelity systems, every frequency is tuned to vibrate the soul.</p>
          </div>
          <div className="p-10 bg-k-dark/80 backdrop-blur-md border border-white/5 hover:border-accent transition-all group shadow-xl">
            <Volume2 className="text-accent mb-6 group-hover:scale-110 transition-transform" /><h4 className="text-2xl font-heading uppercase mb-4 italic">Technical Precision</h4>
            <p className="text-sm text-white/40 leading-relaxed font-light">Seamless transitions that bridge the gap between sunset grooves and midnight power.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-k-black pt-32 pb-12 px-8 border-t border-white/5">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-4 gap-20 mb-24 text-left">
        <div className="md:col-span-2 text-white">
          <h2 className="text-5xl font-heading uppercase italic mb-8 font-bold">KRISHD<span className="text-accent">.</span></h2>
          <p className="text-white/30 text-sm max-w-sm mb-12 italic">"Sri Lanka's sonic architect, weaving coastal rhythms into deep progressive textures."</p>
          <div className="flex gap-8"><Instagram className="text-white/40 hover:text-accent cursor-pointer" /><Youtube className="text-white/40 hover:text-accent cursor-pointer" /><Mail className="text-white/40 hover:text-accent cursor-pointer" /></div>
        </div>
        <div className="space-y-6"><p className="text-[10px] uppercase tracking-widest text-accent font-bold">Management</p><ul className="space-y-4 text-xs uppercase tracking-widest text-white/50"><li>Island Sounds Agency</li><li>Technical Rider</li><li>Press Kit (2025)</li></ul></div>
        <div className="space-y-6"><p className="text-[10px] uppercase tracking-widest text-accent font-bold">Navigate</p><ul className="space-y-4 text-xs uppercase tracking-widest text-white/50"><li><Link to="/">Home</Link></li><li><Link to="/archives">Archives</Link></li><li><Link to="/tour">Sessions</Link></li><li><Link to="/contact">Inquiries</Link></li></ul></div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-4 text-white font-bold"><p className="text-[9px] uppercase tracking-[1em] opacity-20">KRISHD © 2025 ALL RIGHTS RESERVED</p></div>
    </div>
  </footer>
);

// --- HOME PAGE COMPONENT ---
const HomePage = () => {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [heroIndex, setHeroIndex] = useState(0);
  const audioRef = useRef(new Audio());

  const teaserTracks = [
    { id: 1, title: 'Deep Sea Session 048', label: 'Mixcloud Exclusive', durationStr: '01:14:22', audioSrc: '/audio/track1.mp3' },
    { id: 2, title: 'Obsidian Nights (Live)', label: 'Unreleased', durationStr: '01:05:10', audioSrc: '/audio/track1.mp3' },
    { id: 3, title: 'Southern Drift 2025', label: 'Live Set', durationStr: '01:30:00', audioSrc: '/audio/track1.mp3' },
  ];

  // --- HERO CAROUSEL LOGIC ---
  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000); 
    return () => clearInterval(timer);
  }, []);

  // --- AUDIO LOGIC ---
  const playTrack = async (track) => {
    const audio = audioRef.current;
    if (currentTrack?.id !== track.id) {
      audio.src = track.audioSrc;
      audio.load(); // Ensure new track loads
      audio.volume = volume;
      setCurrentTrack(track);
    }
    try {
      await audio.play();
      setIsPlaying(true);
    } catch (err) { console.error("Playback error:", err); }
  };

  const handlePlayPause = (track) => {
    if (currentTrack?.id === track.id) {
      if (isPlaying) { 
        audioRef.current.pause(); 
        setIsPlaying(false); 
      } else { 
        audioRef.current.play(); 
        setIsPlaying(true); 
      }
    } else { 
      playTrack(track); 
    }
  };

  const handleNext = () => {
    if (!currentTrack) return;
    const currentIndex = teaserTracks.findIndex(t => t.id === currentTrack.id);
    const nextIndex = (currentIndex + 1) % teaserTracks.length;
    playTrack(teaserTracks[nextIndex]);
  };

  const handlePrev = () => {
    if (!currentTrack) return;
    const currentIndex = teaserTracks.findIndex(t => t.id === currentTrack.id);
    const prevIndex = (currentIndex - 1 + teaserTracks.length) % teaserTracks.length;
    playTrack(teaserTracks[prevIndex]);
  };

  const handleSeek = (e) => {
    const time = parseFloat(e.target.value);
    audioRef.current.currentTime = time;
    setCurrentTime(time);
  };

  const handleVolume = (e) => {
    const vol = parseFloat(e.target.value);
    setVolume(vol);
    audioRef.current.volume = vol;
  };

  useEffect(() => {
    const audio = audioRef.current;
    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateMetadata = () => setDuration(audio.duration);
    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateMetadata);
    audio.addEventListener('ended', handleNext);
    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateMetadata);
      audio.removeEventListener('ended', handleNext);
    };
  }, [currentTrack]);

  const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    const min = Math.floor(time / 60);
    const sec = Math.floor(time % 60);
    return `${min}:${sec < 10 ? '0' : ''}${sec}`;
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      
      {/* --- RE-VAMPED LIVE HERO --- */}
      <section className="h-screen relative flex items-center justify-center overflow-hidden bg-black">
        <AnimatePresence mode="wait">
          <motion.div 
            key={heroIndex}
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1.1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 3, ease: "linear" }}
            className="absolute inset-0 z-0"
          >
            <img 
              src={HERO_IMAGES[heroIndex]} 
              className="w-full h-full object-cover brightness-[0.5]" // Removed grayscale and increased brightness
              alt="Hero Backdrop" 
            />
          </motion.div>
        </AnimatePresence>

        {/* Overlays */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-transparent to-black" />
        
        {/* Content */}
        <div className="relative z-20 text-center px-4">
          <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}>
            <p className="text-accent text-[10px] uppercase tracking-[2.5em] mb-8 font-black accent-glow ml-[2.5em]">Sonic Architect</p>
            <h1 className="text-[18vw] font-heading leading-[0.7] uppercase tracking-tighter text-white font-bold mb-12 drop-shadow-2xl">
              KRI<span className="italic text-accent">S</span>HD
            </h1>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
               <button className="bg-accent text-black px-14 py-5 font-bold uppercase text-[11px] tracking-widest hover:bg-white transition-all shadow-xl">Listen Live</button>
               <Link to="/tour" className="bg-white/5 backdrop-blur-md border border-white/20 px-14 py-5 font-bold uppercase text-[11px] tracking-widest text-white hover:bg-accent hover:text-black transition-all">Tour Dates</Link>
            </div>
          </motion.div>
        </div>

        {/* Indicators */}
        <div className="absolute bottom-12 z-30 flex gap-3">
          {HERO_IMAGES.map((_, i) => (
            <div 
              key={i} 
              className={`h-[1px] transition-all duration-700 ${heroIndex === i ? 'w-16 bg-accent' : 'w-6 bg-white/30'}`} 
            />
          ))}
        </div>
      </section>

      <div className="bg-accent py-4 overflow-hidden whitespace-nowrap border-y border-white/10 relative z-40">
         <div className="flex animate-[scroll_30s_linear_infinite] gap-20 items-center">
            {[...Array(6)].map((_, i) => (
              <span key={i} className="text-black font-black uppercase text-[11px] tracking-[0.6em] flex items-center gap-6"><Zap size={16} fill="black" /> Next Session: The Doctor's House - DEC 28</span>
            ))}
         </div>
      </div>

      <section className="py-24 bg-k-dark/50 border-b border-white/5 relative z-10 text-white">
         <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12 px-6 text-center">
            {[{ label: 'Performances', val: '450+', icon: Disc }, { label: 'Listeners', val: '12K+', icon: Headphones }, { label: 'Cities', val: '15+', icon: Globe }, { label: 'Community', val: '8K+', icon: Users }].map((stat, i) => (
              <div key={i} className="group flex flex-col items-center">
                 <stat.icon className="text-accent/30 group-hover:text-accent mb-6 transition-colors" size={24} />
                 <h4 className="text-5xl font-heading mb-2 font-bold">{stat.val}</h4>
                 <p className="text-[10px] uppercase tracking-widest text-white/30">{stat.label}</p>
              </div>
            ))}
         </div>
      </section>

      <PhilosophyTurntable />

      <section className="py-40 bg-k-dark/30 border-t border-white/5 px-6 md:px-24 relative z-10">
         <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 text-left">
            <div><span className="text-accent font-mono text-xs mb-4 block">01</span><h2 className="text-6xl md:text-8xl font-heading uppercase italic tracking-tighter text-white font-bold text-white">Sound Archive</h2></div>
            <Link to="/archives" className="text-white text-[10px] uppercase tracking-[0.5em] flex items-center gap-4 hover:text-accent transition-all border-b border-white/10 pb-2 font-bold">Explore Full Library <ArrowUpRight size={14} /></Link>
         </div>
         <div className="grid gap-4">
            {teaserTracks.map((track, i) => {
              const isActive = currentTrack?.id === track.id;
              return (
                <div key={track.id} onClick={() => handlePlayPause(track)} className={`group flex items-center justify-between p-10 border border-white/5 transition-all cursor-pointer ${isActive ? 'bg-white/[0.03] border-l-2 border-l-accent' : 'hover:bg-accent/[0.02]'}`}>
                   <div className="flex items-center gap-12 text-left">
                      {isActive && isPlaying ? <Activity size={18} className="text-accent animate-pulse" /> : <span className="text-xs font-mono text-white/20 font-bold">0{i+1}</span>}
                      <div>
                        <h3 className={`text-2xl md:text-3xl font-heading uppercase transition-all italic text-white font-bold ${isActive ? 'text-accent' : 'group-hover:text-accent'}`}>{track.title}</h3>
                        <p className="text-[10px] text-white/30 uppercase tracking-widest mt-1">{track.label}</p>
                      </div>
                   </div>
                   <div className={`w-12 h-12 rounded-full flex items-center justify-center border ${isActive ? 'bg-accent border-accent text-black' : 'border-white/20 text-accent group-hover:border-accent'}`}>
                      {isActive && isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" className="ml-1" />}
                   </div>
                </div>
              );
            })}
         </div>
      </section>

      <AnimatePresence>
        {currentTrack && (
          <motion.div initial={{ y: 100 }} animate={{ y: 0 }} exit={{ y: 100 }} className="fixed bottom-0 left-0 w-full z-[150] px-4 pb-4">
            <div className="max-w-screen-xl mx-auto bg-[#0A0A0A]/95 backdrop-blur-2xl border border-white/10 p-4 rounded-xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-4">
               <div className="flex items-center gap-4 w-full md:w-1/4 text-white">
                  <div className={`w-12 h-12 bg-white/5 rounded-md flex items-center justify-center ${isPlaying ? 'animate-[spin_4s_linear_infinite]' : ''}`}><Disc size={20} className="text-accent" /></div>
                  <div className="text-left"><p className="text-[9px] uppercase tracking-widest text-accent mb-1 font-bold">Now Playing</p><h4 className="font-heading uppercase text-sm line-clamp-1 text-white">{currentTrack.title}</h4></div>
               </div>
               <div className="flex items-center justify-center gap-6 w-full md:w-1/4 text-white">
                  <SkipBack size={20} className="text-white/40 hover:text-white cursor-pointer" onClick={handlePrev} />
                  <button onClick={() => handlePlayPause(currentTrack)} className="w-12 h-12 bg-accent rounded-full flex items-center justify-center hover:scale-105 transition-transform shadow-[0_0_20px_rgba(212,255,0,0.3)]">
                    {isPlaying ? <Pause size={20} fill="black" /> : <Play size={20} fill="black" className="ml-1" />}
                  </button>
                  <SkipForward size={20} className="text-white/40 hover:text-white cursor-pointer" onClick={handleNext} />
               </div>
               <div className="flex items-center gap-6 w-full md:w-1/2 justify-end text-white">
                  <div className="flex items-center gap-3 w-full max-w-[300px]">
                    <span className="text-[10px] font-mono text-white/40 w-10 text-right">{formatTime(currentTime)}</span>
                    <div className="relative w-full h-1 bg-white/10 rounded-full overflow-hidden">
                       <div className="absolute h-full bg-accent" style={{ width: `${(currentTime / duration) * 100}%` }} />
                       <input type="range" min="0" max={duration || 0} step="0.1" value={currentTime} onChange={handleSeek} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                    </div>
                    <span className="text-[10px] font-mono text-white/40 w-10">{formatTime(duration)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                     <Volume2 size={16} className="text-white/40" />
                     <div className="relative w-20 h-1 bg-white/10 rounded-full overflow-hidden">
                        <div className="absolute h-full bg-white/60" style={{ width: `${volume * 100}%` }} />
                        <input type="range" min="0" max="1" step="0.01" value={volume} onChange={handleVolume} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                     </div>
                  </div>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="py-40 bg-accent/5 border-y border-white/5 text-center px-6 mb-20 text-white">
         <div className="max-w-2xl mx-auto">
            <Disc className="text-accent mx-auto mb-12 animate-[spin_8s_linear_infinite]" size={80} strokeWidth={0.5} />
            <h2 className="text-5xl font-heading uppercase italic mb-8 font-bold text-white">Join the Pulse</h2>
            <p className="text-white/40 font-light mb-16 text-sm leading-relaxed">Early access to secret session locations and private SoundCloud archives.</p>
            <div className="flex flex-col md:flex-row gap-4 p-2 border border-white/10 bg-black/40">
               <input type="email" placeholder="EMAIL@TRANSMISSION.COM" className="bg-transparent flex-grow px-6 py-4 outline-none text-xs font-mono uppercase tracking-widest text-accent font-bold" />
               <button className="bg-accent text-black px-12 py-4 font-bold uppercase text-[10px] tracking-widest hover:bg-white transition-all">Subscribe</button>
            </div>
         </div>
      </section>
    </motion.div>
  );
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
        <div className="min-h-screen flex flex-col bg-black">
          <div className="grain-overlay" />
          <Navbar />
          <main className="flex-grow overflow-hidden">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/archives" element={<ArchivesPage />} /> 
                <Route path="/tour" element={<SessionsPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/book" element={<BookNowPage />} />
                <Route path="/visuals" element={<VisualsPage />} />
              </Routes>
            </AnimatePresence>
          </main>
          <Footer />
        </div>
      </ReactLenis>
    </Router>
  );
}
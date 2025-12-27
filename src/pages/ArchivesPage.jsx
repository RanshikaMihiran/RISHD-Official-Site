import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Activity, Disc, SkipForward, SkipBack, Volume2, Volume1, VolumeX } from 'lucide-react';

const ArchivesPage = () => {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8); // Default volume 80%
  
  const audioRef = useRef(new Audio());

  // --- DATA ---
  const tracks = [
    { 
      id: 1, 
      title: 'Southern Monsoons', 
      label: 'Anjunadeep', 
      durationStr: '08:14', 
      year: '2024', 
      bpm: '122', 
      key: 'Gm', 
      audioSrc: '/audio/track1.mp3' 
    },
    { 
      id: 2, 
      title: 'Oceanic Whispers', 
      label: 'Sudbeat', 
      durationStr: '07:45', 
      year: '2024', 
      bpm: '124', 
      key: 'Am', 
      audioSrc: '/audio/track1.mp3' 
    },
    { 
      id: 3, 
      title: 'Lighthouse Echoes', 
      label: 'Lost & Found', 
      durationStr: '06:58', 
      year: '2023', 
      bpm: '120', 
      key: 'Dm', 
      audioSrc: '/audio/track1.mp3' 
    },
  ];

  // --- PLAYBACK LOGIC ---
  
  const playTrack = async (track) => {
    const audio = audioRef.current;

    // If changing tracks
    if (currentTrack?.id !== track.id) {
      audio.src = track.audioSrc;
      audio.volume = volume; // Apply current volume
      setCurrentTrack(track);
    }

    // Play
    try {
      await audio.play();
      setIsPlaying(true);
    } catch (err) {
      console.error("Playback error:", err);
      setIsPlaying(false);
    }
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

  // --- SKIP CONTROLS ---

  const handleNext = () => {
    if (!currentTrack) return;
    const currentIndex = tracks.findIndex(t => t.id === currentTrack.id);
    const nextIndex = (currentIndex + 1) % tracks.length;
    playTrack(tracks[nextIndex]);
  };

  const handlePrev = () => {
    if (!currentTrack) return;
    const currentIndex = tracks.findIndex(t => t.id === currentTrack.id);
    const prevIndex = (currentIndex - 1 + tracks.length) % tracks.length;
    playTrack(tracks[prevIndex]);
  };

  // --- PROGRESS & VOLUME LOGIC ---

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
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

  // Helper: Format seconds to MM:SS
  const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  // Helper: Dynamic Volume Icon
  const VolumeIcon = () => {
    if (volume === 0) return <VolumeX size={16} />;
    if (volume < 0.5) return <Volume1 size={16} />;
    return <Volume2 size={16} />;
  };

  // --- EFFECTS ---

  useEffect(() => {
    const audio = audioRef.current;
    
    // Attach listeners
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('ended', handleNext); 

    return () => {
      // Cleanup
      audio.pause();
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('ended', handleNext);
    };
  }, [currentTrack]); 

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-48 pb-40 px-6 md:px-24 min-h-screen relative">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-white/5 pb-10">
          <div>
            <span className="text-accent font-mono text-xs uppercase tracking-[0.5em] mb-4 block">Discography</span>
            <h1 className="text-7xl md:text-9xl font-heading uppercase italic tracking-tighter text-white">Archives</h1>
          </div>
          <div className="text-right">
             <p className="text-xs text-white/30 uppercase tracking-widest mb-1">Total Releases</p>
             <p className="text-xl font-mono text-accent">0{tracks.length}</p>
          </div>
        </div>
        
        {/* TRACK LIST */}
        <div className="grid gap-1">
          <div className="hidden md:grid grid-cols-12 px-8 py-4 text-[10px] uppercase tracking-widest text-white/20 font-bold">
             <div className="col-span-1">#</div>
             <div className="col-span-5">Title</div>
             <div className="col-span-2">Label</div>
             <div className="col-span-2">Specs</div>
             <div className="col-span-2 text-right">Duration</div>
          </div>

          {tracks.map((track, i) => {
            const isActive = currentTrack?.id === track.id;
            return (
              <div 
                key={track.id} 
                onClick={() => handlePlayPause(track)}
                className={`group grid grid-cols-1 md:grid-cols-12 items-center p-6 md:px-8 md:py-6 border-b border-white/5 transition-all cursor-pointer rounded-lg
                  ${isActive ? 'bg-white/[0.03] border-l-2 border-l-accent' : 'hover:bg-white/[0.02] border-l-2 border-l-transparent'}
                `}
              >
                <div className="col-span-1 flex items-center">
                   {isActive && isPlaying ? (
                     <Activity size={16} className="text-accent animate-pulse" />
                   ) : (
                     <span className="text-xs font-mono text-white/20 group-hover:text-white transition-colors">0{i+1}</span>
                   )}
                </div>

                <div className="col-span-5">
                  <h3 className={`text-xl md:text-2xl font-heading uppercase italic tracking-tight transition-colors ${isActive ? 'text-accent' : 'text-white group-hover:text-accent'}`}>
                    {track.title}
                  </h3>
                </div>

                <div className="col-span-2 hidden md:block">
                   <p className="text-[10px] uppercase tracking-widest text-white/40">{track.label}</p>
                </div>

                <div className="col-span-2 hidden md:flex items-center gap-3">
                   <span className="px-2 py-1 border border-white/10 text-[9px] text-white/40 font-mono">{track.bpm} BPM</span>
                   <span className="px-2 py-1 border border-white/10 text-[9px] text-white/40 font-mono">{track.key}</span>
                </div>

                <div className="col-span-2 flex justify-end items-center gap-4">
                  <span className="text-[10px] font-mono text-white/20">{track.durationStr}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all 
                    ${isActive ? 'border-accent bg-accent text-black' : 'border-white/20 text-accent group-hover:border-accent'}`}>
                    {isActive && isPlaying ? <Pause size={12} fill="black" /> : <Play size={12} fill="currentColor" />}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* MODERN FLOATING PLAYER DOCK */}
      <AnimatePresence>
        {currentTrack && (
          <motion.div 
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="fixed bottom-0 left-0 w-full z-50 px-4 pb-4"
          >
            <div className="max-w-screen-xl mx-auto bg-[#0A0A0A]/90 backdrop-blur-2xl border border-white/10 p-4 rounded-xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-4">
               
               {/* Left: Info */}
               <div className="flex items-center gap-4 w-full md:w-1/4">
                  <div className={`w-12 h-12 bg-white/5 rounded-md flex items-center justify-center ${isPlaying ? 'animate-[spin_4s_linear_infinite]' : ''}`}>
                     <Disc size={20} className="text-accent" />
                  </div>
                  <div>
                     <p className="text-[9px] uppercase tracking-widest text-accent mb-1">Now Playing</p>
                     <h4 className="text-white font-heading uppercase text-sm line-clamp-1">{currentTrack.title}</h4>
                  </div>
               </div>

               {/* Center: Controls */}
               <div className="flex items-center justify-center gap-6 w-full md:w-1/4">
                  <button onClick={handlePrev} className="text-white/40 hover:text-white transition-colors">
                     <SkipBack size={20} />
                  </button>
                  <button onClick={() => handlePlayPause(currentTrack)} className="w-12 h-12 bg-accent rounded-full flex items-center justify-center hover:scale-105 transition-transform shadow-[0_0_20px_rgba(212,255,0,0.3)]">
                     {isPlaying ? <Pause size={20} fill="black" /> : <Play size={20} fill="black" className="ml-1" />}
                  </button>
                  <button onClick={handleNext} className="text-white/40 hover:text-white transition-colors">
                     <SkipForward size={20} />
                  </button>
               </div>

               {/* Right: Scrubber & Volume */}
               <div className="flex items-center gap-6 w-full md:w-1/2 justify-end">
                  
                  {/* Scrubber */}
                  <div className="flex items-center gap-3 w-full">
                    <span className="text-[10px] font-mono text-white/40 w-10 text-right">{formatTime(currentTime)}</span>
                    <div className="relative w-full group h-2 flex items-center">
                      <div className="absolute w-full h-1 bg-white/10 rounded-full overflow-hidden">
                         <div className="h-full bg-accent relative" style={{ width: `${(currentTime / duration) * 100}%` }} />
                      </div>
                      <input 
                        type="range" 
                        min="0" 
                        max={duration || 0} 
                        value={currentTime} 
                        onChange={handleSeek}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                    </div>
                    <span className="text-[10px] font-mono text-white/40 w-10">{formatTime(duration)}</span>
                  </div>

                  {/* Volume Slider */}
                  <div className="flex items-center gap-2 min-w-[100px]">
                     <div className="text-white/40">
                       <VolumeIcon />
                     </div>
                     <div className="relative w-20 h-1 bg-white/10 rounded-full">
                        <div className="absolute h-full bg-white/60 rounded-full" style={{ width: `${volume * 100}%` }} />
                        <input 
                          type="range" 
                          min="0" 
                          max="1" 
                          step="0.01" 
                          value={volume} 
                          onChange={handleVolume}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                     </div>
                  </div>

               </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.div>
  );
};

export default ArchivesPage;
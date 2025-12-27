import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Mail, User, MapPin, Send } from 'lucide-react';

const BookNowPage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0 }} 
      className="pt-48 pb-24 px-6 md:px-24 min-h-screen bg-black"
    >
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 text-left">
          <span className="text-accent font-mono text-xs uppercase tracking-[0.5em]">Booking Inquiry</span>
          <h1 className="text-6xl md:text-8xl font-heading uppercase italic tracking-tighter text-white mt-4">
            Secure the <span className="text-accent">Sound</span>
          </h1>
          <p className="text-white/40 mt-6 max-w-xl font-light leading-relaxed">
            For international bookings, festival residencies, and private coastal sessions. Please provide your event specifications below.
          </p>
        </div>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="relative group">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-accent transition-colors" size={18} />
              <input type="text" placeholder="FULL NAME" className="w-full bg-white/5 border border-white/10 p-5 pl-12 outline-none focus:border-accent transition-all text-white text-xs tracking-widest" />
            </div>

            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-accent transition-colors" size={18} />
              <input type="email" placeholder="EMAIL ADDRESS" className="w-full bg-white/5 border border-white/10 p-5 pl-12 outline-none focus:border-accent transition-all text-white text-xs tracking-widest" />
            </div>

            <div className="relative group">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-accent transition-colors" size={18} />
              <input type="text" placeholder="EVENT LOCATION" className="w-full bg-white/5 border border-white/10 p-5 pl-12 outline-none focus:border-accent transition-all text-white text-xs tracking-widest" />
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative group h-full">
              <textarea placeholder="EVENT DETAILS (DATE, VENUE TYPE, CAPACITY)" rows="7" className="w-full h-full bg-white/5 border border-white/10 p-5 outline-none focus:border-accent transition-all text-white text-xs tracking-widest resize-none"></textarea>
            </div>
          </div>

          <div className="md:col-span-2 pt-4">
            <button className="group flex items-center justify-center gap-4 bg-accent text-black w-full py-6 font-black uppercase text-xs tracking-[0.4em] hover:bg-white transition-all">
              Transmit Inquiry <Send size={16} className="group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </form>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 opacity-40">
           <div className="text-left">
              <p className="text-[10px] uppercase tracking-widest font-bold mb-2">Management</p>
              <p className="text-xs">Island Sounds Agency</p>
           </div>
           <div className="text-left">
              <p className="text-[10px] uppercase tracking-widest font-bold mb-2">Technical Rider</p>
              <p className="text-xs">Available on Request</p>
           </div>
           <div className="text-left">
              <p className="text-[10px] uppercase tracking-widest font-bold mb-2">Global Transmissions</p>
              <p className="text-xs">Worldwide Availability</p>
           </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BookNowPage;
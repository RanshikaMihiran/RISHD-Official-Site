import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Globe, ArrowUpRight, Instagram } from 'lucide-react';

const ContactPage = () => {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="pt-48 pb-24 px-6 md:px-24 min-h-screen">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24">
        <div className="text-left">
          <h1 className="text-8xl font-heading uppercase mb-10 leading-none">Inquiries</h1>
          <p className="text-xl text-white/40 font-light mb-16 max-w-md">
            For international bookings, residencies, and creative collaborations. Please include technical requirements for warehouse or outdoor events.
          </p>
          <div className="space-y-12">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-accent mb-4 font-bold">Primary Booking</p>
              <a href="mailto:hello@krishd.com" className="text-3xl md:text-5xl font-heading italic underline decoration-accent underline-offset-8 hover:text-accent transition-all">hello@krishd.com</a>
            </div>
            <div className="flex gap-8 opacity-40">
               <Instagram size={24} className="hover:text-accent cursor-pointer transition-colors" />
               <Mail size={24} className="hover:text-accent cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
        
        <div className="space-y-8">
          <div className="bg-white/[0.02] border border-white/5 p-12 space-y-10 rounded-sm">
            <div className="flex justify-between items-start border-b border-white/5 pb-8">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-white/30 mb-2 font-bold">Management</p>
                <h4 className="text-2xl font-heading uppercase">Island Sounds Agency</h4>
              </div>
              <ArrowUpRight className="text-accent" />
            </div>
            <div className="space-y-4">
              <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Headquarters</p>
              <p className="text-lg font-light leading-relaxed">Port City, Colombo 01, Sri Lanka</p>
            </div>
            <button className="w-full py-5 border border-accent/20 text-accent font-bold uppercase tracking-widest text-[10px] hover:bg-accent hover:text-black transition-all">
              Download Technical Rider
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
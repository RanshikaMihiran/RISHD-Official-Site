import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Calendar } from 'lucide-react';

const SessionsPage = () => {
  // Enhanced data array with internal route links
  const gigs = [
    { 
      date: '28 DEC', 
      venue: "The Doctor's House", 
      city: 'Madiha', 
      status: 'Tickets', 
      time: '17:00 - 22:00',
      link: '/book' 
    },
    { 
      date: '31 DEC', 
      venue: 'Secret Garden', 
      city: 'Hiriketiya', 
      status: 'Sold Out', 
      time: '21:00 - 04:00',
      link: '#' 
    },
    { 
      date: '04 JAN', 
      venue: 'Vibe Academy', 
      city: 'Weligama', 
      status: 'Guestlist', 
      time: '23:00 - LATE',
      link: '/book' 
    },
    { 
      date: '12 JAN', 
      venue: 'Port City', 
      city: 'Colombo', 
      status: 'Private', 
      time: 'Invite Only',
      link: '#' 
    },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="pt-48 pb-24 px-6 md:px-24 min-h-screen bg-black"
    >
      <div className="max-w-7xl mx-auto text-left">
        {/* Page Header */}
        <div className="mb-20 border-b border-white/5 pb-10 flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <span className="text-accent font-mono text-xs uppercase tracking-[0.5em] mb-4 block">Itinerary</span>
            <h1 className="text-7xl md:text-9xl font-heading uppercase italic tracking-tighter text-white">Sessions</h1>
          </div>
          <p className="text-white/30 text-sm max-w-xs font-light italic">
            "Capturing the progressive evolution across the Southern Coast and beyond."
          </p>
        </div>

        {/* Sessions List */}
        <div className="space-y-0 border-t border-white/5">
          {gigs.map((gig, i) => (
            <div 
              key={i} 
              className="group flex flex-wrap md:flex-nowrap items-center justify-between py-14 border-b border-white/5 hover:px-10 transition-all duration-700 bg-transparent hover:bg-white/[0.01]"
            >
               {/* Event Details (Left Side) */}
               <div className="flex items-baseline gap-12">
                  <span className="text-5xl md:text-8xl font-heading text-accent/10 italic group-hover:text-accent transition-colors duration-500 w-24 md:w-40 leading-none">
                    {gig.date.split(' ')[0]}
                    <span className="text-xl md:text-3xl ml-2 uppercase font-bold">{gig.date.split(' ')[1]}</span>
                  </span>
                  
                  <div>
                     <h4 className="text-3xl md:text-5xl font-heading uppercase tracking-tight text-white mb-3 group-hover:italic transition-all">
                       {gig.venue}
                     </h4>
                     <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                        <p className="text-xs text-white/40 uppercase tracking-[0.3em] flex items-center gap-2">
                           <MapPin size={14} className="text-accent" /> {gig.city}, Sri Lanka
                        </p>
                        <p className="text-[11px] text-accent/50 font-mono flex items-center gap-2">
                          <Clock size={14} /> {gig.time}
                        </p>
                     </div>
                  </div>
               </div>

               {/* Interaction Logic (Right Side) */}
               <div className="mt-10 md:mt-0 w-full md:w-auto">
                 {gig.status === 'Sold Out' ? (
                   <span className="px-12 py-5 text-[10px] font-bold uppercase tracking-[0.4em] border border-red-900/50 text-red-500 opacity-50 cursor-not-allowed inline-block w-full md:w-auto text-center">
                     Sold Out
                   </span>
                 ) : gig.status === 'Private' ? (
                   <div className="flex items-center gap-3 text-white/20">
                     <span className="text-[10px] uppercase tracking-[0.4em] italic font-bold">Invite Only</span>
                   </div>
                 ) : (
                   <Link 
                     to={gig.link} 
                     className="px-12 py-5 text-[10px] font-bold uppercase tracking-[0.4em] border border-white/10 hover:border-accent hover:bg-accent hover:text-black transition-all text-white inline-block w-full md:w-auto text-center"
                   >
                     {gig.status === 'Guestlist' ? 'Join List' : 'Get Tickets'}
                   </Link>
                 )}
               </div>
            </div>
          ))}
        </div>

        {/* Technical Rider CTA */}
        <div className="mt-32 p-12 border border-white/5 bg-k-dark/50 flex flex-col md:flex-row justify-between items-center gap-8 rounded-sm">
           <div className="text-center md:text-left">
              <h5 className="text-2xl font-heading uppercase text-white mb-2">Host a Session</h5>
              <p className="text-white/40 text-sm font-light">For technical specifications and international booking inquiries.</p>
           </div>
           <Link to="/book" className="text-accent text-[10px] uppercase tracking-[0.5em] font-bold border-b border-accent pb-2 hover:text-white hover:border-white transition-all">
              Inquire Now
           </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default SessionsPage;
import { Outlet } from '@tanstack/react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export function RootLayout() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 400) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-light text-dark selection:bg-accent selection:text-primary relative">
      {/* Alert Bar */}
      <div className="w-full bg-secondary text-accent text-xs font-bold tracking-[0.2em] uppercase py-2 text-center relative z-[110] border-b border-accent/20 flex justify-center items-center gap-6 hidden md:flex">
        <span>Mon - Sat: 9:30 AM - 6:00 PM</span>
        <span className="w-1 h-1 rounded-full bg-accent"></span>
        <span>+91 9871500770</span>
        <span className="w-1 h-1 rounded-full bg-accent"></span>
        <span>www.shanviglobal.com</span>
      </div>
      
      <Navbar />
      
      <main className="flex-grow">
        <Outlet />
      </main>
      
      <Footer />

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScroll && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-primary text-accent shadow-2xl flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-300 border border-accent/30"
            aria-label="Scroll to top"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

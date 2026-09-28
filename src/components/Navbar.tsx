import { Link } from '@tanstack/react-router';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import s1Logo from '../assets/s1.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/aboutus' },
    { name: 'Services', path: '/ourservices' },
    { name: 'Clients', path: '/clients' },
    { name: 'Career', path: '/career' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav 
      className={`fixed left-0 w-full z-[100] transition-all duration-700 ease-in-out ${
        scrolled 
          ? 'top-0 bg-primary/80 backdrop-blur-xl shadow-[0_10px_40px_rgba(36,16,24,0.5)] py-4 border-b border-accent/20' 
          : 'top-0 md:top-8 bg-transparent py-8'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <Link to="/" className="flex items-center group overflow-hidden h-12 md:h-16 w-[160px] md:w-[200px] relative">
            <img 
              src={s1Logo} 
              alt="Shanvi Global Logo" 
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
            />
          </Link>
          
          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className="relative px-5 py-2 text-light/80 hover:text-light transition-colors text-xs font-bold uppercase tracking-widest group"
                activeProps={{ className: 'text-light' }}
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-accent transition-all duration-500 ease-out group-hover:w-1/2"></span>
              </Link>
            ))}
            <div className="pl-6">
              <Link 
                to="/contact"
                className="relative inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-accent via-[#E2C275] to-accent text-primary font-bold text-xs tracking-widest uppercase overflow-hidden group shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all duration-500"
              >
                <span className="absolute w-full h-full bg-light/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></span>
                <span className="relative z-10">Contact Us</span>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-accent p-2 focus:outline-none" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, clipPath: 'circle(0% at 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at 100% 0)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at 100% 0)' }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="fixed top-0 left-0 w-full h-[100svh] bg-secondary z-[-1] flex flex-col pt-32 pb-10 items-center backdrop-blur-3xl overflow-y-auto"
          >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
            
            <div className="flex flex-col items-center space-y-6 z-10 w-full px-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i + 0.3, duration: 0.5 }}
                >
                  <Link 
                    to={link.path} 
                    onClick={() => setIsOpen(false)}
                    className="text-light hover:text-accent transition-colors text-2xl sm:text-3xl font-serif tracking-widest"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <Link 
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-6 px-10 py-4 bg-accent text-primary font-bold uppercase tracking-widest text-sm shadow-[0_0_30px_rgba(184,154,98,0.3)] text-center w-full max-w-xs"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

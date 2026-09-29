import { Link } from '@tanstack/react-router';
import { Mail, Phone, MapPin, ChevronRight, Briefcase } from 'lucide-react';
import s1Logo from '../assets/ss.jpg';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-primary text-light pt-32 pb-12 z-10 border-t-4 border-accent">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.03]"></div>
        <div className="absolute -top-[30%] -right-[10%] w-[60%] h-[120%] bg-secondary rounded-full blur-[150px] opacity-20"></div>
        <div className="absolute -bottom-[20%] -left-[10%] w-[40%] h-[80%] bg-accent rounded-full blur-[150px] opacity-10"></div>
        {/* Large watermark logo */}
        <div className="absolute -right-20 top-10 text-[30rem] font-serif font-black text-white/[0.02] leading-none select-none">
          SG
        </div>
      </div>
      
      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        
        {/* Top Info Banner */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center p-6 sm:p-10 bg-gradient-to-r from-secondary to-primary border border-accent/20 mb-20 shadow-2xl relative group overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-accent transition-all duration-500 group-hover:w-full group-hover:opacity-10 z-0"></div>
          <div className="relative z-10 lg:w-2/3 mb-6 lg:mb-0">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold mb-2">Ready to transform your workforce?</h3>
            <p className="text-light/60 font-light text-sm sm:text-base">Partner with Delhi & Gurgaon's most trusted executive recruitment firm.</p>
          </div>
          <div className="relative z-10 w-full lg:w-auto">
            <Link to="/contact" className="w-full lg:w-auto inline-flex items-center justify-center px-6 sm:px-10 py-4 bg-accent text-primary font-bold uppercase tracking-widest text-[10px] sm:text-xs hover:bg-accent/90 transition-colors shadow-[0_0_20px_rgba(212,175,55,0.2)]">
              Connect With Us <ChevronRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          <div className="lg:col-span-4 pr-0 lg:pr-10">
            <div className="mb-8 h-16 md:h-24 w-[180px] md:w-[220px] relative">
              <img 
                src={s1Logo} 
                alt="Shanvi Global Logo" 
                className="w-full h-full object-contain object-left"
              />
            </div>
            <p className="text-light/50 leading-relaxed font-light text-sm mb-8">
              Since 2005, we have been connecting exceptional talent with unparalleled opportunities, serving as the most preferred staffing partner for industry leaders across India and globally.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-light hover:bg-accent hover:border-accent hover:text-primary transition-all duration-300">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-8 flex items-center gap-2">
              <div className="w-2 h-[2px] bg-accent"></div> Company
            </h4>
            <ul className="space-y-4 text-light/70 font-light text-sm">
              <li><Link to="/aboutus" className="hover:text-accent hover:translate-x-1 transition-all duration-300 inline-block">About Us</Link></li>
              <li><Link to="/ourservices" className="hover:text-accent hover:translate-x-1 transition-all duration-300 inline-block">Our Services</Link></li>
              <li><Link to="/clients" className="hover:text-accent hover:translate-x-1 transition-all duration-300 inline-block">Clients</Link></li>
              <li><Link to="/contact" className="hover:text-accent hover:translate-x-1 transition-all duration-300 inline-block">Contact</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-8 flex items-center gap-2">
              <div className="w-2 h-[2px] bg-accent"></div> Candidates
            </h4>
            <ul className="space-y-4 text-light/70 font-light text-sm">
              <li><a href="http://careers.shanvistaffing.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent hover:translate-x-1 transition-all duration-300 flex items-center gap-2"><Briefcase size={14}/> Current Jobs</a></li>
              <li><a href="http://careers.shanvistaffing.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent hover:translate-x-1 transition-all duration-300 inline-block">Register Now</a></li>
              <li><a href="http://careers.shanvistaffing.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent hover:translate-x-1 transition-all duration-300 inline-block">Submit Resume</a></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-8 flex items-center gap-2">
              <div className="w-2 h-[2px] bg-accent"></div> Reach Us
            </h4>
            <ul className="space-y-6 text-light/70 font-light text-sm">
              <li className="flex items-start gap-3 group">
                <MapPin size={16} className="text-accent mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span>704, 7th Floor, MG Road, Palm Court<br/>Sector 16, Gurgaon, Haryana, 122007</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone size={16} className="text-accent flex-shrink-0 group-hover:scale-110 transition-transform" />
                <a href="tel:+919871500770" className="hover:text-accent transition-colors whitespace-nowrap">(+91) 9871500770</a>
              </li>
              <li className="flex items-start gap-3 group">
                <Mail size={16} className="text-accent mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <div className="flex flex-col gap-2 w-full overflow-hidden">
                  <a href="mailto:hiring@shanviglobal.com" className="hover:text-accent transition-colors break-all">hiring@shanviglobal.com</a>
                  <a href="mailto:anupama@shanviglobal.com" className="hover:text-accent transition-colors break-all">anupama@shanviglobal.com</a>
                </div>
              </li>
            </ul>
          </div>
          
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[10px] text-light/40 uppercase tracking-[0.2em] gap-4">
          <p className="text-center md:text-left">&copy; {new Date().getFullYear()} Shanvi Global Recruitment Services.</p>
          <p className="flex items-center gap-4">
            <span className="hover:text-light cursor-pointer transition-colors">Privacy Policy</span>
            <span className="w-1 h-1 bg-white/20 rounded-full"></span>
            <span className="hover:text-light cursor-pointer transition-colors">Terms of Service</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

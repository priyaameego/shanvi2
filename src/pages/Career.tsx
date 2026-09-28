import { motion } from 'framer-motion';

export default function Career() {
  return (
    <div className="bg-light min-h-screen">
      {/* Header */}
      <section className="pt-48 pb-32 bg-primary text-light relative overflow-hidden">
        {/* Subtle Image Depth */}
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1600" alt="Career" className="w-full h-full object-cover opacity-10 mix-blend-luminosity" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent" />
        </div>
        
        <div className="container relative z-10 mx-auto px-6 lg:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[2px] w-16 bg-accent"></div>
              <p className="text-accent tracking-[0.3em] uppercase font-bold text-xs">Opportunities</p>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight">
              Career Opportunities
            </h1>
          </motion.div>
        </div>
      </section>
      
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="p-6 md:p-12 bg-white shadow-2xl border-t-4 border-accent relative overflow-hidden">
              <div className="absolute top-0 right-0 text-[6rem] md:text-[10rem] font-serif text-primary/5 leading-none select-none">
                Talent
              </div>
              <h2 className="text-3xl md:text-4xl font-serif text-primary font-bold mb-4 md:mb-6 relative z-10">Job Seekers</h2>
              <p className="text-lg md:text-xl text-dark/70 font-light mb-8 md:mb-12 relative z-10">Access our current job openings, submit your resume, and register with our talent network.</p>
              
              <div className="flex flex-col md:flex-row gap-4 md:gap-6 relative z-10 w-full">
                <a href="http://careers.shanvistaffing.com" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto px-6 md:px-8 py-4 bg-primary text-light text-center font-bold uppercase tracking-widest text-sm hover:bg-accent transition-colors shadow-lg">
                  Current Jobs
                </a>
                <a href="http://careers.shanvistaffing.com" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto px-6 md:px-8 py-4 border border-primary/20 text-primary text-center font-bold uppercase tracking-widest text-sm hover:bg-primary hover:text-light transition-colors">
                  Register Now
                </a>
                <a href="http://careers.shanvistaffing.com" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto px-6 md:px-8 py-4 border border-primary/20 text-primary text-center font-bold uppercase tracking-widest text-sm hover:bg-primary hover:text-light transition-colors">
                  Submit Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import { motion } from 'framer-motion';
import { Users, Briefcase, Search, CheckCircle2, FileText, CheckSquare, MessageSquare, Handshake, TrendingUp, Building2, Zap, HeartPulse, Laptop, ShoppingCart, Video, Pill, Wrench } from 'lucide-react';

export default function Services() {
  const services = [
    { 
      title: 'Recruitment and Staffing', 
      desc: 'Our team of seasoned recruiters specializes in identifying and attracting top-tier talent tailored to the unique needs of our clients. We offer comprehensive recruitment services across various industries, ensuring a perfect fit for each role.',
      icon: <Users size={32} />
    },
    { 
      title: 'Recruitment Process Outsourcing (RPO)', 
      desc: 'Our Recruitment Process Outsourcing (RPO) services redefine the hiring process, optimizing it for efficiency and effectiveness. By partnering with us for your recruitment needs, you gain access to a strategic solution that enhances your workforce management.',
      icon: <Briefcase size={32} />
    },
    { 
      title: 'Executive Search', 
      desc: 'For senior-level positions, our executive search services focus on identifying and recruiting top executives who possess the leadership qualities needed to drive organizational success.',
      icon: <Search size={32} />
    },
    {
      title: 'Background Checks',
      desc: 'Thorough and reliable background verification services to ensure trust and compliance in your workforce. We maintain the highest standards of integrity.',
      icon: <CheckCircle2 size={32} />
    }
  ];

  const processSteps = [
    { title: 'Assignment Understanding', desc: 'Spend time comprehending key assignment pointers independently. Engage in detailed discussions with HR or technical manager if necessary.', icon: <FileText size={28} /> },
    { title: 'Candidate Shortlisting', desc: 'Identify suitable candidates from databank, social platforms, and other sources. Evaluate and shortlist candidates based on qualifications and fit.', icon: <Users size={28} /> },
    { title: 'Profile Discussion', desc: 'Discuss candidate profiles, company details, and pertinent information. Confirm candidate interest in moving forward with the opportunity.', icon: <MessageSquare size={28} /> },
    { title: 'Client Relationship Building', desc: 'Develop a business relationship through effective communication. Share shortlisted and interested candidate profiles with the client.', icon: <Handshake size={28} /> },
    { title: 'Optimizing Offer Acceptance', desc: 'Propose the best-matched resumes, minimizing uncertainties. Foster a productive recruitment process that saves time and energy.', icon: <CheckSquare size={28} /> }
  ];

  const sectors = [
    { name: 'Automobile', icon: <Wrench size={24} /> },
    { name: 'Auto Ancillary', icon: <Wrench size={24} /> },
    { name: 'Power and Energy Sector', icon: <Zap size={24} /> },
    { name: 'Healthcare', icon: <HeartPulse size={24} /> },
    { name: 'IT Sector', icon: <Laptop size={24} /> },
    { name: 'FMCG', icon: <ShoppingCart size={24} /> },
    { name: 'Start-ups', icon: <TrendingUp size={24} /> },
    { name: 'Finance Sector', icon: <Building2 size={24} /> },
    { name: 'Shipping Industry', icon: <Briefcase size={24} /> },
    { name: 'Hospitality Industry', icon: <Building2 size={24} /> },
    { name: 'Retail', icon: <ShoppingCart size={24} /> },
    { name: 'Media Industry', icon: <Video size={24} /> },
    { name: 'Pharmaceuticals', icon: <Pill size={24} /> }
  ];

  return (
    <div className="bg-light min-h-screen overflow-hidden">
      {/* Header */}
      <section className="pt-48 pb-32 bg-primary text-light relative overflow-hidden">
        {/* Subtle Image Depth */}
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1600" alt="Corporate" className="w-full h-full object-cover opacity-10 mix-blend-luminosity" />
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
              <p className="text-accent tracking-[0.3em] uppercase font-bold text-xs">What We Do</p>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight">
              Our Services
            </h1>
          </motion.div>
        </div>
      </section>
      
      {/* Main Services */}
      <section className="py-32 relative z-10 bg-light">
        {/* Decorative 3D Lines */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <motion.div 
            animate={{ rotate: [0, 5, 0], y: [0, -20, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[10%] -left-[10%] w-[120%] h-[1px] bg-accent/20 transform rotate-12"
          />
          <motion.div 
            animate={{ rotate: [0, -5, 0], y: [0, 20, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[40%] -right-[10%] w-[120%] h-[1px] bg-accent/20 transform -rotate-6"
          />
        </div>

        <div className="container relative z-10 mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 40, rotateX: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: "easeOut" }}
                className="group relative p-12 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_rgba(36,16,24,0.15)] transition-all duration-700 overflow-hidden border border-primary/5 hover:border-accent/40"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:bg-primary transition-all duration-700 ease-out z-0" />
                
                <div className="text-6xl font-serif font-bold text-accent/20 mb-8 group-hover:text-accent/10 transition-colors duration-700 relative z-10">
                  0{idx + 1}
                </div>
                
                <div className="w-16 h-16 bg-light border border-accent/30 flex items-center justify-center text-primary mb-8 shadow-inner group-hover:scale-110 group-hover:text-accent transition-all duration-500 relative z-10">
                  {service.icon}
                </div>
                
                <h2 className="text-3xl font-serif text-primary font-bold mb-6 relative z-10">{service.title}</h2>
                <div className="w-12 h-[2px] bg-accent mb-6 group-hover:w-full transition-all duration-700 ease-out relative z-10" />
                
                <p className="text-dark/70 font-light text-lg relative z-10 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Candidate Selection Process */}
      <section className="py-24 bg-primary text-light relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-secondary to-transparent mix-blend-multiply opacity-80" />
        <div className="container relative z-10 mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <p className="text-accent tracking-[0.3em] uppercase font-bold text-xs mb-4">Our Methodology</p>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">Candidate Selection Process</h2>
            <div className="w-16 h-[2px] bg-accent mx-auto" />
          </div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-white/20 -translate-y-1/2 z-0" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {processSteps.map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="relative z-10 flex flex-col items-center text-center group"
                >
                  <div className="w-24 h-24 rounded-full bg-secondary border border-accent/30 flex items-center justify-center text-accent mb-6 shadow-2xl group-hover:scale-110 group-hover:bg-accent group-hover:text-primary transition-all duration-500 relative">
                    <div className="absolute inset-0 rounded-full border border-accent/10 scale-110 group-hover:scale-125 transition-transform duration-700 opacity-0 group-hover:opacity-100" />
                    {step.icon}
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-light mb-4 min-h-[40px] flex items-center justify-center">{step.title}</h3>
                  <p className="text-xs text-light/60 font-light leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Sectors */}
      <section className="py-24 bg-light relative">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-6">Specialized Sectors</h2>
            <p className="text-lg text-dark/70 font-light leading-relaxed">
              At Shanvi, our versatility extends across a myriad of sectors and industries, showcasing our ability to navigate diverse landscapes and deliver exceptional results. Our specialized expertise encompasses, but is not limited to:
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 mb-16">
            {sectors.map((sector, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="flex flex-col md:flex-row items-center justify-center md:justify-start text-center md:text-left gap-3 md:gap-4 p-4 md:p-6 bg-white border border-primary/10 hover:border-accent hover:shadow-xl transition-all duration-300 group cursor-default"
              >
                <div className="text-accent flex-shrink-0 group-hover:scale-110 transition-transform duration-300">{sector.icon}</div>
                <span className="font-serif font-bold text-sm md:text-base text-primary group-hover:text-accent transition-colors break-words w-full">{sector.name}</span>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center p-8 bg-secondary/5 border-l-4 border-accent"
          >
            <p className="text-dark/70 font-light leading-relaxed italic">
              "Sectoral boundaries do not confine us; rather, they inspire us to delve into the intricacies of any industry we undertake. When we embark on an assignment, regardless of the sector, we meticulously understand its nuances, allowing us to source candidates strategically and effectively. Trust Shanvi for a comprehensive and tailored approach to recruitment across a spectrum of industries."
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

import { motion } from 'framer-motion';
import { Building2, ShieldCheck, Handshake, Target, ArrowRight } from 'lucide-react';
import { Link } from '@tanstack/react-router';
import { useState } from 'react';

export default function Clients() {
  const [activeFilter, setActiveFilter] = useState('all');

  const benefits = [
    { title: 'Strategic Partnerships', desc: 'Our client relationships extend beyond mere transactions; they are built on trust, transparency, and a shared commitment to success.', icon: <Handshake size={32} /> },
    { title: 'Confidentiality & Trust', desc: 'Professionalism and a personalized approach define our interactions, ensuring your requirements are met with utmost discretion.', icon: <ShieldCheck size={32} /> },
    { title: 'Tailored Excellence', desc: 'We ensure that each client\'s unique requirements are not just met but exceeded through our customized recruitment strategies.', icon: <Target size={32} /> },
    { title: 'Industry Leaders', desc: 'We take pride in our rich tapestry of clientele, encompassing a diverse array of industry leaders and innovative enterprises.', icon: <Building2 size={32} /> }
  ];

  const categories = [
    { id: 'all', label: 'ALL' },
    { id: 'manufacturing', label: 'MANUFACTURING' },
    { id: 'pharma-hospitality', label: 'PHARMA/HOSPITALITY' },
    { id: 'fmcg', label: 'FMCG' },
    { id: 'oil-gas', label: 'OIL & GAS, POWER' },
    { id: 'infrastructure', label: 'INFRASTRUCTURE' }
  ];

  const gallery = [
    { id: 1, title: 'Client 1', categories: ['manufacturing', 'pharma-hospitality'], img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800' },
    { id: 2, title: 'Client 2', categories: ['fmcg', 'oil-gas'], img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800' },
    { id: 3, title: 'Client 3', categories: ['infrastructure', 'manufacturing'], img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800' },
    { id: 4, title: 'Client 4', categories: ['pharma-hospitality', 'fmcg'], img: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=800' },
    { id: 5, title: 'Client 5', categories: ['fmcg'], img: 'https://images.unsplash.com/photo-1512314889357-e157c22f938d?auto=format&fit=crop&q=80&w=800' },
    { id: 6, title: 'Client 6', categories: ['manufacturing', 'pharma-hospitality'], img: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800' }
  ];

  const filteredGallery = activeFilter === 'all' 
    ? gallery 
    : gallery.filter(item => item.categories.includes(activeFilter));

  return (
    <div className="bg-light min-h-screen overflow-hidden">
      {/* Header */}
      <section className="pt-48 pb-32 bg-primary text-light relative overflow-hidden">
        {/* Subtle Image Depth */}
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1600" alt="Clients" className="w-full h-full object-cover opacity-10 mix-blend-luminosity" />
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
              <p className="text-accent tracking-[0.3em] uppercase font-bold text-xs">Our Partners</p>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight">
              Clients
            </h1>
          </motion.div>
        </div>
      </section>
      
      {/* Introduction from PDF */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl space-y-8">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="text-4xl font-serif font-bold text-primary mb-8 leading-tight"
            >
              Trusted by Industry Leaders & <br/>
              <span className="italic text-accent">Innovative Enterprises</span>
            </motion.h2>
            
            <div className="space-y-6 text-xl text-dark/80 font-light leading-relaxed border-l-2 border-accent/30 pl-8">
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                At Shanvi Global Recruitment Services, we take pride in our rich tapestry of clientele, encompassing a diverse array of industry leaders and innovative enterprises. Our commitment to excellence is reflected in the meaningful partnerships we have cultivated with esteemed organizations, contributing to their success and growth.
              </motion.p>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                Our client relationships extend beyond mere transactions; they are strategic partnerships built on trust, transparency, and a shared commitment to success. Confidentiality, professionalism, and a personalized approach define our interactions, ensuring that each client's unique requirements are not just met but exceeded.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Gallery (Cloned from Old Website) */}
      <section className="py-24 bg-white relative z-10 border-y border-primary/5">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-6">Valuable clients to whom we are serving -</h2>
            <div className="w-16 h-[2px] bg-accent mx-auto mb-10" />
            
            <p className="text-dark/70 font-light mb-2">We serve to most of reputed organizations among the industry.</p>
            <p className="text-dark/70 font-light mb-12">Following are some of our clients who are very satisfied with our different services -</p>
            
            {/* Gallery Filters */}
            <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 mb-12">
              {categories.map((category, index) => (
                <div key={category.id} className="flex items-center">
                  <button
                    onClick={() => setActiveFilter(category.id)}
                    className={`px-4 py-2 text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                      activeFilter === category.id 
                        ? 'bg-primary text-accent shadow-lg scale-105' 
                        : 'text-dark/50 hover:text-primary'
                    }`}
                  >
                    {category.label}
                  </button>
                  {index < categories.length - 1 && (
                    <span className="text-dark/20 ml-2 md:ml-4">/</span>
                  )}
                </div>
              ))}
            </div>
            
            {/* Gallery Grid */}
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredGallery.map((item) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  key={item.id}
                  className="group relative overflow-hidden aspect-[4/3] border border-primary/10 shadow-sm hover:shadow-2xl cursor-pointer"
                >
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center">
                    <h5 className="text-2xl font-serif font-bold text-light mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {item.title}
                    </h5>
                    <div className="w-8 h-[2px] bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Client Benefits Grid */}
      <section className="py-24 bg-primary text-light relative overflow-hidden">
        {/* 3D Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute -top-[20%] -right-[10%] w-[60vw] h-[60vw] rounded-full border-[1px] border-accent/10 opacity-30 blur-sm"
          />
        </div>

        <div className="container relative z-10 mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {benefits.map((benefit, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 40, rotateX: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: "easeOut" }}
                className="group relative p-10 bg-secondary/80 backdrop-blur-md border border-white/5 hover:border-accent/40 transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700 ease-out z-0" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-primary border border-accent/20 flex items-center justify-center text-accent mb-8 shadow-inner group-hover:scale-110 group-hover:bg-accent group-hover:text-primary transition-all duration-500">
                    {benefit.icon}
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-light mb-4">{benefit.title}</h3>
                  <div className="w-12 h-[1px] bg-accent group-hover:w-full transition-all duration-700 ease-out mb-6" />
                  <p className="text-light/60 font-light leading-relaxed">{benefit.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-light relative z-10 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto p-12 md:p-20 border border-accent/20 bg-accent/5 shadow-2xl relative"
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-8 leading-tight">
              Join Our List of <br/><span className="italic text-accent">Satisfied Clients</span>
            </h2>
            <p className="text-lg text-dark/70 font-light max-w-2xl mx-auto mb-12">
              As we continue to evolve and expand our horizons, we look forward to adding your esteemed organization to our list of satisfied clients, contributing to your success in the ever-dynamic business landscape. Join us at Shanvi Global Recruitment Services, where excellence meets collaboration, and success knows no bounds.
            </p>
            
            <Link to="/contact" className="inline-flex items-center gap-4 px-10 py-5 bg-primary text-light font-bold uppercase tracking-widest text-sm hover:bg-accent hover:text-primary transition-all duration-500 shadow-xl group">
              Partner With Us
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

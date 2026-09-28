import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Briefcase, Building, Users, CheckCircle2, ChevronRight, Search, User, Building2 } from 'lucide-react';
import { Link } from '@tanstack/react-router';
import { useRef, useState, useEffect } from 'react';

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1600",
    "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1600",
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1600",
    "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit=crop&q=80&w=1600"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const toggleAccordion = (idx: number) => {
    setActiveAccordion(activeAccordion === idx ? null : idx);
  };

  const assignments = [
    { title: "Finance Manager for FMCG Company", desc: "Successfully sourced and placed a high-performing Finance Manager with deep industry expertise for a leading FMCG brand, ensuring seamless financial operations and strategic planning." },
    { title: "Regional Head for Retail industry at Delhi", desc: "Recruited a visionary Regional Head capable of driving sales, expanding market presence, and managing large-scale retail operations across the Delhi/NCR region." },
    { title: "Head HR for Finance Industry at Ghaziabad.", desc: "Placed an experienced HR Head to oversee talent acquisition, employee engagement, and organizational development for a rapidly growing financial services firm." },
    { title: "Account Manager for Manufacturing company", desc: "Identified and onboarded a skilled Account Manager with a strong technical background to manage key B2B relationships and drive revenue for a top manufacturing company." }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, rotateX: 10 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0,
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  return (
    <div className="bg-light min-h-screen overflow-x-hidden">
      
      {/* 3D Decorative Floating Elements Base */}
      <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
        <motion.div 
          animate={{ rotate: 360, y: [0, -30, 0] }} 
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -right-[10%] w-[50vw] h-[50vw] rounded-full border-[1px] border-accent/10 opacity-30 blur-sm"
        />
        <motion.div 
          animate={{ rotate: -360, y: [0, 30, 0] }} 
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] -left-[20%] w-[60vw] h-[60vw] rounded-full border-[1px] border-primary/5 opacity-40 blur-md"
        />
      </div>

      {/* 1. FULLSCREEN CINEMATIC HERO */}
      <section ref={heroRef} className="relative min-h-[100svh] w-full flex items-center justify-center overflow-hidden z-10 perspective-1000 pt-32 pb-24">
        <motion.div style={{ y: yBg }} className="absolute inset-0 z-0 bg-primary">
          <div className="absolute inset-0 bg-primary/60 mix-blend-multiply z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-transparent to-transparent z-10" />
          
          <AnimatePresence initial={false}>
            <motion.img 
              key={currentSlide}
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: 1, scale: 1.15 }}
              exit={{ opacity: 0 }}
              transition={{ 
                opacity: { duration: 1.5, ease: "easeInOut" },
                scale: { duration: 6, ease: "linear" } 
              }}
              src={heroImages[currentSlide]} 
              alt="Executive Leadership" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>
        </motion.div>
        
        <motion.div style={{ opacity: opacityText }} className="container relative z-20 mx-auto px-6 lg:px-12 mt-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-4xl"
          >
            <motion.div variants={itemVariants} className="flex items-center gap-4 mb-6">
              <div className="h-[2px] w-16 bg-gradient-to-r from-accent to-transparent"></div>
              <p className="text-accent tracking-[0.3em] uppercase font-bold text-xs drop-shadow-md">BEST RECRUITMENT CONSULTING</p>
            </motion.div>
            
            <motion.div className="overflow-hidden mb-6 py-2">
              <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-light leading-[1.1] drop-shadow-2xl break-words">
                We Create The <br />
                <span className="relative inline-block">
                  <span className="relative z-10 italic text-transparent bg-clip-text bg-gradient-to-r from-accent via-[#F4E3C5] to-accent">Opportunities</span>
                  <motion.span 
                    initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
                    className="absolute bottom-1 left-0 w-full h-[1px] bg-accent/50 origin-left"
                  ></motion.span>
                </span>
              </motion.h1>
            </motion.div>
            
            <motion.div variants={itemVariants} className="text-lg md:text-xl text-light/90 mb-12 max-w-3xl font-light tracking-wide leading-relaxed space-y-4">
              <p>Over the last 8 years we have partnered with some of the leading names in the industry in their growth and success, from large diversified Indian groups to MNCs and SMEs.</p>
              <p>Seasoned recruiters now focusing on Recruitment Research. We can do research + full cycle recruitment i.e. from Research to Recruitment to On Boarding</p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex flex-wrap gap-6 items-center">
              <Link to="/aboutus" className="px-10 py-4 bg-accent text-primary hover:bg-[#D4C39B] transition-all duration-500 uppercase tracking-widest text-xs font-bold shadow-[0_0_20px_rgba(184,154,98,0.1)] hover:shadow-[0_0_30px_rgba(184,154,98,0.4)] backdrop-blur-sm">
                Read More
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="absolute bottom-6 right-6 lg:bottom-12 lg:right-12 z-20 flex flex-col items-center gap-4 hidden md:flex"
        >
          <span className="text-light/50 uppercase tracking-widest text-[0.6rem] rotate-90 origin-bottom whitespace-nowrap mb-8" style={{ transform: 'translateX(2px) rotate(90deg)' }}>Scroll Down</span>
          <div className="w-[1px] h-20 bg-white/20 relative overflow-hidden mt-4">
            <motion.div 
              animate={{ y: [0, 80] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-accent to-transparent"
            />
          </div>
        </motion.div>
      </section>

      {/* 2. SERVICES (Subtle 3D Floating) */}
      <section className="py-32 bg-primary relative z-10 perspective-1000">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.03]"></div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-24 text-center lg:text-left">
            <div className="lg:w-1/2">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                className="text-5xl lg:text-6xl font-serif text-light font-bold leading-tight"
              >
                OUR SERVICES
              </motion.h2>
            </div>
            <div className="lg:w-1/2 flex items-end">
              <motion.div 
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                className="text-lg text-light/70 font-light leading-relaxed border-l-2 border-accent/30 pl-8 space-y-2 text-left"
              >
                <p>From our experience we have learned that every company has its own culture, values and expectations of its employees.</p>
                <p>Our workforce spread over India has one mission to fulfill, to find the right people to meet our clients' specific requirements.</p>
              </motion.div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Recruitment Services', icon: <Users size={28} /> },
              { title: 'Background Checks', icon: <CheckCircle2 size={28} /> },
              { title: 'RPO Outsourcing', icon: <Briefcase size={28} /> },
              { title: 'Staffing Services', icon: <Search size={28} /> }
            ].map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40, rotateX: 10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                className="group relative p-10 bg-secondary/80 backdrop-blur-md border border-white/5 hover:border-accent/40 transition-all duration-700 hover:-translate-y-4 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700 ease-out z-0"></div>
                
                <div className="relative z-10">
                  <div className="text-6xl font-serif text-white/5 mb-8 group-hover:text-accent/20 transition-colors duration-700">0{index + 1}</div>
                  <div className="w-14 h-14 bg-primary border border-accent/20 flex items-center justify-center text-accent mb-8 shadow-inner group-hover:scale-110 transition-transform duration-500">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-light mb-4">{service.title}</h3>
                  <div className="w-0 h-[1px] bg-accent group-hover:w-full transition-all duration-700 ease-out mb-6"></div>
                  <Link to="/ourservices" className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-light/50 group-hover:text-accent transition-colors">
                    Explore <ChevronRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-500" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 2.5 WHY CHOOSE US (New from USPs) */}
      <section className="py-24 bg-light relative z-10 border-b border-primary/5">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <p className="text-accent tracking-[0.3em] uppercase font-bold text-xs mb-4">The Shanvi Advantage</p>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-6">Why Choose Shanvi Global?</h2>
            <div className="w-16 h-[2px] bg-accent mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Expertise', desc: 'Our team comprises industry specialists with a profound understanding of market trends and client needs.', icon: <CheckCircle2 size={32} /> },
              { title: 'Personalized Service', desc: 'We tailor our services to meet the unique requirements of each client, ensuring a customized approach.', icon: <Briefcase size={32} /> },
              { title: 'Global Reach', desc: 'With a vast network and international partnerships, we source talent locally & globally to meet diverse business needs.', icon: <Users size={32} /> },
              { title: 'Technology-Driven', desc: 'Leveraging cutting-edge technology, our processes are streamlined for efficient and effective staffing solutions.', icon: <Building size={32} /> }
            ].map((reason, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group p-8 bg-white border border-primary/5 hover:border-accent/30 hover:shadow-2xl transition-all duration-500 perspective-1000"
              >
                <div className="w-16 h-16 bg-primary/5 border border-accent/20 flex items-center justify-center text-accent rounded-sm mb-6 group-hover:scale-110 group-hover:bg-primary transition-all duration-500">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-serif font-bold text-primary mb-4 group-hover:text-accent transition-colors">{reason.title}</h3>
                <p className="text-sm text-dark/70 font-light leading-relaxed">{reason.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ORGANIZATION / PROCESS */}
      <section className="py-32 bg-light relative z-10">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-8"
            >
              OUR ORGANIZATION
            </motion.h2>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto text-lg text-dark/70 font-light leading-relaxed space-y-4">
              <p>Established in 2003 as Shanvi Staffing & Training Services, has earn vast experience in recruitment sector. We have experties to fulfill our clients requirements easily. Shanvi Staffing is now most preferred recruitment and staffing service provider among our clients.</p>
              <p>We have recruitment experience across industries like Automobiles, Hospitality, Engineering, FMCG, Oil & Gas, Power & Infrastructures.</p>
            </motion.div>
          </div>

          <div className="flex flex-col lg:flex-row gap-20">
            <div className="lg:w-6/12 flex flex-col justify-center">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h3 className="text-3xl font-serif text-primary font-bold mb-6">
                  Top reasons To Prefer our Services
                </h3>
                <p className="text-dark/70 font-light leading-relaxed mb-10">
                  We have well-demonstrated track record of delivering high-value, low-cost outsourcing process solutions that can highly benefit your business. The specialty of our services is that the solutions delivered by us convert into long term strategic advantages for our clients, and the live testimonials speak of the quality of our deliverables. We have dedicated, experienced recruiter team who work hard towards providing you the best resources for your company.
                </p>
              </motion.div>
              
              <div className="space-y-4 mb-10">
                {[
                  "10+ Years Experience in Recruitment",
                  "4,00,000+ Active Candidate Database from our region",
                  "Effective, Efficient & Result Oriented Recruitment Process",
                  "Ethical, Responsible & Thoughtful Approach",
                  "Provide Key Support to the Line Manager on Recruitment."
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * idx }}
                    className="flex items-start gap-4"
                  >
                    <ChevronRight className="text-accent mt-1 flex-shrink-0" size={18} />
                    <span className="text-dark/80">{item}</span>
                  </motion.div>
                ))}
              </div>
              
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <Link to="/aboutus" className="inline-block px-10 py-4 bg-accent text-primary hover:bg-[#D4C39B] transition-colors font-bold uppercase tracking-widest text-xs">
                  Learn More
                </Link>
              </motion.div>
            </div>

            <div className="lg:w-6/12 relative perspective-1000">
              <motion.div 
                initial={{ opacity: 0, rotateY: 10, x: 30 }}
                whileInView={{ opacity: 1, rotateY: 0, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative z-10 shadow-2xl h-full min-h-[400px]"
              >
                <img 
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800" 
                  alt="Organization Process" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. LATEST ASSIGNMENTS & TESTIMONIALS */}
      <section className="py-32 bg-secondary text-light relative z-10 border-t border-white/5">
        <div className="container mx-auto px-6 lg:px-12">
          
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            
            {/* Assignments Accordion */}
            <div className="lg:w-7/12">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="text-4xl font-serif font-bold mb-10 text-light"
              >
                Latest Completed Assignments
              </motion.h2>

              <div className="space-y-4">
                {assignments.map((assignment, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.15 }}
                    className="group"
                  >
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-accent/40 rounded-sm shadow-sm hover:shadow-[0_10px_30px_rgba(198,161,91,0.15)] transition-all duration-500 overflow-hidden">
                      <button 
                        onClick={() => toggleAccordion(idx)}
                        className="w-full flex items-center justify-between py-5 px-6 sm:px-8 hover:bg-white/5 transition-colors text-left focus:outline-none relative"
                      >
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
                        <div className="flex items-center gap-4 sm:gap-6 w-full">
                          <span className="text-accent/50 font-serif text-lg md:text-xl font-bold group-hover:text-accent transition-colors">0{idx + 1}</span>
                          <h3 className="text-base sm:text-lg lg:text-xl font-serif font-bold text-light group-hover:text-accent transition-colors flex-1">{assignment.title}</h3>
                          <ChevronRight 
                            size={20} 
                            className={`text-accent/70 flex-shrink-0 transition-transform duration-500 group-hover:text-accent ${activeAccordion === idx ? 'rotate-90' : ''}`} 
                          />
                        </div>
                      </button>
                      <AnimatePresence>
                        {activeAccordion === idx && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="overflow-hidden bg-primary/20"
                          >
                            <div className="px-6 pb-6 sm:px-8 sm:pb-8 pl-[4.5rem] sm:pl-20 text-light/70 font-light text-sm sm:text-base leading-relaxed border-t border-white/5 pt-4 mt-2">
                              {assignment.desc}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Testimonials */}
            <div className="lg:w-5/12">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="text-4xl font-serif font-bold mb-10 text-light"
              >
                Testimonials
              </motion.h2>

              <div className="space-y-12">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="relative"
                >
                  <div className="absolute -top-8 -left-4 text-8xl text-accent/20 font-serif leading-none select-none z-0">"</div>
                  <div className="bg-white/5 backdrop-blur-md border border-white/10 text-light p-8 font-serif leading-relaxed text-base rounded-sm mb-6 relative shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_50px_rgba(198,161,91,0.15)] transition-shadow duration-500 z-10 group">
                    <p className="relative z-10 text-light/90 italic font-light group-hover:text-light transition-colors">
                      Shanvi Global has been instrumental in fulfilling our critical talent needs. Their team's professionalism and rapid turnaround time have made them an invaluable partner.
                    </p>
                    <div className="absolute -bottom-4 right-10 w-0 h-0 border-l-[15px] border-l-transparent border-t-[20px] border-t-white/5 border-r-[15px] border-r-transparent group-hover:border-t-white/10 transition-colors duration-500"></div>
                  </div>
                  
                  <div className="flex items-center gap-5 pl-6 relative z-10">
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-accent shadow-[0_0_15px_rgba(198,161,91,0.3)]">
                      <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400" alt="Marc Cooper" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-accent font-serif tracking-wide">Marc Cooper</h4>
                      <p className="text-light/50 text-xs tracking-widest uppercase mt-1">Technical Director</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  className="relative"
                >
                  <div className="absolute -top-8 -left-4 text-8xl text-accent/20 font-serif leading-none select-none z-0">"</div>
                  <div className="bg-white/5 backdrop-blur-md border border-white/10 text-light p-8 font-serif leading-relaxed text-base rounded-sm mb-6 relative shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_50px_rgba(198,161,91,0.15)] transition-shadow duration-500 z-10 group">
                    <p className="relative z-10 text-light/90 italic font-light group-hover:text-light transition-colors">
                      The candidates provided were exceptional. Shanvi Global truly understands the tech landscape and connected us with top-tier programming talent seamlessly.
                    </p>
                    <div className="absolute -bottom-4 right-10 w-0 h-0 border-l-[15px] border-l-transparent border-t-[20px] border-t-white/5 border-r-[15px] border-r-transparent group-hover:border-t-white/10 transition-colors duration-500"></div>
                  </div>
                  
                  <div className="flex items-center gap-5 pl-6 relative z-10">
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-accent shadow-[0_0_15px_rgba(198,161,91,0.3)]">
                      <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" alt="Jennifer" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-accent font-serif tracking-wide">Jennifer</h4>
                      <p className="text-light/50 text-xs tracking-widest uppercase mt-1">Programmer</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. JOB SEEKERS / CLIENTS */}
      <section className="py-24 bg-[#EAEAEA] relative z-10 overflow-hidden border-y border-dark/10">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Job Seekers */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-primary text-center p-8 sm:p-12 lg:p-16 relative shadow-[0_20px_50px_rgba(0,0,0,0.15)] group hover:-translate-y-2 transition-transform duration-500 mt-10 md:mt-0"
            >
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-white shadow-xl flex items-center justify-center transform rotate-45 group-hover:rotate-0 transition-transform duration-500">
                <div className="transform -rotate-45 group-hover:rotate-0 transition-transform duration-500 text-primary">
                  <User size={32} />
                </div>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-light mt-8 mb-6">Job Seekers</h2>
              <p className="text-light/80 mb-10 font-light">Grow your career with us. Our experts helps you.</p>
              
              <div className="flex flex-col xl:flex-row justify-center items-center gap-4 w-full">
                <a href="http://careers.shanvistaffing.com/jobseeker/currentjobs" target="_blank" rel="noopener noreferrer" className="w-full xl:w-auto px-6 sm:px-8 py-4 bg-accent text-primary font-bold uppercase tracking-widest text-[10px] sm:text-xs hover:bg-[#D4C39B] transition-colors whitespace-nowrap">
                  Current Jobs
                </a>
                <a href="http://careers.shanvistaffing.com/jobseeker/register" target="_blank" rel="noopener noreferrer" className="w-full xl:w-auto px-6 sm:px-8 py-4 bg-accent text-primary font-bold uppercase tracking-widest text-[10px] sm:text-xs hover:bg-[#D4C39B] transition-colors whitespace-nowrap">
                  Register Now
                </a>
              </div>
            </motion.div>

            {/* Clients */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-primary text-center p-8 sm:p-12 lg:p-16 relative shadow-[0_20px_50px_rgba(0,0,0,0.15)] group hover:-translate-y-2 transition-transform duration-500 mt-10 md:mt-0"
            >
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-white shadow-xl flex items-center justify-center transform rotate-45 group-hover:rotate-0 transition-transform duration-500">
                <div className="transform -rotate-45 group-hover:rotate-0 transition-transform duration-500 text-primary">
                  <Building2 size={32} />
                </div>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-light mt-8 mb-6">Clients</h2>
              <p className="text-light/80 mb-10 font-light px-2">Inquire about our professional services & discuss what you require.</p>
              
              <div className="flex flex-col xl:flex-row justify-center items-center gap-4 w-full">
                <Link to="/ourservices" className="w-full xl:w-auto px-6 sm:px-8 py-4 bg-accent text-primary font-bold uppercase tracking-widest text-[10px] sm:text-xs hover:bg-[#D4C39B] transition-colors whitespace-nowrap">
                  Services
                </Link>
                <Link to="/contact" className="w-full xl:w-auto px-6 sm:px-8 py-4 bg-accent text-primary font-bold uppercase tracking-widest text-[10px] sm:text-xs hover:bg-[#D4C39B] transition-colors whitespace-nowrap">
                  Contact Us
                </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}

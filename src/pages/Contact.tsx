import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Globe, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="bg-light min-h-screen overflow-hidden">
      {/* Header */}
      <section className="pt-48 pb-32 bg-primary text-light relative overflow-hidden">
        {/* Subtle Image Depth */}
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1600" alt="Contact" className="w-full h-full object-cover opacity-10 mix-blend-luminosity" />
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
              <p className="text-accent tracking-[0.3em] uppercase font-bold text-xs">Get In Touch</p>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight">
              Contact Information
            </h1>
          </motion.div>
        </div>
      </section>
      
      {/* Content */}
      <section className="py-24 lg:py-32 relative z-10">
        <div className="absolute inset-0 bg-white"></div>
        <div className="container relative z-10 mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            
            {/* Contact Details Side */}
            <div className="w-full lg:w-5/12 space-y-12">
              <motion.div 
                initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                className="space-y-10"
              >
                <div>
                  <h3 className="text-4xl font-serif font-bold text-primary mb-6">Reach Out To Us</h3>
                  <div className="w-12 h-1 bg-accent mb-6" />
                  <p className="text-dark/70 font-light text-lg mb-12 leading-relaxed">
                    We are always available to discuss your recruitment needs or career aspirations. Connect with us through any of the channels below.
                  </p>
                </div>

                <div className="space-y-8">
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="flex gap-6 items-start group bg-light p-6 border border-primary/5 shadow-sm hover:shadow-[0_15px_30px_rgba(198,161,91,0.15)] transition-all duration-300 rounded-sm relative overflow-hidden"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
                    <div className="w-14 h-14 rounded-full bg-white border border-accent/30 flex items-center justify-center text-accent group-hover:bg-primary group-hover:text-accent transition-colors flex-shrink-0 shadow-sm relative z-10">
                      <Phone size={24} />
                    </div>
                    <div className="relative z-10">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-dark/50 mb-2">Contact Number</h4>
                      <p className="text-primary font-bold text-xl group-hover:text-accent transition-colors">+91 - 9871500770</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="flex gap-6 items-start group bg-light p-6 border border-primary/5 shadow-sm hover:shadow-[0_15px_30px_rgba(198,161,91,0.15)] transition-all duration-300 rounded-sm relative overflow-hidden"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
                    <div className="w-14 h-14 rounded-full bg-white border border-accent/30 flex items-center justify-center text-accent group-hover:bg-primary group-hover:text-accent transition-colors flex-shrink-0 shadow-sm relative z-10">
                      <Globe size={24} />
                    </div>
                    <div className="relative z-10">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-dark/50 mb-2">Website</h4>
                      <a href="https://www.shanviglobal.com" className="text-primary font-bold text-xl hover:text-accent transition-colors break-all">www.shanviglobal.com</a>
                    </div>
                  </motion.div>

                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="flex gap-6 items-start group bg-light p-6 border border-primary/5 shadow-sm hover:shadow-[0_15px_30px_rgba(198,161,91,0.15)] transition-all duration-300 rounded-sm relative overflow-hidden"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
                    <div className="w-14 h-14 rounded-full bg-white border border-accent/30 flex items-center justify-center text-accent group-hover:bg-primary group-hover:text-accent transition-colors flex-shrink-0 shadow-sm relative z-10">
                      <Mail size={24} />
                    </div>
                    <div className="w-full overflow-hidden relative z-10">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-dark/50 mb-2">Email Address</h4>
                      <div className="space-y-3 mt-3">
                        <a href="mailto:hiring@shanviglobal.com" className="flex items-center gap-2 text-primary font-bold text-lg hover:text-accent transition-colors break-all">
                          <div className="w-2 h-2 rounded-full bg-accent/50" />
                          hiring@shanviglobal.com
                        </a>
                        <a href="mailto:anupama@shanviglobal.com" className="flex items-center gap-2 text-primary font-bold text-lg hover:text-accent transition-colors break-all">
                          <div className="w-2 h-2 rounded-full bg-accent/50" />
                          anupama@shanviglobal.com
                        </a>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="flex gap-6 items-start group bg-light p-6 border border-primary/5 shadow-sm hover:shadow-[0_15px_30px_rgba(198,161,91,0.15)] transition-all duration-300 rounded-sm relative overflow-hidden"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
                    <div className="w-14 h-14 rounded-full bg-white border border-accent/30 flex items-center justify-center text-accent group-hover:bg-primary group-hover:text-accent transition-colors flex-shrink-0 shadow-sm relative z-10">
                      <MapPin size={24} />
                    </div>
                    <div className="relative z-10">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-dark/50 mb-4">Address</h4>
                      <div className="space-y-6">
                        <div className="bg-white p-4 border border-primary/5 rounded-sm">
                          <p className="text-primary font-bold text-sm mb-2 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent block" /> Gurgaon Office
                          </p>
                          <p className="text-dark/70 font-light text-sm">704, 7th Floor, MG Road, Palm Court<br/>Sector 16, Gurgaon, Haryana, 122007</p>
                        </div>
                        <div className="bg-white p-4 border border-primary/5 rounded-sm">
                          <p className="text-primary font-bold text-sm mb-2 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent block" /> Kolkata Office
                          </p>
                          <p className="text-dark/70 font-light text-sm">301-B, Shanvi House, Genexx Valley,<br/>Joka, Kolkata, WB, 702301</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Contact Form Side */}
            <div className="w-full lg:w-7/12 perspective-1000">
              <motion.div 
                initial={{ opacity: 0, rotateY: 10, x: 30 }} 
                whileInView={{ opacity: 1, rotateY: 0, x: 0 }} 
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="bg-primary text-light p-10 sm:p-14 lg:p-16 shadow-[0_30px_60px_rgba(0,0,0,0.3)] relative overflow-hidden rounded-sm"
              >
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
                <div className="absolute top-0 right-0 w-2 h-48 bg-accent shadow-[0_0_15px_rgba(198,161,91,0.5)]" />
                <div className="absolute bottom-0 left-0 w-48 h-2 bg-accent shadow-[0_0_15px_rgba(198,161,91,0.5)]" />
                
                <h2 className="text-4xl font-serif font-bold mb-10 relative z-10 text-white">Send Us A Message</h2>
                
                {isSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                    className="p-10 bg-white/5 backdrop-blur-md border border-accent/30 text-white flex flex-col items-center justify-center text-center space-y-6 relative z-10"
                  >
                    <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center">
                      <CheckCircle size={40} className="text-accent" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-serif font-bold mb-3 text-accent">Message Sent Successfully!</h4>
                      <p className="text-light/70 font-light">Thank you for reaching out to Shanvi Global. We will get back to you shortly.</p>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-10 relative z-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                      <div className="relative group">
                        <label className="block text-xs font-bold uppercase tracking-widest text-accent mb-3">Your Name</label>
                        <input required type="text" className="w-full border-b-2 border-white/10 bg-white/5 px-4 py-4 text-white focus:outline-none focus:border-accent focus:bg-white/10 transition-all placeholder:text-light/30 rounded-t-sm" placeholder="Enter your full name" />
                      </div>
                      <div className="relative group">
                        <label className="block text-xs font-bold uppercase tracking-widest text-accent mb-3">Your Email</label>
                        <input required type="email" className="w-full border-b-2 border-white/10 bg-white/5 px-4 py-4 text-white focus:outline-none focus:border-accent focus:bg-white/10 transition-all placeholder:text-light/30 rounded-t-sm" placeholder="Enter your email address" />
                      </div>
                    </div>
                    <div className="relative group">
                      <label className="block text-xs font-bold uppercase tracking-widest text-accent mb-3">Subject</label>
                      <input required type="text" className="w-full border-b-2 border-white/10 bg-white/5 px-4 py-4 text-white focus:outline-none focus:border-accent focus:bg-white/10 transition-all placeholder:text-light/30 rounded-t-sm" placeholder="How can we help?" />
                    </div>
                    <div className="relative group">
                      <label className="block text-xs font-bold uppercase tracking-widest text-accent mb-3">Message</label>
                      <textarea required rows={5} className="w-full border-b-2 border-white/10 bg-white/5 px-4 py-4 text-white focus:outline-none focus:border-accent focus:bg-white/10 transition-all placeholder:text-light/30 resize-none rounded-t-sm" placeholder="Your message here..."></textarea>
                    </div>
                    <button type="submit" className="group relative overflow-hidden px-12 py-5 bg-accent text-primary font-bold uppercase tracking-widest text-sm hover:shadow-[0_10px_30px_rgba(198,161,91,0.3)] transition-all duration-300 w-full sm:w-auto rounded-sm">
                      <span className="relative z-10 flex items-center justify-center gap-3">
                        Send Message <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                      <div className="absolute inset-0 h-full w-0 bg-white transition-all duration-300 ease-out group-hover:w-full z-0" />
                    </button>
                  </form>
                )}
              </motion.div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

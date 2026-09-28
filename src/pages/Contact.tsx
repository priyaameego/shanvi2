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
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            
            {/* Contact Details Side */}
            <div className="w-full lg:w-5/12 space-y-12">
              <motion.div 
                initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                className="space-y-10"
              >
                <div>
                  <h3 className="text-3xl font-serif font-bold text-primary mb-8">Reach Out To Us</h3>
                  <p className="text-dark/70 font-light text-lg mb-12">
                    We are always available to discuss your recruitment needs or career aspirations. Connect with us through any of the channels below.
                  </p>
                </div>

                <div className="flex gap-6 items-start group">
                  <div className="w-12 h-12 rounded-sm bg-primary/5 border border-accent/30 flex items-center justify-center text-accent group-hover:bg-primary transition-colors flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-dark/50 mb-2">Contact Number</h4>
                    <p className="text-primary font-bold text-lg">+91 - 9871500770</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start group">
                  <div className="w-12 h-12 rounded-sm bg-primary/5 border border-accent/30 flex items-center justify-center text-accent group-hover:bg-primary transition-colors flex-shrink-0">
                    <Globe size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-dark/50 mb-2">Website</h4>
                    <a href="https://www.shanviglobal.com" className="text-primary font-bold text-lg hover:text-accent transition-colors break-all">www.shanviglobal.com</a>
                  </div>
                </div>

                <div className="flex gap-6 items-start group">
                  <div className="w-12 h-12 rounded-sm bg-primary/5 border border-accent/30 flex items-center justify-center text-accent group-hover:bg-primary transition-colors flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div className="w-full overflow-hidden">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-dark/50 mb-2">Email Address</h4>
                    <div className="space-y-2">
                      <a href="mailto:hiring@shanviglobal.com" className="block text-primary font-bold text-base md:text-lg hover:text-accent transition-colors break-all">hiring@shanviglobal.com</a>
                      <a href="mailto:anupama@shanviglobal.com" className="block text-primary font-bold text-base md:text-lg hover:text-accent transition-colors break-all">anupama@shanviglobal.com</a>
                    </div>
                  </div>
                </div>

                <div className="flex gap-6 items-start group">
                  <div className="w-12 h-12 rounded-sm bg-primary/5 border border-accent/30 flex items-center justify-center text-accent group-hover:bg-primary transition-colors flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-dark/50 mb-2">Address</h4>
                    <div className="space-y-6">
                      <div>
                        <p className="text-primary font-bold text-sm mb-1">Gurgaon Office:</p>
                        <p className="text-dark/70 font-light">704, 7th Floor, MG Road, Palm Court<br/>Sector 16, Gurgaon, Haryana, 122007</p>
                      </div>
                      <div>
                        <p className="text-primary font-bold text-sm mb-1">Kolkata Office:</p>
                        <p className="text-dark/70 font-light">301-B, Shanvi House, Genexx Valley,<br/>Joka, Kolkata, WB, 702301</p>
                      </div>
                    </div>
                  </div>
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
                className="bg-white p-8 sm:p-10 lg:p-16 shadow-[0_20px_50px_rgba(36,16,24,0.1)] border border-primary/5 relative"
              >
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-2 h-32 bg-accent" />
                <div className="absolute bottom-0 left-0 w-32 h-2 bg-primary" />
                
                <h2 className="text-3xl font-serif font-bold text-primary mb-10">Send Us A Message</h2>
                
                {isSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                    className="p-8 bg-green-50 border border-green-200 text-green-800 flex flex-col items-center justify-center text-center space-y-4"
                  >
                    <CheckCircle size={48} className="text-green-500" />
                    <div>
                      <h4 className="text-xl font-bold mb-2">Message Sent Successfully!</h4>
                      <p className="text-sm">Thank you for reaching out to Shanvi Global. We will get back to you shortly.</p>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-dark/50 mb-2">Your Name</label>
                        <input required type="text" className="w-full border-b border-primary/20 bg-transparent py-3 text-dark focus:outline-none focus:border-accent transition-colors" placeholder="Enter your full name" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-dark/50 mb-2">Your Email</label>
                        <input required type="email" className="w-full border-b border-primary/20 bg-transparent py-3 text-dark focus:outline-none focus:border-accent transition-colors" placeholder="Enter your email address" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-dark/50 mb-2">Subject</label>
                      <input required type="text" className="w-full border-b border-primary/20 bg-transparent py-3 text-dark focus:outline-none focus:border-accent transition-colors" placeholder="How can we help?" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-dark/50 mb-2">Message</label>
                      <textarea required rows={4} className="w-full border-b border-primary/20 bg-transparent py-3 text-dark focus:outline-none focus:border-accent transition-colors resize-none" placeholder="Your message here..."></textarea>
                    </div>
                    <button type="submit" className="px-10 py-5 bg-primary text-light font-bold uppercase tracking-widest text-sm hover:bg-accent hover:text-primary transition-all duration-300 shadow-lg w-full sm:w-auto">
                      Send Message
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

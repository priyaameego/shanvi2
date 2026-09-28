import { motion } from 'framer-motion';
import { Target, Eye, Handshake, Award, ShieldCheck, Lightbulb, Target as TargetIcon, Database, CheckSquare, Briefcase, Clock, MessageSquare, ChevronRight } from 'lucide-react';

export default function AboutUs() {
  const coreValues = [
    { title: 'Collaboration', desc: 'Building strong, collaborative partnerships with clients, candidates, and our team.', icon: <Handshake size={32} /> },
    { title: 'Excellence', desc: 'Striving for exceptional quality in all our services to consistently surpass expectations.', icon: <Award size={32} /> },
    { title: 'Integrity', desc: 'Upholding the highest standards of honesty and transparency in every interaction.', icon: <ShieldCheck size={32} /> },
    { title: 'Innovation', desc: 'Embracing creativity and leveraging cutting-edge solutions to stay ahead in a dynamic market.', icon: <Lightbulb size={32} /> }
  ];

  const usps = [
    { title: 'Comprehensive Industry Insight', desc: 'With a profound understanding of the Recruitment Business, Shanvi navigates the intricacies of diverse industries and positions, ensuring a holistic approach to talent acquisition.', icon: <Eye size={24} /> },
    { title: 'Versatility Across Industries', desc: 'Our exposure to a spectrum of industries and positions equips us to tailor recruitment solutions to varying organizational needs, from entry-level to executive positions.', icon: <Briefcase size={24} /> },
    { title: 'Organic Databank', desc: 'Powered by an organic databank, Shanvi possesses a wealth of talent resources, facilitating swift and targeted placements.', icon: <Database size={24} /> },
    { title: 'Strategic Position Selection', desc: 'We adopt a selective approach in choosing positions to work on, allowing us to channel our expertise and resources effectively, delivering the highest quality service.', icon: <TargetIcon size={24} /> },
    { title: 'Professional Commitment', desc: 'We adhere to a professional approach, ensuring unwavering commitment to our clients and their unique requirements.', icon: <CheckSquare size={24} /> },
    { title: 'Availability on Demand', desc: 'We understand the importance of being available when needed. At Shanvi, our team is ready to respond promptly, ensuring seamless collaboration with our clients.', icon: <Clock size={24} /> },
    { title: 'Responsive Communication', desc: 'Our commitment to excellent service extends to prompt responses to queries, fostering transparent and efficient communication throughout the recruitment process.', icon: <MessageSquare size={24} /> }
  ];

  const expertises = [
    { name: 'Automobiles', percent: 85 },
    { name: 'Hospitality', percent: 90 },
    { name: 'Oil & Gas, Power', percent: 95 },
    { name: 'FMCG', percent: 80 },
    { name: 'Engineering/Infrastructures', percent: 88 }
  ];

  const team = [
    { name: 'Johne Doe', role: 'Creative', img: 'https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?auto=format&fit=crop&q=80&w=600' },
    { name: 'Jennifer', role: 'Programmer', img: 'https://images.unsplash.com/photo-1622564026438-11432858d4ac?auto=format&fit=crop&q=80&w=600' },
    { name: 'Christean', role: 'CEO', img: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&q=80&w=600' },
    { name: 'Kerinele rase', role: 'Manager', img: 'https://images.unsplash.com/photo-1618077360395-f3068be8e001?auto=format&fit=crop&q=80&w=600' }
  ];

  return (
    <div className="bg-light min-h-screen">
      {/* Header */}
      <section className="pt-48 pb-32 bg-primary text-light relative overflow-hidden">
        {/* Subtle Image Depth */}
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1600" alt="Office" className="w-full h-full object-cover opacity-10 mix-blend-luminosity" />
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
              <p className="text-accent tracking-[0.3em] uppercase font-bold text-xs">Since 2005</p>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight">
              Company Profile
            </h1>
          </motion.div>
        </div>
      </section>
      
      {/* About Company (Old Website Clone) */}
      <section className="py-24 relative z-10 bg-white border-b border-primary/5">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            <div className="lg:w-1/2 relative perspective-1000">
              <motion.div 
                initial={{ opacity: 0, rotateY: -10, x: -30 }}
                whileInView={{ opacity: 1, rotateY: 0, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative z-10 shadow-2xl overflow-hidden"
              >
                <img 
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800" 
                  alt="About Company" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
              </motion.div>
            </div>

            <div className="lg:w-1/2">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="text-4xl font-serif font-bold text-primary mb-8"
              >
                About Company
              </motion.h2>
              <div className="space-y-6 text-dark/70 font-light leading-relaxed">
                <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  Established in 2003 as Shanvi Staffing & Training Services, has earn vast experience in recruitment sector. We have experties to fulfill our clients requirements easily. Shanvi Staffing is now most preferred recruitment and staffing service provider among our clients.
                </motion.p>
                <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  We have recruitment experience across industries like Automobiles, Hospitality, Engineering, FMCG, Oil & Gas, Power & Infrastructures.
                </motion.p>
                <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  We have well-demonstrated track record of delivering high-value, low-cost outsourcing process solutions that can highly benefit your business. The specialty of our services is that the solutions delivered by us convert into long term strategic advantages for our clients, and the live testimonials speak of the quality of our deliverables. We have dedicated, experienced recruiter team who work hard towards providing you the best resources for your company.
                </motion.p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Us & Industrial Experties (Old Website Clone) */}
      <section className="py-24 relative z-10 bg-light border-b border-primary/5">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            
            <div className="lg:w-1/2">
              <motion.h3 
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="text-3xl font-serif font-bold text-primary mb-10"
              >
                Why Choose Us?
              </motion.h3>
              
              <div className="space-y-6">
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
                    <div className="w-6 h-6 rounded-full border border-primary text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ChevronRight size={14} />
                    </div>
                    <span className="text-dark/70 font-light">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 w-full">
              <motion.h3 
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="text-3xl font-serif font-bold text-primary mb-10"
              >
                Our Industrial Experties
              </motion.h3>

              <div className="space-y-6 w-full">
                {expertises.map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * idx }}
                    className="w-full"
                  >
                    <div className="flex justify-between items-end mb-2">
                      <div className="text-sm md:text-base font-bold text-primary">{item.name}</div>
                      <div className="text-xs font-bold text-accent">{item.percent}%</div>
                    </div>
                    <div className="h-2 w-full bg-primary/10 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.percent}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                        className="h-full bg-gradient-to-r from-accent to-[#D4C39B] rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* About Shanvi Global (PDF Content) */}
      <section className="py-24 relative z-10 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl space-y-8">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="text-4xl font-serif font-bold text-primary mb-8"
            >
              About Shanvi Global
            </motion.h2>
            <div className="space-y-6 text-lg text-dark/80 font-light leading-relaxed">
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                Welcome to Shanvi Global Recruitment Services, a dynamic and innovative force in the realm of talent acquisition. Established in 2005, we have evolved into a trusted partner, adept at connecting exceptional talent with unparalleled opportunities. Our journey commenced as a local recruitment service provider, and through steadfast commitment and unwavering dedication, we have expanded our footprint to serve organizations nationwide, reaching across borders to the USA, Middle East, and LATAM countries.
              </motion.p>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                At Shanvi Global, we embody a commitment to excellence that goes beyond traditional recruitment. Our focus is on bridging the gap between top-tier professionals and organizations aspiring for success. We take pride in our rapid growth, a testament to our ability to understand the evolving dynamics of the talent landscape and provide tailored solutions.
              </motion.p>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                As a trusted partner, we stand at the forefront of connecting organizations with the right talent and empowering individuals to shape successful careers. Our dedication to innovation, coupled with a global perspective, sets us apart in the competitive realm of recruitment services. Join us on a journey where exceptional talent meets outstanding opportunities, and let Shanvi Global Recruitment Services be your gateway to success.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-secondary text-light relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/40 mix-blend-multiply" />
        <div className="container relative z-10 mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="p-10 border border-accent/20 bg-primary/50 backdrop-blur-md shadow-2xl hover:border-accent/50 transition-colors"
            >
              <Eye className="text-accent mb-6" size={48} />
              <h3 className="text-3xl font-serif font-bold mb-4">Our Vision</h3>
              <p className="text-light/80 font-light leading-relaxed">
                To be the foremost catalyst in shaping successful careers and fostering organizational growth by delivering unparalleled staffing solutions globally. We envision a future where every talent finds its perfect match, propelling businesses to new heights of success.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="p-10 border border-accent/20 bg-primary/50 backdrop-blur-md shadow-2xl hover:border-accent/50 transition-colors"
            >
              <Target className="text-accent mb-6" size={48} />
              <h3 className="text-3xl font-serif font-bold mb-4">Mission Statement</h3>
              <p className="text-light/80 font-light leading-relaxed">
                Our mission at Shanvi Global Staffing Services is to create lasting value for our clients and candidates. Through reliable, flexible, and personalized staffing solutions, we aim to exceed expectations, promote organizational excellence, and contribute to the overall advancement of the industries we serve.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-light relative border-b border-primary/5">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-primary mb-4">Core Values</h2>
            <div className="w-16 h-[2px] bg-accent mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30, rotateX: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group p-8 bg-white border border-primary/5 hover:border-accent/30 shadow-lg hover:shadow-2xl transition-all duration-500 perspective-1000 text-center"
              >
                <div className="w-20 h-20 mx-auto bg-primary/5 border border-accent/20 flex items-center justify-center text-accent rounded-full mb-6 group-hover:scale-110 group-hover:bg-primary transition-all duration-500">
                  {value.icon}
                </div>
                <h3 className="text-xl font-serif font-bold text-primary mb-4">{value.title}</h3>
                <p className="text-sm text-dark/70 font-light leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our USPs */}
      <section className="py-24 bg-primary text-light relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-[20%] -right-[10%] w-[50vw] h-[50vw] rounded-full border-[1px] border-accent/10 opacity-20 blur-md" />
        </div>
        
        <div className="container relative z-10 mx-auto px-6 lg:px-12">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <p className="text-accent tracking-[0.3em] uppercase font-bold text-xs mb-4">What Sets Us Apart</p>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">Our USPs</h2>
            <div className="w-16 h-[2px] bg-accent mx-auto mb-8" />
            <p className="text-light/70 font-light text-lg">
              At Shanvi, our commitment to excellence is underlined by a set of distinctive features that set us apart in the realm of talent acquisition.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
            {usps.map((usp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`p-8 bg-secondary/50 backdrop-blur-sm border border-white/10 hover:border-accent/50 transition-colors flex gap-6 ${idx === 6 ? 'md:col-span-2 md:w-1/2 md:mx-auto' : ''}`}
              >
                <div className="text-accent flex-shrink-0">
                  {usp.icon}
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-light mb-3">
                    <span className="text-accent/50 mr-2">{idx + 1}.</span> {usp.title}
                  </h3>
                  <p className="text-light/60 font-light leading-relaxed text-sm">{usp.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 text-center max-w-4xl mx-auto p-10 border border-accent/20 bg-accent/5"
          >
            <p className="text-lg text-light/90 font-light italic">
              "Choose Shanvi for a partner dedicated to understanding your specific needs, providing tailored solutions, and delivering exceptional results in the dynamic landscape of talent acquisition."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Founder */}
      <section className="py-32 bg-light text-primary relative overflow-hidden">
        <div className="container relative z-10 mx-auto px-6 lg:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <p className="text-accent tracking-[0.3em] uppercase font-bold text-xs mb-4">Leadership</p>
            <h2 className="text-5xl font-serif font-bold mb-12">Our Founder</h2>
            
            <div className="space-y-8 text-lg text-dark/80 font-light leading-relaxed p-10 bg-white border border-primary/10 shadow-2xl rounded-sm">
              <p>
                Meet the driving force behind Shanvi – <strong className="text-primary font-bold">Ms. Anupama</strong>, a stalwart in the recruitment industry, boasting over two decades of invaluable experience. Prior to the inception of Shanvi in 2003, she contributed her expertise to distinguished entities such as Life Skills, Global Staffing Services, and Areva T&D.
              </p>
              <p>
                Ms. Anupama's profound knowledge spans a spectrum of industries, including but not limited to Automobiles, Hospitality, Engineering, FMCG, Oil & Gas, Power, and Infrastructures. This multifaceted experience forms the bedrock of Shanvi's strategic and comprehensive approach to talent acquisition.
              </p>
              <p>
                Her academic prowess is evident through an MBA from IMT Ghaziabad, underscoring not only her practical expertise but also her commitment to continuous learning. Ms. Anupama has further honed her skills through Facilitation training conducted by Aims Insight and ISTD, enhancing her ability to navigate the dynamic landscape of recruitment with finesse.
              </p>
              <p>
                At Shanvi, Ms. Anupama's vision and leadership drive our commitment to excellence, ensuring that we not only meet but exceed the expectations of our clients. With a blend of experience, education, and a passion for delivering exceptional recruitment solutions, Ms. Anupama epitomizes the ethos of Shanvi as a trailblazer in the world of talent acquisition.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Team (Old Website Clone) */}
      <section className="py-24 bg-white relative overflow-hidden border-t border-primary/5">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="text-4xl font-serif font-bold text-primary mb-4"
            >
              Our Team
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group text-center"
              >
                <div className="w-full aspect-[4/5] overflow-hidden rounded-sm mb-6 bg-light">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />
                </div>
                <h4 className="text-xl font-serif font-bold text-primary mb-1">{member.name}</h4>
                <p className="text-dark/50 text-sm font-light">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

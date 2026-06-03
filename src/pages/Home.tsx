import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import {
  ArrowRight, CheckCircle, Users, Award, Clock, Shield,
  FileText, Building2, Calculator, Gavel, Star, TrendingUp, HeartHandshake
} from 'lucide-react';
import OrbitHero from '../components/OrbitHero';

function AnimatedSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: Award, value: '10+', label: 'Years Experience' },
    { icon: FileText, value: '2000+', label: 'Cases Handled' },
    { icon: Shield, value: '100%', label: 'Client Satisfaction' },
  ];

  const services = [
    {
      icon: Calculator,
      title: 'Tax Services',
      description: 'Comprehensive tax filing, planning, and compliance services for individuals and businesses.',
      link: '/services/tax',
    },
    {
      icon: Building2,
      title: 'Corporate Services',
      description: 'Company registration, corporate compliance, and legal advisory for businesses of all sizes.',
      link: '/services/corporate',
    },
  ];

  const trustFactors = [
    {
      icon: Award,
      title: 'Expert Leadership',
      description: 'Led by Ghulam Akbar Khosa Advocate, a seasoned legal professional with extensive experience.',
    },
    {
      icon: Shield,
      title: 'Confidentiality Guaranteed',
      description: 'Your business and financial information is handled with the utmost discretion and security.',
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      description: 'We understand deadlines matter. All filings and registrations completed on schedule.',
    },
    {
      icon: TrendingUp,
      title: 'Proven Track Record',
      description: 'Over 500 satisfied clients and 2000+ successfully handled cases speak for our excellence.',
    },
    {
      icon: HeartHandshake,
      title: 'Personalized Service',
      description: 'Every client receives tailored solutions designed specifically for their unique needs.',
    },
    {
      icon: Star,
      title: 'Transparent Pricing',
      description: 'No hidden charges. Clear, upfront pricing for all our services with detailed breakdowns.',
    },
  ];

  const howWeWork = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'We begin with a detailed discussion to understand your specific tax or corporate needs.',
    },
    {
      step: '02',
      title: 'Document Review',
      description: 'Our experts thoroughly review all your documents to ensure accuracy and completeness.',
    },
    {
      step: '03',
      title: 'Strategy Development',
      description: 'We create a customized strategy tailored to your unique business situation.',
    },
    {
      step: '04',
      title: 'Execution & Filing',
      description: 'We handle all paperwork, filings, and submissions with precision and care.',
    },
  ];

  const reviews = [
    {
      name: 'Ahmed Khan',
      role: 'Business Owner',
      rating: 5,
      text: 'ALFA Consultants handled my company registration flawlessly. Professional and efficient service throughout.',
    },
    {
      name: 'Fatima Ali',
      role: 'CEO, Tech Solutions',
      rating: 5,
      text: 'Best tax consultancy in Lahore. Ghulam Akbar Khosa is extremely knowledgeable and helpful.',
    },
    {
      name: 'Muhammad Rizwan',
      role: 'Import/Export Business',
      rating: 5,
      text: 'They helped me with GST registration and compliance. Very satisfied with their expertise.',
    },
    {
      name: 'Sana Malik',
      role: 'Startup Founder',
      rating: 5,
      text: 'Quick, reliable, and professional. Highly recommended for all corporate legal matters.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNlODVkMDQiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-120px)]">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Award size={16} />
                Expert Tax & Corporate Consultants
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary leading-tight mb-6">
                Your Trusted Partner for{' '}
                <span className="text-primary">Tax</span> &{' '}
                <span className="text-primary">Corporate</span> Solutions
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
                Led by Ghulam Akbar Khosa Advocate, ALFA Corporate & Tax Consultants provides expert tax filing, corporate registration, and legal advisory services in Lahore, Pakistan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary-dark transition-colors shadow-lg shadow-primary/30"
                >
                  Our Services
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white text-secondary border-2 border-secondary/10 px-8 py-4 rounded-xl font-semibold hover:border-primary hover:text-primary transition-colors"
                >
                  Contact Us
                </Link>
              </div>

              {/* Contact Info */}
              <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center lg:justify-start text-sm text-gray-500">
                <a href="tel:+923336479447" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <FileText size={16} className="text-primary" />
                  </div>
                  <span>0333-6479447</span>
                </a>
                <a href="mailto:alfacorporateandtaxconsultants@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <FileText size={16} className="text-primary" />
                  </div>
                  <span className="break-all">alfacorporateandtaxconsultants@gmail.com</span>
                </a>
              </div>
            </motion.div>

            {/* Right - Orbit Animation */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="flex justify-center items-center"
            >
              <OrbitHero />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-16 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection key={index}>
                <div className="text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                    <stat.icon size={28} className="text-primary" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-secondary mb-1">{stat.value}</div>
                  <div className="text-gray-500 text-sm">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mt-3 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We specialize in providing comprehensive tax and corporate consultancy services tailored to your needs.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <AnimatedSection key={index}>
                <Link to={service.link} className="block group">
                  <div className="bg-gradient-to-br from-orange-50 to-white border border-orange-100 rounded-2xl p-8 h-full hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <service.icon size={32} className="text-primary group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                      Learn More <ArrowRight size={16} />
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Promise</span>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mt-3 mb-4">Why Clients Trust Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We have built our reputation on trust, expertise, and unwavering commitment to our clients success.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trustFactors.map((factor, index) => (
              <AnimatedSection key={index}>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <factor.icon size={24} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-secondary mb-3">{factor.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{factor.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mt-3 mb-4">How We Work</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our streamlined process ensures efficient and effective delivery of all our services.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howWeWork.map((step, index) => (
              <AnimatedSection key={index}>
                <div className="relative text-center">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center shadow-lg shadow-primary/30">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-bold text-secondary mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                  {index < howWeWork.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-[calc(50%+40px)] w-[calc(100%-80px)] h-0.5 bg-gradient-to-r from-primary/30 to-transparent" />
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mt-3 mb-4">What Our Clients Say</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Real feedback from real clients who have experienced our exceptional services.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((review, index) => (
              <AnimatedSection key={index}>
                <div className="bg-white border border-gray-100 rounded-2xl p-6 h-full hover:shadow-lg transition-all">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400" fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">"{review.text}"</p>
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-secondary font-semibold text-sm">{review.name}</p>
                    <p className="text-gray-400 text-xs">{review.role}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/reviews"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors font-semibold"
            >
              View All Reviews <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and let our experts handle your tax and corporate needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg"
              >
                Get Free Consultation
                <ArrowRight size={18} />
              </Link>
              <a
                href="tel:+923336479447"
                className="inline-flex items-center justify-center gap-2 bg-primary-dark text-white px-8 py-4 rounded-xl font-semibold hover:bg-red-700 transition-colors"
              >
                Call Now: 0333-6479447
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

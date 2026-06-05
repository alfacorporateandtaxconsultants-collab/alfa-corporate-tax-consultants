import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import {
  ArrowRight, CheckCircle, Users, Award, Clock, Shield,
  FileText, Building2, Calculator, Gavel, Star, TrendingUp, HeartHandshake,
  Phone, Mail, MapPin
} from 'lucide-react';
import OrbitHero from '../components/OrbitHero';
import SEO from '../components/SEO';

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

const homeStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'ALFA Corporate & Tax Consultants Lahore',
  description: 'Best tax consultants in Lahore offering income tax filing, GST registration, company registration SECP, and corporate legal advisory services in Pakistan.',
  url: 'https://alfacorporateandtaxconsultants.com.pk/',
  mainEntity: {
    '@type': 'LegalService',
    name: 'ALFA Corporate & Tax Consultants',
    description: 'Expert tax filing, corporate registration, and legal advisory services in Lahore, Pakistan',
    areaServed: 'Lahore, Pakistan',
    provider: {
      '@type': 'Person',
      name: 'Ghulam Akbar Khosa Advocate',
    },
  },
};

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
      description: 'Comprehensive tax filing, planning, and compliance services for individuals and businesses in Lahore.',
      link: '/services/tax',
    },
    {
      icon: Building2,
      title: 'Corporate Services',
      description: 'Company registration, corporate compliance, and legal advisory for businesses of all sizes in Pakistan.',
      link: '/services/corporate',
    },
  ];

  const trustFactors = [
    {
      icon: Award,
      title: 'Expert Leadership',
      description: 'Led by Ghulam Akbar Khosa Advocate, a seasoned legal professional with extensive experience in Pakistani tax law.',
    },
    {
      icon: Shield,
      title: 'Confidentiality Guaranteed',
      description: 'Your business and financial information is handled with the utmost discretion and security.',
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      description: 'We understand deadlines matter. All tax filings and company registrations completed on schedule.',
    },
    {
      icon: TrendingUp,
      title: 'Proven Track Record',
      description: 'Over 500 satisfied clients and 2000+ successfully handled tax and corporate cases in Lahore.',
    },
    {
      icon: HeartHandshake,
      title: 'Personalized Service',
      description: 'Every client receives tailored tax and corporate solutions designed specifically for their unique needs.',
    },
    {
      icon: Star,
      title: 'Transparent Pricing',
      description: 'No hidden charges. Clear, upfront pricing for all our tax and corporate services with detailed breakdowns.',
    },
  ];

  const howWeWork = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'We begin with a detailed discussion to understand your specific tax or corporate needs in Lahore.',
    },
    {
      step: '02',
      title: 'Document Review',
      description: 'Our tax experts thoroughly review all your documents to ensure accuracy and completeness for FBR filing.',
    },
    {
      step: '03',
      title: 'Strategy Development',
      description: 'We create a customized tax strategy tailored to your unique business situation in Pakistan.',
    },
    {
      step: '04',
      title: 'Execution & Filing',
      description: 'We handle all tax paperwork, filings, and submissions with precision and care through FBR and SECP.',
    },
  ];

  const reviews = [
    {
      name: 'Ahmed Khan',
      role: 'Business Owner, Lahore',
      rating: 5,
      text: 'ALFA Consultants handled my company registration with SECP flawlessly. Professional and efficient tax consultancy service throughout Lahore.',
    },
    {
      name: 'Fatima Ali',
      role: 'CEO, Tech Solutions Lahore',
      rating: 5,
      text: 'Best tax consultancy in Lahore. Ghulam Akbar Khosa is extremely knowledgeable about FBR tax laws and helped with my income tax filing.',
    },
    {
      name: 'Muhammad Rizwan',
      role: 'Import/Export Business Lahore',
      rating: 5,
      text: 'They helped me with GST registration and ongoing tax compliance. Very satisfied with their expertise in Pakistani tax regulations.',
    },
    {
      name: 'Sana Malik',
      role: 'Startup Founder Lahore',
      rating: 5,
      text: 'Quick, reliable, and professional corporate legal services. Highly recommended for all business registration matters in Pakistan.',
    },
  ];

  return (
    <div>
      <SEO
        title="ALFA Corporate & Tax Consultants Lahore | Tax Filing & Company Registration"
        description="Best tax consultants in Lahore offering income tax filing, GST registration, company registration SECP, and corporate legal advisory services in Pakistan. Call 0333-6479447."
        keywords="tax consultants lahore, corporate tax consultants pakistan, tax filing services lahore, company registration pakistan, SECP registration, GST registration lahore, income tax filing, tax advisor lahore, corporate lawyer lahore, business registration pakistan"
        canonical="https://alfacorporateandtaxconsultants.com.pk/"
        structuredData={homeStructuredData}
        breadcrumb={[{ name: 'Home', url: 'https://alfacorporateandtaxconsultants.com.pk/' }]}
      />

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
              className="text-center lg:text-left relative z-10"
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Award size={16} />
                Expert Tax & Corporate Consultants in Lahore
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary leading-tight mb-6">
                Best <span className="text-primary">Tax Consultants</span> &{' '}
                <span className="text-primary">Corporate</span> Advisors in Lahore
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
                Looking for the best tax consultants in Lahore? ALFA Corporate & Tax Consultants provides expert income tax filing, GST registration, SECP company registration, and corporate legal advisory services across Pakistan. Led by Ghulam Akbar Khosa Advocate.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start relative z-20 pointer-events-auto">
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary-dark transition-colors shadow-lg shadow-primary/30 cursor-pointer"
                >
                  Our Tax Services
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white text-secondary border-2 border-secondary/10 px-8 py-4 rounded-xl font-semibold hover:border-primary hover:text-primary transition-colors cursor-pointer"
                >
                  Free Consultation
                </Link>
              </div>

              {/* Contact Info */}
              <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center lg:justify-start text-sm text-gray-500">
                <a href="tel:+923336479447" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone size={16} className="text-primary" />
                  </div>
                  <span>0333-6479447</span>
                </a>
                <a href="mailto:alfacorporateandtaxconsultants@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail size={16} className="text-primary" />
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
              className="flex justify-center items-center pointer-events-none"
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
          <AnimatedSection className="text-center mb-8">
            <img
              src="/services-img.jpg"
              alt="Tax and Corporate Services in Lahore"
              className="w-full max-w-3xl mx-auto h-56 md:h-72 object-cover rounded-2xl shadow-lg mb-10"
              loading="lazy"
            />
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mt-3 mb-4">Tax & Corporate Services in Lahore</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We specialize in providing comprehensive tax filing and corporate consultancy services tailored to businesses and individuals across Lahore and Pakistan.
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
          <AnimatedSection className="text-center mb-8">
            <img
              src="/trust-img.jpg"
              alt="Why Clients Trust ALFA Tax Consultants"
              className="w-full max-w-3xl mx-auto h-56 md:h-72 object-cover rounded-2xl shadow-lg mb-10"
              loading="lazy"
            />
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Promise</span>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mt-3 mb-4">Why Clients Trust Our Tax Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We have built our reputation as the leading tax consultants in Lahore on trust, expertise, and unwavering commitment to our clients success.
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
          <AnimatedSection className="text-center mb-8">
            <img
              src="/workflow-img.jpg"
              alt="How ALFA Tax Consultancy Works"
              className="w-full max-w-3xl mx-auto h-56 md:h-72 object-cover rounded-2xl shadow-lg mb-10"
              loading="lazy"
            />
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mt-3 mb-4">How Our Tax Consultancy Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our streamlined tax filing process ensures efficient and effective delivery of all our services for clients in Lahore and across Pakistan.
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
          <AnimatedSection className="text-center mb-8">
            <img
              src="/reviews-img.jpg"
              alt="Happy clients reviewing ALFA Tax Consultants"
              className="w-full max-w-3xl mx-auto h-56 md:h-72 object-cover rounded-2xl shadow-lg mb-10"
              loading="lazy"
            />
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mt-3 mb-4">What Our Tax Clients Say</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Real feedback from real clients who have experienced our exceptional tax and corporate consultancy services in Lahore.
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
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">&ldquo;{review.text}&rdquo;</p>
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

      {/* Location Section for Local SEO */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-8">
            <img
              src="/office-img.jpg"
              alt="ALFA Tax Consultants Office in Lahore"
              className="w-full max-w-3xl mx-auto h-56 md:h-72 object-cover rounded-2xl shadow-lg mb-10"
              loading="lazy"
            />
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Visit Our Office</span>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mt-3 mb-4">Tax Consultants in Lahore - Office Location</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Visit our office in Lahore for in-person tax and corporate consultancy services.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-2xl p-6 text-center">
              <MapPin size={32} className="text-primary mx-auto mb-4" />
              <h3 className="font-bold text-secondary mb-2">Office Address</h3>
              <p className="text-gray-600 text-sm">3-Fane Road, Office No 3, Ground Floor, Tehreem Building, Lahore, Pakistan</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 text-center">
              <Phone size={32} className="text-primary mx-auto mb-4" />
              <h3 className="font-bold text-secondary mb-2">Call Us</h3>
              <a href="tel:+923336479447" className="text-primary font-semibold">0333-6479447</a>
              <p className="text-gray-500 text-xs mt-1">Mon - Sat: 9AM - 6PM</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 text-center">
              <Mail size={32} className="text-primary mx-auto mb-4" />
              <h3 className="font-bold text-secondary mb-2">Email Us</h3>
              <a href="mailto:alfacorporateandtaxconsultants@gmail.com" className="text-primary text-sm font-semibold break-all">alfacorporateandtaxconsultants@gmail.com</a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <img
              src="/cta-img.jpg"
              alt="Get free tax consultation in Lahore"
              className="w-full max-w-2xl mx-auto h-48 md:h-64 object-cover rounded-2xl shadow-xl mb-10"
              loading="lazy"
            />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to File Your Taxes or Register Your Company?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Contact Lahore&apos;s best tax consultants today for a free consultation. Let our experts handle your tax filing, GST registration, and corporate needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg"
              >
                Get Free Tax Consultation
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

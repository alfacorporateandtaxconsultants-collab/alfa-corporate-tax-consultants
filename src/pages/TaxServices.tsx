import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Calculator, FileText, Receipt, TrendingUp, Shield, Clock,
  ArrowRight, CheckCircle, Phone, Mail
} from 'lucide-react';
import SEO from '../components/SEO';

const taxStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Tax Services Lahore - Income Tax Filing & GST Registration',
  provider: {
    '@type': 'LegalService',
    name: 'ALFA Corporate & Tax Consultants',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '3-Fane Road, Office No 3, Ground Floor, Tehreem Building',
      addressLocality: 'Lahore',
      addressCountry: 'PK',
    },
  },
  areaServed: {
    '@type': 'City',
    name: 'Lahore',
  },
  serviceType: 'Tax Consultancy',
  description: 'Professional tax filing, GST registration, tax planning, and FBR compliance services in Lahore, Pakistan.',
};

const taxServices = [
  {
    icon: FileText,
    title: 'Income Tax Return Filing',
    description: 'Expert preparation and filing of individual and corporate income tax returns with FBR Pakistan. We ensure maximum tax deductions and complete compliance with Pakistani tax laws.',
  },
  {
    icon: Receipt,
    title: 'GST Registration & Returns',
    description: 'Complete GST/Sales Tax registration with FBR and monthly/quarterly return filing for businesses of all sizes in Lahore and across Pakistan.',
  },
  {
    icon: TrendingUp,
    title: 'Tax Planning & Advisory',
    description: 'Strategic tax planning to minimize your tax liability legally while maximizing savings and investment opportunities under Pakistani tax regulations.',
  },
  {
    icon: Shield,
    title: 'Tax Audit Representation',
    description: 'Professional representation during FBR tax audits and proceedings to protect your interests and resolve disputes with the Federal Board of Revenue.',
  },
  {
    icon: Calculator,
    title: 'Withholding Tax Compliance',
    description: 'Management of withholding tax obligations including registration, deduction, deposit, and monthly statements filing with FBR.',
  },
  {
    icon: Clock,
    title: 'Tax Refund Claims',
    description: 'Assistance in claiming tax refunds from FBR with proper documentation and follow-up until realization for individuals and businesses.',
  },
];

export default function TaxServices() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <SEO
        title="Tax Filing Services Lahore | Income Tax & GST Registration Pakistan"
        description="Best tax filing services in Lahore. Expert income tax return filing, GST registration, tax planning, withholding tax compliance & FBR audit representation in Pakistan. Call 0333-6479447."
        keywords="tax filing lahore, income tax return filing pakistan, GST registration lahore, tax consultants lahore, FBR tax filing, tax planning services, withholding tax compliance, tax refund claims, sales tax registration"
        canonical="https://alfacorporateandtaxconsultants.com.pk/services/tax"
        structuredData={taxStructuredData}
        breadcrumb={[
          { name: 'Home', url: 'https://alfacorporateandtaxconsultants.com.pk/' },
          { name: 'Services', url: 'https://alfacorporateandtaxconsultants.com.pk/services' },
          { name: 'Tax Services', url: 'https://alfacorporateandtaxconsultants.com.pk/services/tax' },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/tax-hero-img.jpg"
              alt="Tax Filing and GST Registration Services Lahore"
              className="w-full max-w-3xl mx-auto h-56 md:h-72 object-cover rounded-2xl shadow-lg mb-10"
              loading="lazy"
            />
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Specialized Service</span>
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mt-4 mb-6">Tax Filing & GST Registration Services in Lahore</h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Comprehensive tax solutions for individuals and businesses in Lahore. From income tax filing to GST registration, we handle all FBR tax matters with precision and expertise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {taxServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-gradient-to-br from-orange-50 to-white border border-orange-100 rounded-2xl p-8 h-full hover:shadow-xl hover:shadow-orange-100 transition-all duration-300 hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <service.icon size={28} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Tax Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mt-3 mb-6">
                Expert Tax Solutions You Can Trust in Lahore
              </h2>
              <p className="text-gray-600 mb-8">
                With years of experience in Pakistani tax law and FBR regulations, our team led by Ghulam Akbar Khosa Advocate ensures your tax matters are handled with the highest level of expertise and professionalism in Lahore.
              </p>

              <ul className="space-y-4">
                {[
                  'Up-to-date knowledge of FBR tax regulations and Pakistani tax laws',
                  'Personalized tax strategies for maximum savings on income tax',
                  'Timely filing to avoid FBR penalties and interest charges',
                  'Complete documentation and record keeping for tax audits',
                  'Representation in FBR tax audits and dispute resolution',
                  'Year-round tax support and consultation for businesses',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-primary mt-0.5 shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-secondary mb-6">Get a Free Tax Consultation in Lahore</h3>
              <p className="text-gray-600 mb-6">
                Discuss your tax needs with our experts. We offer a free initial consultation to understand your income tax, GST, and corporate tax requirements.
              </p>
              <div className="space-y-4">
                <a
                  href="tel:+923336479447"
                  className="flex items-center gap-4 p-4 bg-orange-50 rounded-xl hover:bg-orange-100 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Call Us</p>
                    <p className="font-semibold text-secondary">0333-6479447</p>
                  </div>
                </a>
                <a
                  href="mailto:alfacorporateandtaxconsultants@gmail.com"
                  className="flex items-center gap-4 p-4 bg-orange-50 rounded-xl hover:bg-orange-100 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email Us</p>
                    <p className="font-semibold text-secondary">alfacorporateandtaxconsultants@gmail.com</p>
                  </div>
                </a>
              </div>
              <Link
                to="/contact"
                className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-4 rounded-xl font-semibold hover:bg-primary-dark transition-colors"
              >
                Book Tax Consultation <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

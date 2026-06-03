import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calculator, Building2, ArrowRight, CheckCircle } from 'lucide-react';

const servicesList = [
  {
    icon: Calculator,
    title: 'Tax Services',
    description: 'Comprehensive tax solutions including income tax filing, GST registration, tax planning, and compliance management.',
    features: [
      'Income Tax Return Filing',
      'GST Registration & Returns',
      'Tax Planning & Advisory',
      'Withholding Tax Compliance',
      'Tax Audit Representation',
      'Sales Tax Matters',
    ],
    link: '/services/tax',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Building2,
    title: 'Corporate Services',
    description: 'End-to-end corporate solutions from company registration to ongoing compliance and legal advisory.',
    features: [
      'Company Registration (SECP)',
      'Partnership Registration',
      'Corporate Compliance',
      'Legal Advisory',
      'Contract Drafting',
      'Business Licensing',
    ],
    link: '/services/corporate',
    color: 'from-blue-500 to-indigo-500',
  },
];

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Expertise</span>
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mt-4 mb-6">Our Services</h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We provide specialized tax and corporate consultancy services designed to help your business thrive while staying fully compliant.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {servicesList.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 h-full">
                  <div className={`h-2 bg-gradient-to-r ${service.color}`} />
                  <div className="p-8">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                      <service.icon size={32} className="text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-secondary mb-4">{service.title}</h2>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-gray-700">
                          <CheckCircle size={18} className="text-primary shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Link
                      to={service.link}
                      className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-dark transition-colors"
                    >
                      View Details <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

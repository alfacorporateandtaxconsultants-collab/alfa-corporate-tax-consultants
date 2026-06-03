import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Building2, FileSignature, Gavel, Users, ClipboardCheck, Briefcase,
  ArrowRight, CheckCircle, Phone, Mail
} from 'lucide-react';

const corporateServices = [
  {
    icon: Building2,
    title: 'Company Registration (SECP)',
    description: 'Complete company incorporation services including name reservation, document preparation, and SECP registration for Private Limited, Single Member, and Public Limited companies.',
  },
  {
    icon: FileSignature,
    title: 'Partnership Registration',
    description: 'Registration of partnership firms with the Registrar of Firms including deed preparation and legal compliance.',
  },
  {
    icon: Gavel,
    title: 'Legal Advisory',
    description: 'Expert legal counsel on corporate matters, contract law, business disputes, and regulatory compliance.',
  },
  {
    icon: ClipboardCheck,
    title: 'Corporate Compliance',
    description: 'Ongoing compliance management including annual returns, director changes, and statutory record maintenance.',
  },
  {
    icon: Briefcase,
    title: 'Business Licensing',
    description: 'Assistance in obtaining all necessary business licenses and permits from relevant authorities.',
  },
  {
    icon: Users,
    title: 'Corporate Restructuring',
    description: 'Strategic advice on mergers, acquisitions, demergers, and corporate restructuring for business growth.',
  },
];

export default function CorporateServices() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Specialized Service</span>
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mt-4 mb-6">Corporate Services</h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              End-to-end corporate solutions from company formation to ongoing compliance. Build and grow your business with confidence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {corporateServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-2xl p-8 h-full hover:shadow-xl hover:shadow-blue-100 transition-all duration-300 hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center mb-5">
                    <service.icon size={28} className="text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Corporate Services */}
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
                Your Corporate Success Partner
              </h2>
              <p className="text-gray-600 mb-8">
                From startup registration to established corporate compliance, we provide comprehensive support at every stage of your business journey in Pakistan.
              </p>
              
              <ul className="space-y-4">
                {[
                  'Complete SECP registration handling',
                  'Expert legal documentation preparation',
                  'Ongoing compliance management',
                  'Strategic business advisory',
                  'Fast-track processing available',
                  'Dedicated account manager',
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
              <h3 className="text-2xl font-bold text-secondary mb-6">Start Your Business Today</h3>
              <p className="text-gray-600 mb-6">
                Ready to register your company? Contact us for a free consultation and let us handle the entire process for you.
              </p>
              <div className="space-y-4">
                <a
                  href="tel:+923336479447"
                  className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Call Us</p>
                    <p className="font-semibold text-secondary">0333-6479447</p>
                  </div>
                </a>
                <a
                  href="mailto:alfacorporateandtaxconsultants@gmail.com"
                  className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
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
                Get Started <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

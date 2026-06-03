import { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Award, Scale, Users, Target, BookOpen, Phone, Mail, MapPin
} from 'lucide-react';

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const milestones = [
    { year: '2014', title: 'Founded', desc: 'ALFA Corporate & Tax Consultants was established in Lahore' },
    { year: '2016', title: '100+ Clients', desc: 'Reached milestone of 100 satisfied clients' },
    { year: '2019', title: 'Expanded Services', desc: 'Added comprehensive corporate legal advisory' },
    { year: '2022', title: '500+ Clients', desc: 'Serving over 500 businesses and individuals' },
    { year: '2024', title: 'Industry Leader', desc: 'Recognized as leading tax consultancy in Lahore' },
  ];

  const values = [
    { icon: Scale, title: 'Integrity', desc: 'We uphold the highest ethical standards in all our dealings' },
    { icon: Target, title: 'Excellence', desc: 'Committed to delivering exceptional results for every client' },
    { icon: Users, title: 'Client First', desc: 'Your success is our priority, always' },
    { icon: BookOpen, title: 'Expertise', desc: 'Continuous learning to stay ahead of regulatory changes' },
  ];

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
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Who We Are</span>
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mt-4 mb-6">About ALFA Consultants</h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Your trusted partner for tax and corporate solutions in Lahore, Pakistan. Built on a foundation of expertise, integrity, and client success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-primary-light/10 rounded-3xl" />
                <img
                  src="/founder.jpg"
                  alt="Ghulam Akbar Khosa Advocate - Founder"
                  className="relative rounded-2xl shadow-2xl w-full object-cover"
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Award size={24} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-secondary">10+ Years</p>
                      <p className="text-xs text-gray-500">Of Excellence</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Founder</span>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mt-3 mb-6">
                Ghulam Akbar Khosa Advocate
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Ghulam Akbar Khosa Advocate is the founder and leading expert at ALFA Corporate & Tax Consultants. With over a decade of experience in tax law, corporate regulations, and legal advisory, he has built a reputation as one of Lahore's most trusted consultants.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                His deep understanding of Pakistan's tax framework, combined with his commitment to client success, has helped hundreds of businesses and individuals navigate complex regulatory requirements with confidence.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Under his leadership, ALFA Consultants has grown from a small practice to a recognized name in tax and corporate consultancy, serving clients across Pakistan with dedication and professionalism.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="tel:+923336479447" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-dark transition-colors">
                  <Phone size={18} />
                  0333-6479447
                </a>
                <a href="mailto:alfacorporateandtaxconsultants@gmail.com" className="inline-flex items-center gap-2 bg-gray-100 text-secondary px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors">
                  <Mail size={18} />
                  Email
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story / Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Journey</span>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mt-3">Timeline of Success</h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/20 hidden md:block" />
            {milestones.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative flex items-center gap-8 mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <span className="text-primary font-bold text-lg">{item.year}</span>
                    <h3 className="font-bold text-secondary mt-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
                <div className="hidden md:flex w-4 h-4 rounded-full bg-primary border-4 border-white shadow shrink-0 z-10" />
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">What Drives Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mt-3">Our Core Values</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <value.icon size={28} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-secondary mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Office */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Visit Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mt-3 mb-6">Our Office</h2>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 inline-block">
              <div className="flex items-start gap-4 text-left">
                <MapPin size={24} className="text-primary mt-1 shrink-0" />
                <div>
                  <p className="font-semibold text-secondary text-lg">ALFA Corporate & Tax Consultants</p>
                  <p className="text-gray-600 mt-1">3-Fane Road, Office No 3</p>
                  <p className="text-gray-600">Ground Floor, Tehreem Building</p>
                  <p className="text-gray-600">Lahore, Pakistan</p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <a href="tel:+923336479447" className="text-primary hover:underline text-sm">0333-6479447</a>
                    <span className="text-gray-300">|</span>
                    <a href="mailto:alfacorporateandtaxconsultants@gmail.com" className="text-primary hover:underline text-sm">alfacorporateandtaxconsultants@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

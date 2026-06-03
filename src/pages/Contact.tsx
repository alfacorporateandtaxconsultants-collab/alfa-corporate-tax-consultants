import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Phone, Mail, MapPin, Clock, Send, MessageSquare,
  CheckCircle, User, FileText, Inbox
} from 'lucide-react';
import SEO from '../components/SEO';
import { addMessage, getMessages, type Message } from '../lib/messageStore';

const contactStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact ALFA Tax Consultants Lahore',
  description: 'Contact ALFA Corporate & Tax Consultants in Lahore for tax filing, GST registration, company registration, and corporate legal services. Call 0333-6479447.',
  url: 'https://alfacorporateandtaxconsultants.com.pk/contact',
  mainEntity: {
    '@type': 'LegalService',
    name: 'ALFA Corporate & Tax Consultants',
    telephone: '+923336479447',
    email: 'alfacorporateandtaxconsultants@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '3-Fane Road, Office No 3, Ground Floor, Tehreem Building',
      addressLocality: 'Lahore',
      addressRegion: 'Punjab',
      addressCountry: 'PK',
    },
    openingHours: 'Mo-Sa 09:00-18:00',
  },
};

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [showMessages, setShowMessages] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addMessage(formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const loadMessages = () => {
    setMessages(getMessages());
    setShowMessages(true);
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Contact ALFA Tax Consultants Lahore | Free Tax Consultation"
        description="Contact ALFA Corporate & Tax Consultants in Lahore. Free consultation for tax filing, GST registration, company registration SECP, and corporate legal services. Call 0333-6479447."
        keywords="contact tax consultants lahore, tax consultation lahore, GST registration contact, company registration lahore contact, corporate legal advisory contact, FBR tax help lahore"
        canonical="https://alfacorporateandtaxconsultants.com.pk/contact"
        structuredData={contactStructuredData}
        breadcrumb={[
          { name: 'Home', url: 'https://alfacorporateandtaxconsultants.com.pk/' },
          { name: 'Contact', url: 'https://alfacorporateandtaxconsultants.com.pk/contact' },
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
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mt-4 mb-6">Contact Tax Consultants in Lahore</h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Have tax filing questions or need corporate legal assistance? Reach out to ALFA Consultants in Lahore and our team will get back to you promptly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-28 relative z-10">
            {[
              { icon: Phone, title: 'Phone', content: '0333-6479447', href: 'tel:+923336479447' },
              { icon: Mail, title: 'Email', content: 'alfacorporateandtaxconsultants@gmail.com', href: 'mailto:alfacorporateandtaxconsultants@gmail.com' },
              { icon: MapPin, title: 'Address', content: '3-Fane Road, Office No 3, Ground Floor, Tehreem Building, Lahore', href: '#' },
              { icon: Clock, title: 'Working Hours', content: 'Mon - Sat: 9:00 AM - 6:00 PM', href: '#' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <a
                  href={item.href}
                  className="block bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:border-primary/20 transition-all duration-300 h-full"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon size={24} className="text-primary" />
                  </div>
                  <h3 className="font-semibold text-secondary mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm break-words">{item.content}</p>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-secondary">Send Us a Message</h2>
                    <p className="text-gray-600 text-sm mt-1">Fill out the form below for tax or corporate consultation.</p>
                  </div>
                  <button
                    onClick={loadMessages}
                    className="flex items-center gap-2 bg-secondary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-secondary/90 transition-colors"
                  >
                    <Inbox size={16} />
                    View Messages
                  </button>
                </div>

                {submitted && (
                  <div className="bg-green-50 text-green-700 p-4 rounded-xl mb-6 text-sm font-medium flex items-center gap-2">
                    <CheckCircle size={18} />
                    Thank you! Your message has been sent successfully.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        placeholder="03XX-XXXXXXX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                      <input
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        placeholder="Tax Filing / Company Registration / GST"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                      placeholder="Describe your tax or corporate query in detail..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-4 rounded-xl font-semibold hover:bg-primary-dark transition-colors"
                  >
                    <Send size={18} />
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Map & Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Map Embed */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.0!2d74.3!3d31.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDMwJzAwLjAiTiA3NMKwMTgnMDAuMCJF!5e0!3m2!1sen!2s!4v1"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="ALFA Tax Consultants Office Location Lahore"
                  className="grayscale-[30%]"
                />
              </div>

              {/* Quick Contact */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-secondary mb-6">Quick Contact</h3>
                <div className="space-y-4">
                  <a href="tel:+923336479447" className="flex items-center gap-4 p-4 bg-orange-50 rounded-xl hover:bg-orange-100 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                      <Phone size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Call Us Anytime</p>
                      <p className="font-semibold text-secondary">0333-6479447</p>
                    </div>
                  </a>
                  <a href="mailto:alfacorporateandtaxconsultants@gmail.com" className="flex items-center gap-4 p-4 bg-orange-50 rounded-xl hover:bg-orange-100 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                      <Mail size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email Us</p>
                      <p className="font-semibold text-secondary text-sm">alfacorporateandtaxconsultants@gmail.com</p>
                    </div>
                  </a>
                  <a href="https://wa.me/923336479447" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-colors">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#25D366' }}>
                      <MessageSquare size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">WhatsApp</p>
                      <p className="font-semibold text-secondary">0333-6479447</p>
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Messages Panel */}
      {showMessages && (
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-secondary">Received Messages</h2>
              <button
                onClick={() => setShowMessages(false)}
                className="text-gray-500 hover:text-secondary transition-colors"
              >
                Close
              </button>
            </div>
            {messages.length === 0 ? (
              <div className="text-center py-16 bg-gray-50 rounded-2xl">
                <MessageSquare size={48} className="text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">No messages received yet.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`bg-white rounded-xl p-6 border ${msg.read ? 'border-gray-200' : 'border-primary/30 bg-orange-50/50'} shadow-sm`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <User size={18} className="text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold text-secondary">{msg.name}</p>
                          <p className="text-xs text-gray-500">{msg.email} | {msg.phone || 'No phone'}</p>
                        </div>
                      </div>
                      <span className="text-xs text-gray-400">{new Date(msg.date).toLocaleDateString()}</span>
                    </div>
                    <div className="pl-13 ml-12">
                      <p className="text-sm font-medium text-secondary mb-1 flex items-center gap-2">
                        <FileText size={14} className="text-primary" />
                        {msg.subject}
                      </p>
                      <p className="text-gray-600 text-sm">{msg.message}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  );
}

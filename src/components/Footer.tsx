import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Linkedin, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src="/uploads/upload_1.jpg" alt="ALFA Logo" className="h-12 w-auto rounded" />
              <div>
                <h3 className="text-lg font-bold text-secondary">ALFA</h3>
                <p className="text-xs text-primary font-medium">Corporate & Tax Consultants</p>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Led by Ghulam Akbar Khosa Advocate, we provide expert tax and corporate consultancy services in Lahore, Pakistan. Your trusted partner for all legal and financial matters.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary hover:text-white text-gray-500 transition-colors">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary hover:text-white text-gray-500 transition-colors">
                <Linkedin size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary hover:text-white text-gray-500 transition-colors">
                <Twitter size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary hover:text-white text-gray-500 transition-colors">
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-secondary mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Tax Services', path: '/services/tax' },
                { name: 'Corporate Services', path: '/services/corporate' },
                { name: 'Reviews', path: '/reviews' },
                { name: 'Blogs', path: '/blogs' },
                { name: 'FAQ', path: '/faq' },
                { name: 'Contact Us', path: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-500 hover:text-primary transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-secondary mb-6">Our Services</h4>
            <ul className="space-y-3">
              {[
                'Income Tax Filing',
                'GST Registration',
                'Company Registration',
                'Legal Advisory',
                'Corporate Compliance',
                'Tax Planning',
                'Business Consultancy',
              ].map((service) => (
                <li key={service}>
                  <span className="text-gray-500 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-secondary mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-0.5 shrink-0" />
                <span className="text-gray-500 text-sm">
                  3-Fane Road, Office No 3, Ground Floor, Tehreem Building, Lahore, Pakistan
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary shrink-0" />
                <a href="tel:+923336479447" className="text-gray-500 text-sm hover:text-primary transition-colors">
                  0333-6479447
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary shrink-0" />
                <a href="mailto:alfacorporateandtaxconsultants@gmail.com" className="text-gray-500 text-sm hover:text-primary transition-colors">
                  alfacorporateandtaxconsultants@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={18} className="text-primary shrink-0" />
                <span className="text-gray-500 text-sm">Mon - Sat: 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} ALFA Corporate & Tax Consultants. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm">
            Founder: <span className="text-primary font-medium">Ghulam Akbar Khosa Advocate</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Building2, Landmark, FileText, Globe, Scale, BookOpen } from 'lucide-react';
import SEO from '../components/SEO';

const links = [
  {
    category: 'Tax Authorities',
    icon: Landmark,
    items: [
      { title: 'Federal Board of Revenue (FBR)', url: 'https://www.fbr.gov.pk', description: 'Official tax authority of Pakistan for income tax and GST' },
      { title: 'FBR IRIS Portal', url: 'https://iris.fbr.gov.pk', description: 'Online tax filing system for income tax returns' },
      { title: 'FBR Tax Calculator', url: 'https://www.fbr.gov.pk/calculator', description: 'Calculate your tax liability online' },
    ],
  },
  {
    category: 'Corporate Registration',
    icon: Building2,
    items: [
      { title: 'SECP eServices', url: 'https://eservices.secp.gov.pk', description: 'Company registration portal for Pakistan' },
      { title: 'SECP Pakistan', url: 'https://www.secp.gov.pk', description: 'Securities and Exchange Commission of Pakistan' },
    ],
  },
  {
    category: 'Legal Resources',
    icon: Scale,
    items: [
      { title: 'Pakistan Code', url: 'https://pakistancode.gov.pk', description: 'Official laws and statutes of Pakistan' },
      { title: 'Supreme Court of Pakistan', url: 'https://www.supremecourt.gov.pk', description: 'Supreme Court official website' },
    ],
  },
  {
    category: 'Government Portals',
    icon: Globe,
    items: [
      { title: 'Punjab Government', url: 'https://www.punjab.gov.pk', description: 'Punjab provincial government portal' },
      { title: 'NADRA', url: 'https://www.nadra.gov.pk', description: 'National identity and registration authority' },
      { title: 'EOBI', url: 'https://www.eobi.gov.pk', description: 'Employees Old-Age Benefits Institution' },
    ],
  },
  {
    category: 'Useful Tools',
    icon: FileText,
    items: [
      { title: 'NTN Verification', url: 'https://e.fbr.gov.pk', description: 'Verify NTN status online with FBR' },
      { title: 'Active Taxpayer List', url: 'https://www.fbr.gov.pk/atp', description: 'Check active taxpayer status with FBR' },
    ],
  },
  {
    category: 'Learning Resources',
    icon: BookOpen,
    items: [
      { title: 'FBR Tax Education', url: 'https://www.fbr.gov.pk/tax-education', description: 'Tax education and guides by FBR' },
      { title: 'SECP Guidelines', url: 'https://www.secp.gov.pk/guidelines', description: 'Corporate compliance guides by SECP' },
    ],
  },
];

export default function ImportantLinks() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <SEO
        title="Important Links | FBR, SECP, NADRA & Legal Resources Pakistan"
        description="Useful government links for tax and corporate services in Pakistan. FBR, SECP, NADRA, Punjab Government, and legal resources for tax filing and company registration."
        keywords="FBR portal, SECP registration, NADRA Pakistan, tax resources, company registration links, legal resources pakistan, government portals"
        canonical="https://alfacorporateandtaxconsultants.com.pk/links"
        breadcrumb={[
          { name: 'Home', url: 'https://alfacorporateandtaxconsultants.com.pk/' },
          { name: 'Important Links', url: 'https://alfacorporateandtaxconsultants.com.pk/links' },
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
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Resources</span>
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mt-4 mb-6">Important Government Links for Tax & Corporate Services</h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Useful links to FBR, SECP, NADRA, and other government portals for tax filing, company registration, and legal reference in Pakistan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Links Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {links.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <section.icon size={24} className="text-primary" />
                    </div>
                    <h2 className="text-xl font-bold text-secondary">{section.category}</h2>
                  </div>
                  <div className="space-y-4">
                    {section.items.map((item, i) => (
                      <a
                        key={i}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-orange-50 transition-colors group"
                      >
                        <ExternalLink size={16} className="text-primary mt-1 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div>
                          <p className="font-medium text-secondary group-hover:text-primary transition-colors text-sm">
                            {item.title}
                          </p>
                          <p className="text-gray-500 text-xs mt-0.5">{item.description}</p>
                        </div>
                      </a>
                    ))}
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

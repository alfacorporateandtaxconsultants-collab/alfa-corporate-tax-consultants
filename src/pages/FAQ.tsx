import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'What services does ALFA Corporate & Tax Consultants offer?',
    answer: 'We specialize in two main areas: Tax Services (income tax filing, GST registration, tax planning, withholding tax compliance, tax audit representation) and Corporate Services (company registration, partnership registration, legal advisory, corporate compliance, business licensing).',
  },
  {
    question: 'Who is the founder of ALFA Consultants?',
    answer: 'ALFA Corporate & Tax Consultants is founded and led by Ghulam Akbar Khosa Advocate, a seasoned legal professional with extensive experience in tax and corporate law in Pakistan.',
  },
  {
    question: 'Where is your office located?',
    answer: 'Our office is located at 3-Fane Road, Office No 3, Ground Floor, Tehreem Building, Lahore, Pakistan. We serve clients throughout Pakistan.',
  },
  {
    question: 'How can I contact ALFA Consultants?',
    answer: 'You can reach us via phone at 0333-6479447, email at alfacorporateandtaxconsultants@gmail.com, or visit our office in Lahore. You can also use the contact form on our website or message us on WhatsApp.',
  },
  {
    question: 'What is the process for company registration in Pakistan?',
    answer: 'Company registration involves: 1) Name reservation with SECP, 2) Preparation of Memorandum and Articles of Association, 3) Online submission of documents, 4) Payment of fees, 5) Receipt of Certificate of Incorporation. We handle the entire process for you.',
  },
  {
    question: 'How long does it take to register a company?',
    answer: 'With complete documentation, company registration typically takes 2-4 weeks. However, timelines may vary depending on SECP processing and document verification.',
  },
  {
    question: 'What documents are needed for income tax filing?',
    answer: 'You will need: CNIC copy, bank statements, salary certificates or business income proofs, investment documents, property ownership documents, and any other relevant financial records.',
  },
  {
    question: 'What is the deadline for income tax filing in Pakistan?',
    answer: 'For the tax year 2024, the deadline for filing income tax returns is September 30th for individuals and December 31st for companies.',
  },
  {
    question: 'Do you offer GST registration services?',
    answer: 'Yes, we provide complete GST registration services including application through FBR IRIS portal, document preparation, and follow-up until you receive your GST registration certificate.',
  },
  {
    question: 'What are your service charges?',
    answer: 'Our charges depend on the specific service and complexity of the case. We offer transparent pricing with no hidden charges. Contact us for a free consultation and quote tailored to your needs.',
  },
  {
    question: 'Can you represent me in a tax audit?',
    answer: 'Yes, we provide professional representation during FBR tax audits and proceedings. Our experienced team will protect your interests and help resolve any disputes.',
  },
  {
    question: 'Do you serve clients outside Lahore?',
    answer: 'Yes, while our office is in Lahore, we serve clients throughout Pakistan. Many of our services can be handled remotely through digital channels.',
  },
];

export default function FAQ() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openIndex, setOpenIndex] = useState<number | null>(0);

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
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Got Questions?</span>
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mt-4 mb-6">Frequently Asked Questions</h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Find answers to common questions about our tax and corporate consultancy services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <HelpCircle size={20} className="text-primary" />
                      </div>
                      <span className="font-semibold text-secondary">{faq.question}</span>
                    </div>
                    <ChevronDown
                      size={20}
                      className={`text-gray-400 shrink-0 transition-transform duration-300 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 pl-20">
                          <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

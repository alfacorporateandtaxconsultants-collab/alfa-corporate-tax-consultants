import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Send } from 'lucide-react';
import SEO from '../components/SEO';

interface Review {
  id: number;
  name: string;
  role: string;
  rating: number;
  text: string;
  date: string;
}

const reviewsStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Ahmed Khan' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        reviewBody: 'ALFA Consultants handled my company registration flawlessly. Professional and efficient service throughout.',
        itemReviewed: {
          '@type': 'LegalService',
          name: 'ALFA Corporate & Tax Consultants',
        },
      },
    },
  ],
};

const initialReviews: Review[] = [
  {
    id: 1,
    name: 'Ahmed Khan',
    role: 'Business Owner, Lahore',
    rating: 5,
    text: 'ALFA Consultants handled my company registration with SECP flawlessly. The entire process was smooth and professional. Ghulam Akbar Khosa is extremely knowledgeable and guided me through every step of business registration in Pakistan.',
    date: '2024-03-15',
  },
  {
    id: 2,
    name: 'Fatima Ali',
    role: 'CEO, Tech Solutions Pvt Ltd Lahore',
    rating: 5,
    text: 'Best tax consultancy in Lahore. They filed my income tax returns and handled GST registration with perfection. The team is responsive, professional, and truly cares about their clients tax compliance.',
    date: '2024-02-28',
  },
  {
    id: 3,
    name: 'Muhammad Rizwan',
    role: 'Import/Export Business Lahore',
    rating: 5,
    text: 'They helped me with GST registration and ongoing tax compliance for my import business. Very satisfied with their expertise and timely service. They make complex FBR tax matters simple to understand.',
    date: '2024-02-10',
  },
  {
    id: 4,
    name: 'Sana Malik',
    role: 'Startup Founder Lahore',
    rating: 5,
    text: 'Quick, reliable, and professional. ALFA Consultants registered my startup with SECP and handled all legal documentation. Their pricing is transparent and corporate service is exceptional.',
    date: '2024-01-22',
  },
  {
    id: 5,
    name: 'Imran Sheikh',
    role: 'Real Estate Developer Lahore',
    rating: 5,
    text: 'I have been using their tax services for 3 years now. They are always up to date with the latest FBR tax regulations and ensure maximum savings. A truly trustworthy tax partner in Lahore.',
    date: '2024-01-05',
  },
  {
    id: 6,
    name: 'Ayesha Rehman',
    role: 'Restaurant Chain Owner Lahore',
    rating: 5,
    text: 'Excellent service for GST filing and FBR compliance. They handle everything so I can focus on running my business. The team is always available to answer tax questions.',
    date: '2023-12-18',
  },
  {
    id: 7,
    name: 'Bilal Ahmad',
    role: 'Manufacturing Company Director Lahore',
    rating: 5,
    text: 'ALFA Consultants managed our corporate restructuring and tax planning. Their strategic advice saved us significant money. Professional and highly competent tax team.',
    date: '2023-12-01',
  },
  {
    id: 8,
    name: 'Nadia Hussain',
    role: 'Freelance Consultant Lahore',
    rating: 5,
    text: 'As a freelancer, I was confused about income tax filing. ALFA made it simple and stress-free. They explained everything clearly and filed my tax returns accurately with FBR.',
    date: '2023-11-20',
  },
];

export default function Reviews() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [reviews, setReviews] = useState<Review[]>(() => {
    const stored = localStorage.getItem('alfa_reviews');
    return stored ? JSON.parse(stored) : initialReviews;
  });

  const [formData, setFormData] = useState({ name: '', role: '', rating: 5, text: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newReview: Review = {
      id: Date.now(),
      ...formData,
      date: new Date().toISOString().split('T')[0],
    };
    const updated = [newReview, ...reviews];
    setReviews(updated);
    localStorage.setItem('alfa_reviews', JSON.stringify(updated));
    setFormData({ name: '', role: '', rating: 5, text: '' });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Client Reviews | ALFA Tax Consultants Lahore - Testimonials"
        description="Read what our clients say about ALFA Corporate & Tax Consultants. 5-star reviews for tax filing, GST registration, company registration, and corporate legal services in Lahore."
        keywords="tax consultants reviews lahore, ALFA consultants testimonials, best tax consultant reviews, corporate services reviews pakistan, client feedback tax filing"
        canonical="https://alfacorporateandtaxconsultants.com.pk/reviews"
        structuredData={reviewsStructuredData}
        breadcrumb={[
          { name: 'Home', url: 'https://alfacorporateandtaxconsultants.com.pk/' },
          { name: 'Reviews', url: 'https://alfacorporateandtaxconsultants.com.pk/reviews' },
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
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Testimonials</span>
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mt-4 mb-6">Client Reviews for Tax & Corporate Services</h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              See what our clients say about our tax filing, GST registration, company registration, and corporate consultancy services in Lahore.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 h-full relative">
                  <Quote size={32} className="text-primary/20 absolute top-6 right-6" />
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400" fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed mb-6">&ldquo;{review.text}&rdquo;</p>
                  <div className="border-t border-gray-100 pt-4">
                    <p className="font-semibold text-secondary">{review.name}</p>
                    <p className="text-gray-500 text-xs">{review.role}</p>
                    <p className="text-gray-400 text-xs mt-1">{review.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add Review Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
          >
            <h2 className="text-2xl font-bold text-secondary mb-2">Share Your Experience</h2>
            <p className="text-gray-600 mb-6">We value your feedback. Let others know about your experience with our tax and corporate services.</p>

            {submitted && (
              <div className="bg-green-50 text-green-700 p-4 rounded-xl mb-6 text-sm font-medium">
                Thank you for your review! It has been submitted successfully.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Role / Business</label>
                  <input
                    type="text"
                    required
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="e.g. Business Owner Lahore"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setFormData({ ...formData, rating: star })}
                      className="p-1 transition-transform hover:scale-110"
                    >
                      <Star
                        size={28}
                        className={star <= formData.rating ? 'text-yellow-400' : 'text-gray-300'}
                        fill={star <= formData.rating ? 'currentColor' : 'none'}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Your Review</label>
                <textarea
                  required
                  rows={4}
                  value={formData.text}
                  onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                  placeholder="Share your experience with our tax or corporate services..."
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-4 rounded-xl font-semibold hover:bg-primary-dark transition-colors"
              >
                <Send size={18} />
                Submit Review
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

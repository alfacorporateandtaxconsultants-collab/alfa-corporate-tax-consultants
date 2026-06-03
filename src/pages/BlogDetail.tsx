import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, Tag, ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';
import { getBlogById } from '../lib/blogStore';

export default function BlogDetail() {
  const { id } = useParams<{ id: string }>();
  const blog = getBlogById(id || '');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-secondary mb-4">Blog Not Found</h1>
          <Link to="/blogs" className="text-primary hover:underline">
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  const blogStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: blog.title,
    description: blog.excerpt,
    image: `https://alfacorporateandtaxconsultants.com.pk${blog.image}`,
    author: {
      '@type': 'Person',
      name: blog.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'ALFA Corporate & Tax Consultants',
      logo: {
        '@type': 'ImageObject',
        url: 'https://alfacorporateandtaxconsultants.com.pk/uploads/upload_1.jpg',
      },
    },
    datePublished: blog.date,
    dateModified: blog.date,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://alfacorporateandtaxconsultants.com.pk/blogs/${blog.id}`,
    },
  };

  return (
    <div className="min-h-screen">
      <SEO
        title={`${blog.title} | ALFA Tax & Corporate Blog Pakistan`}
        description={blog.excerpt}
        keywords={`${blog.category.toLowerCase()} blog pakistan, ${blog.title.toLowerCase()}, tax blog lahore, corporate blog pakistan`}
        canonical={`https://alfacorporateandtaxconsultants.com.pk/blogs/${blog.id}`}
        structuredData={blogStructuredData}
        breadcrumb={[
          { name: 'Home', url: 'https://alfacorporateandtaxconsultants.com.pk/' },
          { name: 'Blogs', url: 'https://alfacorporateandtaxconsultants.com.pk/blogs' },
          { name: blog.title, url: `https://alfacorporateandtaxconsultants.com.pk/blogs/${blog.id}` },
        ]}
      />

      {/* Hero Image */}
      <div className="relative h-80 md:h-96">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-secondary/20" />
        <div className="absolute bottom-0 left-0 right-0">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Link
                to="/blogs"
                className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm mb-4 transition-colors"
              >
                <ArrowLeft size={16} />
                Back to Blogs
              </Link>
              <span className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 inline-block">
                {blog.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-white">{blog.title}</h1>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-6 text-sm text-gray-500 mb-8 pb-8 border-b border-gray-100">
              <span className="flex items-center gap-2">
                <Calendar size={16} className="text-primary" />
                {blog.date}
              </span>
              <span className="flex items-center gap-2">
                <User size={16} className="text-primary" />
                {blog.author}
              </span>
              <span className="flex items-center gap-2">
                <Tag size={16} className="text-primary" />
                {blog.category}
              </span>
            </div>

            <div className="prose prose-lg max-w-none">
              {blog.content.split('\n\n').map((paragraph, index) => {
                if (paragraph.startsWith('## ')) {
                  return (
                    <h2 key={index} className="text-2xl font-bold text-secondary mt-8 mb-4">
                      {paragraph.replace('## ', '')}
                    </h2>
                  );
                }
                if (paragraph.startsWith('### ')) {
                  return (
                    <h3 key={index} className="text-xl font-bold text-secondary mt-6 mb-3">
                      {paragraph.replace('### ', '')}
                    </h3>
                  );
                }
                if (/^\d+\./.test(paragraph)) {
                  return (
                    <ol key={index} className="list-decimal list-inside space-y-2 text-gray-700 mb-4">
                      {paragraph.split('\n').map((item, i) => (
                        <li key={i} className="text-gray-700">{item.replace(/^\d+\.\s*/, '')}</li>
                      ))}
                    </ol>
                  );
                }
                if (paragraph.startsWith('- ')) {
                  return (
                    <ul key={index} className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                      {paragraph.split('\n').map((item, i) => (
                        <li key={i} className="text-gray-700">{item.replace('- ', '')}</li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p key={index} className="text-gray-700 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

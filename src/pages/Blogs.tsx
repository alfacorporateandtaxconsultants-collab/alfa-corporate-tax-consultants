import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Tag, Plus, Trash2, X } from 'lucide-react';
import SEO from '../components/SEO';
import { getBlogs, addBlog, deleteBlog, type BlogPost } from '../lib/blogStore';

export default function Blogs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [blogs, setBlogs] = useState<BlogPost[]>(getBlogs());
  const [showForm, setShowForm] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    author: '',
    category: 'Tax',
    image: '',
  });

  const categories = ['All', 'Tax', 'Corporate', 'Legal', 'Business'];

  const filteredBlogs = selectedCategory === 'All'
    ? blogs
    : blogs.filter(b => b.category === selectedCategory);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addBlog({
      ...formData,
      date: new Date().toISOString().split('T')[0],
      image: formData.image || '/blog1.jpg',
    });
    setBlogs(getBlogs());
    setFormData({ title: '', excerpt: '', content: '', author: '', category: 'Tax', image: '' });
    setShowForm(false);
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this blog?')) {
      deleteBlog(id);
      setBlogs(getBlogs());
    }
  };

  const blogListStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'ALFA Tax & Corporate Blog',
    description: 'Latest insights on tax laws, corporate regulations, and business advisory in Pakistan',
    url: 'https://alfacorporateandtaxconsultants.com.pk/blogs',
    blogPost: blogs.slice(0, 3).map((blog) => ({
      '@type': 'BlogPosting',
      headline: blog.title,
      description: blog.excerpt,
      author: { '@type': 'Person', name: blog.author },
      datePublished: blog.date,
      url: `https://alfacorporateandtaxconsultants.com.pk/blogs/${blog.id}`,
    })),
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Tax & Corporate Blog | FBR Tax Laws & SECP Regulations Pakistan"
        description="Read our blog for latest insights on tax filing, GST registration, company registration SECP, FBR regulations, and corporate legal updates in Pakistan."
        keywords="tax blog pakistan, FBR tax updates, GST registration guide, company registration blog, corporate law pakistan, tax filing tips, business advisory blog"
        canonical="https://alfacorporateandtaxconsultants.com.pk/blogs"
        structuredData={blogListStructuredData}
        breadcrumb={[
          { name: 'Home', url: 'https://alfacorporateandtaxconsultants.com.pk/' },
          { name: 'Blogs', url: 'https://alfacorporateandtaxconsultants.com.pk/blogs' },
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
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Insights</span>
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mt-4 mb-6">Tax & Corporate Blog Pakistan</h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Stay updated with the latest insights on FBR tax laws, SECP corporate regulations, GST updates, and business advisory in Pakistan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter & Add Button */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === cat
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <button
              onClick={() => setShowForm(!showForm)}
              className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-primary-dark transition-colors"
            >
              {showForm ? <X size={16} /> : <Plus size={16} />}
              {showForm ? 'Cancel' : 'Add Blog'}
            </button>
          </div>

          {/* Add Blog Form */}
          {showForm && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-gray-50 rounded-2xl p-8 mb-10 border border-gray-200"
            >
              <h2 className="text-xl font-bold text-secondary mb-6">Add New Blog Post</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                    <input
                      type="text"
                      required
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                      placeholder="Blog title"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Author</label>
                    <input
                      type="text"
                      required
                      value={formData.author}
                      onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                      placeholder="Author name"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                    >
                      <option>Tax</option>
                      <option>Corporate</option>
                      <option>Legal</option>
                      <option>Business</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Image URL (optional)</label>
                    <input
                      type="text"
                      value={formData.image}
                      onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                      placeholder="/blog1.jpg or URL"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Excerpt</label>
                  <input
                    type="text"
                    required
                    value={formData.excerpt}
                    onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                    placeholder="Short description"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Content</label>
                  <textarea
                    required
                    rows={6}
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none resize-none"
                    placeholder="Full blog content..."
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-dark transition-colors"
                >
                  <Plus size={18} />
                  Publish Blog
                </button>
              </form>
            </motion.div>
          )}

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog, index) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {blog.category}
                      </span>
                    </div>
                    <button
                      onClick={() => handleDelete(blog.id)}
                      className="absolute top-4 right-4 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-red-50 text-gray-500 hover:text-red-500 transition-colors"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {blog.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <User size={12} />
                        {blog.author}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-secondary mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
                      {blog.excerpt}
                    </p>
                    <Link
                      to={`/blogs/${blog.id}`}
                      className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all"
                    >
                      Read More <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredBlogs.length === 0 && (
            <div className="text-center py-20">
              <Tag size={48} className="text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">No blogs found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

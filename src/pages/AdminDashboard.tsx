import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  LogOut, Mail, MessageSquare, Trash2, Eye, EyeOff,
  Plus, FileText, User, Calendar, Search, BarChart3,
  Users, BookOpen, Inbox
} from 'lucide-react';
import { getMessages, deleteMessage, markAsRead, type Message } from '../lib/messageStore';
import { getBlogs, deleteBlog, type BlogPost } from '../lib/blogStore';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'messages' | 'blogs'>('messages');
  const [messages, setMessages] = useState<Message[]>([]);
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const isAuth = localStorage.getItem('alfa_admin_auth') === 'true';
    const loginTime = localStorage.getItem('alfa_admin_login_time');
    const sessionExpired = loginTime && Date.now() - parseInt(loginTime) > 24 * 60 * 60 * 1000;

    if (!isAuth || sessionExpired) {
      localStorage.removeItem('alfa_admin_auth');
      localStorage.removeItem('alfa_admin_login_time');
      navigate('/admin');
    }
  }, [navigate]);

  useEffect(() => {
    setMessages(getMessages());
    setBlogs(getBlogs());
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('alfa_admin_auth');
    localStorage.removeItem('alfa_admin_login_time');
    navigate('/admin');
  };

  const handleDeleteMessage = (id: string) => {
    if (confirm('Delete this message?')) {
      deleteMessage(id);
      setMessages(getMessages());
    }
  };

  const handleMarkRead = (id: string) => {
    markAsRead(id);
    setMessages(getMessages());
  };

  const handleDeleteBlog = (id: string) => {
    if (confirm('Delete this blog post?')) {
      deleteBlog(id);
      setBlogs(getBlogs());
    }
  };

  const filteredMessages = messages.filter(m =>
    m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    m.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    m.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredBlogs = blogs.filter(b =>
    b.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    b.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const unreadCount = messages.filter(m => !m.read).length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <img src="/uploads/upload_1.jpg" alt="ALFA" className="h-10 w-auto rounded" />
              <div>
                <h1 className="text-lg font-bold text-secondary">ALFA Admin</h1>
                <p className="text-xs text-gray-500">Dashboard</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-gray-600 hover:text-red-500 transition-colors text-sm font-medium"
            >
              <LogOut size={16} />
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { icon: Inbox, label: 'Total Messages', value: messages.length, color: 'bg-blue-50 text-blue-600' },
            { icon: Mail, label: 'Unread', value: unreadCount, color: 'bg-orange-50 text-orange-600' },
            { icon: BookOpen, label: 'Blog Posts', value: blogs.length, color: 'bg-green-50 text-green-600' },
            { icon: Users, label: 'Clients', value: '500+', color: 'bg-purple-50 text-purple-600' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm"
            >
              <div className={`w-10 h-10 rounded-lg ${stat.color} flex items-center justify-center mb-3`}>
                <stat.icon size={20} />
              </div>
              <p className="text-2xl font-bold text-secondary">{stat.value}</p>
              <p className="text-gray-500 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => { setActiveTab('messages'); setSearchTerm(''); }}
              className={`flex items-center gap-2 px-6 py-4 text-sm font-medium transition-colors ${
                activeTab === 'messages'
                  ? 'text-primary border-b-2 border-primary bg-orange-50/50'
                  : 'text-gray-600 hover:text-secondary'
              }`}
            >
              <MessageSquare size={18} />
              Messages
              {unreadCount > 0 && (
                <span className="bg-primary text-white text-xs px-2 py-0.5 rounded-full">{unreadCount}</span>
              )}
            </button>
            <button
              onClick={() => { setActiveTab('blogs'); setSearchTerm(''); }}
              className={`flex items-center gap-2 px-6 py-4 text-sm font-medium transition-colors ${
                activeTab === 'blogs'
                  ? 'text-primary border-b-2 border-primary bg-orange-50/50'
                  : 'text-gray-600 hover:text-secondary'
              }`}
            >
              <BookOpen size={18} />
              Blog Posts
            </button>
          </div>

          {/* Search */}
          <div className="p-4 border-b border-gray-100">
            <div className="relative max-w-md">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={`Search ${activeTab}...`}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm"
              />
            </div>
          </div>

          {/* Messages Tab */}
          {activeTab === 'messages' && (
            <div className="divide-y divide-gray-100">
              {filteredMessages.length === 0 ? (
                <div className="p-12 text-center">
                  <Inbox size={48} className="text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500">No messages found.</p>
                </div>
              ) : (
                filteredMessages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`p-5 hover:bg-gray-50 transition-colors ${!msg.read ? 'bg-orange-50/30' : ''}`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                            <User size={16} className="text-primary" />
                          </div>
                          <div className="min-w-0">
                            <p className="font-semibold text-secondary text-sm truncate">{msg.name}</p>
                            <p className="text-gray-500 text-xs">{msg.email} {msg.phone && `| ${msg.phone}`}</p>
                          </div>
                          {!msg.read && (
                            <span className="bg-primary text-white text-xs px-2 py-0.5 rounded-full shrink-0">New</span>
                          )}
                        </div>
                        <p className="font-medium text-secondary text-sm mb-1 flex items-center gap-2">
                          <FileText size={14} className="text-primary" />
                          {msg.subject}
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">{msg.message}</p>
                        <p className="text-gray-400 text-xs mt-2">
                          <Calendar size={12} className="inline mr-1" />
                          {new Date(msg.date).toLocaleString()}
                        </p>
                      </div>
                      <div className="flex flex-col gap-2 shrink-0">
                        {!msg.read && (
                          <button
                            onClick={() => handleMarkRead(msg.id)}
                            className="p-2 text-gray-400 hover:text-primary hover:bg-orange-50 rounded-lg transition-colors"
                            title="Mark as read"
                          >
                            <Eye size={16} />
                          </button>
                        )}
                        <button
                          onClick={() => handleDeleteMessage(msg.id)}
                          className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                          title="Delete"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {/* Blogs Tab */}
          {activeTab === 'blogs' && (
            <div className="divide-y divide-gray-100">
              {filteredBlogs.length === 0 ? (
                <div className="p-12 text-center">
                  <BookOpen size={48} className="text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500">No blog posts found.</p>
                </div>
              ) : (
                filteredBlogs.map((blog) => (
                  <div key={blog.id} className="p-5 hover:bg-gray-50 transition-colors">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex gap-4 flex-1 min-w-0">
                        <img
                          src={blog.image}
                          alt={blog.title}
                          className="w-16 h-16 rounded-lg object-cover shrink-0"
                        />
                        <div className="min-w-0">
                          <p className="font-semibold text-secondary text-sm truncate">{blog.title}</p>
                          <p className="text-gray-500 text-xs mt-1">
                            By {blog.author} | {blog.category} | {blog.date}
                          </p>
                          <p className="text-gray-600 text-sm mt-1 line-clamp-2">{blog.excerpt}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => handleDeleteBlog(blog.id)}
                        className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors shrink-0"
                        title="Delete"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

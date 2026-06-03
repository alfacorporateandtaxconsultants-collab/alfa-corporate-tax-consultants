import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import TaxServices from './pages/TaxServices';
import CorporateServices from './pages/CorporateServices';
import Reviews from './pages/Reviews';
import Blogs from './pages/Blogs';
import BlogDetail from './pages/BlogDetail';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import ImportantLinks from './pages/ImportantLinks';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const { pathname } = useLocation();
  const isAdmin = pathname.startsWith('/admin');

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <ScrollToTop />
      {!isAdmin && <Navbar />}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/tax" element={<TaxServices />} />
          <Route path="/services/corporate" element={<CorporateServices />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<BlogDetail />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/links" element={<ImportantLinks />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Routes>
      </main>
      {!isAdmin && <Footer />}
      {!isAdmin && <WhatsAppFloat />}
    </div>
  );
}

export default App;

import { useMemo } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { SiteProvider } from './context/SiteContext';
import ErrorBoundary from './components/ErrorBoundary';
import { OfflineBanner } from './components/OfflineBanner';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import StickyDownloadBar from './components/StickyDownloadBar';
import AdminLogin from './admin/AdminLogin';
import AdminLayout from './admin/AdminLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import FeaturesPage from './pages/FeaturesPage';
import ProductsPage from './pages/ProductsPage';
import TestimonialsPage from './pages/TestimonialsPage';
import BlogPage from './pages/BlogPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';

function SiteRoutes() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950 flex flex-col">
      <StickyDownloadBar />
      <Navbar />
      <main className="flex-grow pt-18">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}

function App() {
  const navigate = useNavigate();
  const isAuthenticated = useMemo(
    () => sessionStorage.getItem('ops_admin') === '1' || localStorage.getItem('ops_admin') === '1',
    []
  );

  const handleLogin = () => {
    sessionStorage.setItem('ops_admin', '1');
    localStorage.setItem('ops_admin', '1');
    navigate('/admin/dashboard');
  };

  const handleLogout = () => {
    sessionStorage.removeItem('ops_admin');
    localStorage.removeItem('ops_admin');
    navigate('/');
  };

  return (
    <ErrorBoundary>
      <SiteProvider>
        <Routes>
          <Route path="/admin" element={<AdminLogin onLogin={handleLogin} />} />
          <Route
            path="/admin/*"
            element={
              isAuthenticated ? <AdminLayout onLogout={handleLogout} /> : <Navigate to="/admin" replace />
            }
          />
          <Route path="/*" element={<SiteRoutes />} />
        </Routes>
        <OfflineBanner />
      </SiteProvider>
    </ErrorBoundary>
  );
}

export default App;

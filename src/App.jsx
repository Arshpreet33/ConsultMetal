/**
 * App Component - ConsultMetal
 * 
 * Main application component with routing
 * New design at / and old design at /old/*
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';

// New Design Layout & Pages
import NewLayout from './components/new/NewLayout';
import HomePage from './pages/new/HomePage';
import NewAboutPage from './pages/new/AboutPage';
import NewServicesPage from './pages/new/ServicesPage';
import NewServicesPageV2 from './pages/new/ServicesPageV2';
import NewServiceDetailPage from './pages/new/ServiceDetailPage';
import NewProductsPage from './pages/new/ProductsPage';
import NewProductDetailPage from './pages/new/ProductDetailPage';
import NewContactPage from './pages/new/ContactPage';

// Old Design Layout & Pages
import OldLayout from './components/Layout/OldLayout';
import OldAboutPage from './pages/AboutPage';
import OldAboutPageV2 from './pages/AboutPageV2';
import OldContactPage from './pages/ContactPage';
import OldProductsPage from './pages/ProductsPage';
import OldProductDetailPage from './pages/ProductDetailPage';
import OldServicesPage from './pages/ServicesPageV2';
import OldServicesPageV2 from './pages/ServicesPage';
import OldServicesPageV3 from './pages/ServicesPageV3';
import OldServiceDetailPage from './pages/ServiceDetailPage';

import './App.css';

// Component to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* New Design Routes */}
          <Route element={<NewLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/about" element={<NewAboutPage />} />
            <Route path="/services" element={<NewServicesPageV2 />} />
            <Route path="/services/:slug" element={<NewServiceDetailPage />} />
            <Route path="/products" element={<NewProductsPage />} />
            <Route path="/products/:slug" element={<NewProductDetailPage />} />
            <Route path="/contact" element={<NewContactPage />} />
          </Route>

          {/* Old Design Routes */}
          <Route path="/old" element={<OldLayout />}>
            <Route index element={<OldAboutPage />} />
            <Route path="about" element={<OldAboutPage />} />
            <Route path="about-v2" element={<OldAboutPageV2 />} />
            <Route path="contact" element={<OldContactPage />} />
            <Route path="products" element={<OldProductsPage />} />
            <Route path="products/:slug" element={<OldProductDetailPage />} />
            <Route path="services" element={<OldServicesPage />} />
            <Route path="services-v2" element={<OldServicesPageV2 />} />
            <Route path="services-v3" element={<OldServicesPageV3 />} />
            <Route path="services/:slug" element={<OldServiceDetailPage />} />
          </Route>
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;

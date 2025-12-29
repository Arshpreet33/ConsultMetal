/**
 * App Component - ConsultMetal
 * Main application component with routing
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';

// New Design Layout & Pages
import NewLayout from './components/new/NewLayout';
import HomePage from './pages/new/HomePage';
import NewAboutPage from './pages/new/AboutPage';
import NewServicesPageV2 from './pages/new/ServicesPageV2';
import NewServiceDetailPage from './pages/new/ServiceDetailPage';
import NewProductsPage from './pages/new/ProductsPage';
import NewProductDetailPage from './pages/new/ProductDetailPage';
import NewContactPage from './pages/new/ContactPage';

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
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
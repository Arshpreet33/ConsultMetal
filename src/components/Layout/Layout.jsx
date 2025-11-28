/**
 * Layout Component - ConsultMetal
 * 
 * Main wrapper for all pages with Header and Footer
 */

import Header from './Header';
import Footer from './Footer';
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

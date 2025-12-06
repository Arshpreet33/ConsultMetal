/**
 * Old Layout Component - ConsultMetal
 * Wrapper for old design routes at /old/*
 */

import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './OldLayout.css';

const OldLayout = () => {
  return (
    <div className="old-layout">
      <Header />
      <main className="old-main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default OldLayout;

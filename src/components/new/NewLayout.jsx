/**
 * NewLayout Component - ConsultMetal New Design
 * Main layout wrapper for new design pages
 */

import { Outlet } from 'react-router-dom';
import NewHeader from './NewHeader';
import NewFooter from './NewFooter';
import '../../assets/styles/new/_globals.scss';

const NewLayout = () => {
  return (
    <div className="new-layout">
      <NewHeader />
      <main className="main-content">
        <Outlet />
      </main>
      <NewFooter />
    </div>
  );
};

export default NewLayout;

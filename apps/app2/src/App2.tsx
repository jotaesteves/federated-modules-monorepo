import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Page1 from './pages/page1/Page1';
import Page2 from './pages/page2/Page2';

const App2: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>App2 title</title>
      </Helmet>
      <div>
        <Routes>
          <Route path="page-1/*" element={<Page1 />} />
          <Route path="page-2/*" element={<Page2 />} />
          <Route path="*" element={<Page2 />} />
        </Routes>
      </div>
    </>
  );
};

export default App2;

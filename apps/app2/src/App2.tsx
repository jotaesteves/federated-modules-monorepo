import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Page1 from './pages/page1/Page1';
import Page2 from './pages/page2/Page2';
import Button from 'shared/components/Button';
import Card from 'shared/components/Card';

const App2: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>App2 title</title>
      </Helmet>
      <div>
        <div>
          <h1>This is the very beginning of app2</h1>
          <p>And some button below (from shared):</p>
          <Button>Shared Button app2 root</Button>
          <Card title="Shared Card">
            <p>This is a shared card from app2.</p>
          </Card>
        </div>
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

import * as React from 'react';
import { Helmet } from 'react-helmet';

const App1: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>App1 title</title>
      </Helmet>
      <div className="p-6">
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <h1 className="text-2xl font-semibold tracking-tight">
            This is the very beginning of app1
          </h1>
        </div>
      </div>
    </>
  );
};

export default App1;

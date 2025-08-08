import * as React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Page1 from './pages/page1/Page1';
import Page2 from './pages/page2/Page2';
import Button from 'shared/components/Button';
import { swapObjectKeyValue } from 'shared/utils/transformations';

const App1: React.FC = () => {
  const obj = { a: 'x', b: 'y', c: 'z' };
  console.log(
    'app1 swapObjectKeyValue demo',
    JSON.stringify(obj),
    JSON.stringify(swapObjectKeyValue(obj))
  );

  return (
    <>
      <Helmet>
        <title>Visao 360</title>
      </Helmet>
      <div className="p-6">
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <h1 className="text-2xl font-semibold tracking-tight">
            This is the very beginning of app1
          </h1>
          <p className="mt-1 text-sm text-slate-600">This remote exposes two nested pages.</p>

          <div className="mt-4 flex items-center gap-3">
            <Button>Shared Button app1 root</Button>
            <nav className="ml-auto text-sm">
              <ul className="flex items-center gap-3">
                <li>
                  <Link className="text-sky-600 hover:text-sky-700" to="page-1">
                    Go to page-1
                  </Link>
                </li>
                <li>
                  <Link className="text-sky-600 hover:text-sky-700" to="page-2">
                    Go to page-2
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="mt-6">
          <Routes>
            <Route path="page-1/*" element={<Page1 />} />
            <Route path="page-2/*" element={<Page2 />} />
            <Route path="*" element={<Page2 />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App1;

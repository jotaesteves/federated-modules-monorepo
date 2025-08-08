import * as React from 'react';
import { Helmet } from 'react-helmet';

// Import the CSS showcase component to demonstrate all CSS approaches
const CSSShowcase = React.lazy(() => import('shared/components/CSSShowcase'));

const CSSDemo: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>CSS Demo - All Styling Approaches</title>
        <meta
          name="description"
          content="Demonstration of all CSS approaches available in the project"
        />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <React.Suspense
          fallback={
            <div className="flex items-center justify-center min-h-screen">
              <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
            </div>
          }
        >
          <CSSShowcase title="Complete CSS Support Demo" />
        </React.Suspense>
      </div>
    </>
  );
};

export default CSSDemo;

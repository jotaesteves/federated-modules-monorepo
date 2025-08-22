import * as React from 'react';

export const FallbackSpinner: React.FC = () => (
  <div className="h-16 bg-white flex items-center justify-center">
    <div className="flex items-center gap-2">
      <div className="h-4 w-4 animate-spin rounded-full border-2 border-gray-300 border-t-blue-600"></div>
      <p className="text-gray-600">Loading...</p>
    </div>
  </div>
);

export default FallbackSpinner;

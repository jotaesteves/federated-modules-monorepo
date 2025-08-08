import * as React from 'react';

const Incidents: React.FC = () => {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
      <h3 className="text-lg font-semibold text-slate-900 mb-3">Incidents</h3>
      <div className="space-y-3">
        <div className="border-l-4 border-red-400 pl-3">
          <p className="text-sm font-medium text-slate-900">Card Blocked</p>
          <p className="text-xs text-slate-600">2025-07-28 - Resolved</p>
        </div>
        <div className="border-l-4 border-yellow-400 pl-3">
          <p className="text-sm font-medium text-slate-900">Failed Transaction</p>
          <p className="text-xs text-slate-600">2025-07-25 - Under Review</p>
        </div>
        <div className="border-l-4 border-green-400 pl-3">
          <p className="text-sm font-medium text-slate-900">Password Reset</p>
          <p className="text-xs text-slate-600">2025-07-20 - Resolved</p>
        </div>
      </div>
    </div>
  );
};

export default Incidents;

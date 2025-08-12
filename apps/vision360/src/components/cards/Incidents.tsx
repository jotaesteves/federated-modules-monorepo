import * as React from 'react';
import Card from 'shared/components/Card';

const Incidents: React.FC = () => {
  return (
    <Card icon="👤↺" title="Reclamações / Incidentes" className="h-full">
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
    </Card>
  );
};

export default Incidents;

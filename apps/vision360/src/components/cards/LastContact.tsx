import * as React from 'react';

const LastContact: React.FC = () => {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
      <h3 className="text-lg font-semibold text-slate-900 mb-3">Last Contact</h3>
      <div className="space-y-2">
        <p className="text-sm text-slate-600">Date: 2025-08-01</p>
        <p className="text-sm text-slate-600">Channel: Phone</p>
        <p className="text-sm text-slate-600">Agent: John Doe</p>
        <p className="text-sm text-slate-600">Subject: Account inquiry</p>
      </div>
    </div>
  );
};

export default LastContact;

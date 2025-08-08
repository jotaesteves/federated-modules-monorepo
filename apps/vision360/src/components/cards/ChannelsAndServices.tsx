import * as React from 'react';

const ChannelsAndServices: React.FC = () => {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
      <h3 className="text-lg font-semibold text-slate-900 mb-3">Channels & Services</h3>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-sm text-slate-600">Online Banking</span>
          <span className="text-xs text-green-600">Active</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-slate-600">Mobile App</span>
          <span className="text-xs text-green-600">Active</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-slate-600">SMS Alerts</span>
          <span className="text-xs text-gray-500">Inactive</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-slate-600">Email Alerts</span>
          <span className="text-xs text-green-600">Active</span>
        </div>
      </div>
    </div>
  );
};

export default ChannelsAndServices;

import * as React from 'react';
import Card from 'shared/components/Card';

const ChannelsAndServices: React.FC = () => {
  return (
    <Card title="Channels & Services" className="h-full">
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
    </Card>
  );
};

export default ChannelsAndServices;

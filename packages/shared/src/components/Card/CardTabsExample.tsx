import React from 'react';
import CardTabs, { CardTabItem } from './CardTabs';

// Example usage of CardTabs component
const CardTabsExample: React.FC = () => {
  const tabs: CardTabItem[] = [
    {
      value: 'overview',
      label: 'Overview',
      content: (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Overview Content</h3>
          <p>This is the overview tab content. You can put any React components here.</p>
        </div>
      ),
    },
    {
      value: 'details',
      label: 'Details',
      content: (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Details Content</h3>
          <p>This is the details tab content with more specific information.</p>
          <ul className="list-disc list-inside">
            <li>Detail item 1</li>
            <li>Detail item 2</li>
            <li>Detail item 3</li>
          </ul>
        </div>
      ),
    },
    {
      value: 'settings',
      label: 'Settings',
      content: (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Settings Content</h3>
          <p>Configure your preferences here.</p>
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Save Settings
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">CardTabs Component Example</h1>

      <CardTabs
        title="Card with Tabs"
        description="This card component includes tabbed content"
        icon={<span>📋</span>}
        tabs={tabs}
        defaultValue="overview"
        className="w-full"
      />
    </div>
  );
};

export default CardTabsExample;

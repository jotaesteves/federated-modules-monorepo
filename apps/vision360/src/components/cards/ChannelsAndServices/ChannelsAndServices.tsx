import * as React from 'react';
import Card from 'shared/components/Card';
import Icon from 'shared/components/Icon';
import mockData from './mock-data/mock-data.json';

interface ServiceSection {
  title: string;
  items: string[];
}

interface ChannelsAndServicesData {
  digitalChannels: ServiceSection;
  services: ServiceSection;
}

interface ServiceItemProps {
  item: string;
  isLast?: boolean;
}

interface ServiceSectionProps {
  section: ServiceSection;
  className?: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ item, isLast = false }) => (
  <div
    className={`flex justify-between items-center ${
      !isLast ? 'border-b border-gray-200 pb-1' : ''
    }`}
  >
    <span className="text-sm">{item}</span>
  </div>
);

const ServiceSection: React.FC<ServiceSectionProps> = ({ section, className = '' }) => (
  <div className={`space-y-2 ${className}`}>
    <div className="flex justify-between items-center">
      <h3 className="font-bold">{section.title}</h3>
    </div>

    <br />

    {section.items?.map((item, index) => (
      <ServiceItem
        key={`${item}-${index}`}
        item={item}
        isLast={index === section.items.length - 1}
      />
    ))}
  </div>
);

const ChannelsAndServices: React.FC = () => {
  const data: ChannelsAndServicesData = mockData.channelsAndServices;

  if (!data) {
    return (
      <Card
        icon={<Icon type="box" className="bg-green-500" />}
        title="Canais e serviços"
        className="h-full"
      >
        <div className="flex items-center justify-center h-32">
          <span className="text-gray-500">Dados não disponíveis</span>
        </div>
      </Card>
    );
  }

  return (
    <Card
      icon={<Icon type="box" className="bg-green-500" />}
      title="Canais e serviços"
      className="h-full"
    >
      <div className="grid grid-cols-2 divide-x divide-gray-200">
        {data.digitalChannels && <ServiceSection section={data.digitalChannels} className="pr-4" />}
        {data.services && <ServiceSection section={data.services} className="pl-4" />}
      </div>
    </Card>
  );
};

export default ChannelsAndServices;

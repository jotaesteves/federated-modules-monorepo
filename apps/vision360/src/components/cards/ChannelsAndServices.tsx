import * as React from 'react';
import Card from 'shared/components/Card';

const ChannelsAndServices: React.FC = () => {
  const channelsData = ['Internet Banking', 'Millennium IZI', 'Linha Millennium bim'];

  const servicesData = ['Cartão de Débito Estudante', 'Extracto Mensal', 'Seguro de Vida'];

  const renderItems = (items: string[]) =>
    items.map((item, index) => (
      <div
        key={item}
        className={`flex justify-between items-center ${
          index < items.length - 1 ? 'border-b border-gray-200 pb-1' : ''
        }`}
      >
        <span className="text-sm">{item}</span>
      </div>
    ));

  return (
    <Card icon="📦" title="Canais e serviços" className="h-full">
      <div className="grid grid-cols-2 divide-x divide-gray-200">
        <div className="pr-4 space-y-2">
          <div className="flex justify-between items-center">
            <h3 className="font-bold">Canais Digitais</h3>
          </div>

          <br />

          {renderItems(channelsData)}
        </div>

        <div className="pl-4 space-y-2">
          <div className="flex justify-between items-center">
            <h3 className="font-bold">Serviços</h3>
          </div>

          <br />

          {renderItems(servicesData)}
        </div>
      </div>
    </Card>
  );
};

export default ChannelsAndServices;

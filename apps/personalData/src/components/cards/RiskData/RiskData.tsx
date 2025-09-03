import { Card, CardItemLabel, Icon } from 'shared/components';
import dataJson from './mock-data/mock-data.json';

export default function RiskData() {
  return (
    <Card
      icon={<Icon type="danger" className="bg-orange-500" />}
      title="Dados de Risco"
      className="h-fit"
    >
      {Object.entries(dataJson as Record<string, string>).map(([label, value]) => (
        <CardItemLabel key={label} title={label} text={value} className="pb-[0.9375rem]" />
      ))}
    </Card>
  );
}

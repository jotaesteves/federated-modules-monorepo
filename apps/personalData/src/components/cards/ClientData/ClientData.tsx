import { Card, CardItemLabel, Icon } from 'shared/components';
import dataJson from './mock-data/mock-data.json';

export default function ClientData() {
  return (
    <Card
      icon={<Icon type="person" className="bg-teal" />}
      title="Dados do Cliente"
      className="h-fit"
    >
      {Object.entries(dataJson as Record<string, string>).map(([label, value]) => (
        <CardItemLabel key={label} title={label} text={value} className="pb-[0.9375rem]" />
      ))}
    </Card>
  );
}

import { CardItemLabel, Card, Icon } from 'shared/components';
import dataJson from './mock-data/mock-data.json';

export default function Contacts() {
  return (
    <Card
      icon={<Icon type="contacts" className="bg-green-400" />}
      title="Contactos"
      className="h-fit"
    >
      {Object.entries(dataJson as Record<string, string>).map(([label, value]) => (
        <CardItemLabel key={label} title={label} text={value} className="pb-[0.9375rem]" />
      ))}
    </Card>
  );
}

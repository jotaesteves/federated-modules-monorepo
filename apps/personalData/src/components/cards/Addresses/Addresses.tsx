import Card from 'shared/components/Card';
import Icon from 'shared/components/Icon';
import CardItemLabel from 'shared/components/CardItemLabel';
import dataJson from './mock-data/mock-data.json';

export default function Addresses() {
  return (
    <Card
      icon={<Icon type="location" className="bg-primary-500" />}
      title="Endereços"
      className="h-fit"
    >
      {Object.entries(dataJson as Record<string, string>).map(([label, value]) => (
        <CardItemLabel key={label} title={label} text={value} className="pb-[0.9375rem]" />
      ))}
    </Card>
  );
}

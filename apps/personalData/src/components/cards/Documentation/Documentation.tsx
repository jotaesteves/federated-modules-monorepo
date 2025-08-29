import { CardItemLabel, Card, Icon } from 'shared/components';
import dataJson from './mock-data/mock-data.json';

export default function Documentation() {
  return (
    <Card
      icon={<Icon type="documentLayout" className="bg-green-400" />}
      title="Documentação"
      className="h-fit"
    >
      {Object.entries(dataJson as Record<string, string>).map(([label, value]) => (
        <CardItemLabel key={label} title={label} text={value} className="pb-[0.9375rem]" />
      ))}
    </Card>
  );
}

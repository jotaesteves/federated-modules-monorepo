import { Card } from 'shared/components';

export default function PersonalData() {
  return (
    <Card title="Dados Pessoais" className="h-full">
      <div className="grid grid-cols-2">
        <div className="flex justify-between items-center">
          <h3>Activos</h3>
          <h4>17,999</h4>MZN
        </div>
        <div className="flex justify-between items-center">
          <h3>Passivos</h3>
          <h4>17,999</h4>MZN
        </div>
      </div>
    </Card>
  );
}

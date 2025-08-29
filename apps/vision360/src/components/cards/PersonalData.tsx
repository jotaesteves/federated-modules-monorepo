import { Card } from 'shared/components';
import { DatePicker } from 'shared/components';

export default function PersonalData() {
  return (
    <Card icon="👤" title="Dados Pessoais" className="h-full">
      <p>nome completo</p>
      <h4>Nome Sobrenome</h4>
      <DatePicker />
      <br />
      <p>CIF</p>
      <h4>123456789</h4>
      <br />
      <p>NUIB</p>
      <h4>00000000000</h4>
      <br />
      <p>Segmento</p>
      <h4>MASS MARKET</h4>
      <br />
    </Card>
  );
}

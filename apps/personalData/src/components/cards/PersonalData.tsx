import Card from 'shared/components/Card';
import CardItemLabel from 'shared/components/CardItemLabel';

export default function PersonalData() {
  return (
    <Card title="Dados Pessoais" className="h-full">
      <CardItemLabel title="Nome completo" text="Jacinto Fazenda Protótipo" />
      <p className="text-sm font-bold text-gray-50">nome completo</p>
      <h4>Nome Sobrenome</h4>
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

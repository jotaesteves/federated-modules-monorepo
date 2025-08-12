import Card from 'shared/components/Card';

export default function PersonalData() {
  return (
    <Card icon="👤" title="Dados Pessoais" className="h-full">
      <p className='text-xs text-gray-50 '>nome completo</p>
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

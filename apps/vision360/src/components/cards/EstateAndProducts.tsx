import { Card } from 'shared/components';

export default function EstateAndProducts() {
  return (
    <Card title="Património e produtos" className="h-full">
      <div className="grid grid-cols-2 divide-x divide-gray-200">
        <div className="pr-4 space-y-2">
          <div className="flex justify-between items-center">
            <h3 className="font-bold">Activos</h3>
            <span className="flex items-baseline">
              <h4 className="text-md pr-2">17.999,24</h4>
              <span className="text-sm text-gray-500">MZN</span>
            </span>
          </div>

          <br />

          <div className="flex justify-between items-center border-b border-gray-200 pb-1">
            <span className="text-sm">Conta Corrente</span>
            <span className="flex items-baseline">
              <span className="text-sm pr-2">5.432,10</span>
              <span className="text-xs text-gray-500">MZN</span>
            </span>
          </div>

          <div className="flex justify-between items-center border-b border-gray-200 pb-1">
            <span className="text-sm">Investimentos</span>
            <span className="flex items-baseline">
              <span className="text-sm pr-2">8.267,89</span>
              <span className="text-xs text-gray-500">MZN</span>
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-sm">Poupanças</span>
            <span className="flex items-baseline">
              <span className="text-sm pr-2">4.299,25</span>
              <span className="text-xs text-gray-500">MZN</span>
            </span>
          </div>
        </div>

        <div className="pl-4 space-y-2">
          <div className="flex justify-between items-center">
            <h3 className="font-bold">Passivos</h3>
            <span className="flex items-baseline">
              <h4 className="text-md pr-2">17.999,24</h4>
              <span className="text-sm text-gray-500">MZN</span>
            </span>
          </div>

          <br />

          <div className="flex justify-between items-center border-b border-gray-200 pb-1">
            <span className="text-sm">Empréstimo Habitação</span>
            <span className="flex items-baseline">
              <span className="text-sm pr-2">12.450,00</span>
              <span className="text-xs text-gray-500">MZN</span>
            </span>
          </div>

          <div className="flex justify-between items-center border-b border-gray-200 pb-1">
            <span className="text-sm">Cartão de Crédito</span>
            <span className="flex items-baseline">
              <span className="text-sm pr-2">3.249,24</span>
              <span className="text-xs text-gray-500">MZN</span>
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-sm">Empréstimo Pessoal</span>
            <span className="flex items-baseline">
              <span className="text-sm pr-2">2.300,00</span>
              <span className="text-xs text-gray-500">MZN</span>
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
}

import React from 'react';
import { Helmet } from 'react-helmet';
import CardAccordion from 'shared/components/CardAccordion';
import { CardAccordionHeader } from './components/CardAccordionHeader/CardAccordionHeader';
import { CardAccordionItem } from './components/CardAccordionItem/CardAccordionItem';
import { Badge } from 'shared/components/ui';

const AssetsProducts: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Assets Products</title>
      </Helmet>
      <div className="p-2 h-full max-h-[calc(75vh)] overflow-y-auto">
        <div className="relative h-full grid grid-cols-3 grid-rows-2 gap-2">
          {/* Column 1 ------------------------------------------------------------ */}
          <div className="grid gap-1">
            <CardAccordion
              header={
                <CardAccordionHeader
                  icon={'📊'}
                  title="Contas à Ordem"
                  value="16.272.24"
                  currency="MZN"
                />
              }
            >
              <CardAccordionItem>
                <div className="flex flex-col w-full space-y-1">
                  <div className="flex justify-between items-center">
                    <p className="text-xs font-medium">73653476234 - Conta Salário</p>
                    <p className="text-xs text-gray-500 text-right">Saldo disponível</p>
                  </div>
                  <div className="flex justify-between text-xs">
                    <p>
                      <Badge variant="active">ACTIVA</Badge>
                    </p>
                    <p className="text-right">0.24 MZN</p>
                  </div>
                </div>
              </CardAccordionItem>
              <CardAccordionItem>
                <div className="flex flex-col w-full space-y-1">
                  <div className="flex justify-between items-center">
                    <p className="text-xs font-medium">736534723476 - Conta Jovem</p>
                    <p className="text-xs text-gray-500 text-right">Saldo disponível</p>
                  </div>
                  <div className="flex justify-between text-xs">
                    <p>
                      <Badge variant="inactive">INACTIVA</Badge>
                    </p>
                    <p className="text-right">10.272.00 MZN</p>
                  </div>
                </div>
              </CardAccordionItem>
            </CardAccordion>
            <CardAccordion
              header={
                <CardAccordionHeader
                  icon={'💰'}
                  title="Depósitos a Prazo"
                  value="16.272.24"
                  currency="MZN"
                />
              }
            >
              <CardAccordionItem>
                <div className="flex flex-col w-full space-y-1">
                  <div className="flex justify-between items-center">
                    <p className="text-xs font-medium">73653476234 - Conta Salário</p>
                    <p className="text-xs text-gray-500 text-right">Saldo disponível</p>
                  </div>
                  <div className="flex justify-between text-xs">
                    <p>
                      <Badge variant="active">ACTIVA</Badge>
                    </p>
                    <p className="text-right">0.24 MZN</p>
                  </div>
                </div>
              </CardAccordionItem>
              <CardAccordionItem>
                <div className="flex flex-col w-full space-y-1">
                  <div className="flex justify-between items-center">
                    <p className="text-xs font-medium">736534723476 - Conta Jovem</p>
                    <p className="text-xs text-gray-500 text-right">Saldo disponível</p>
                  </div>
                  <div className="flex justify-between text-xs">
                    <p>
                      <Badge variant="inactive">INACTIVA</Badge>
                    </p>
                    <p className="text-right">10.272.00 MZN</p>
                  </div>
                </div>
              </CardAccordionItem>
            </CardAccordion>
            <CardAccordion header={<CardAccordionHeader icon={'🎴'} title="Cartões de Débito" />}>
              <CardAccordionItem>
                <div className="flex flex-col w-full space-y-1">
                  <div className="flex justify-between items-center">
                    <p className="text-xs font-medium">73653476234 - Conta Salário</p>
                    <p className="text-xs text-gray-500 text-right">Saldo disponível</p>
                  </div>
                  <div className="flex justify-between text-xs">
                    <p>
                      <Badge variant="active">ACTIVA</Badge>
                    </p>
                    <p className="text-right">0.24 MZN</p>
                  </div>
                </div>
              </CardAccordionItem>
              <CardAccordionItem>
                <div className="flex flex-col w-full space-y-1">
                  <div className="flex justify-between items-center">
                    <p className="text-xs font-medium">736534723476 - Conta Jovem</p>
                    <p className="text-xs text-gray-500 text-right">Saldo disponível</p>
                  </div>
                  <div className="flex justify-between text-xs">
                    <p>
                      <Badge variant="inactive">INACTIVA</Badge>
                    </p>
                    <p className="text-right">10.272.00 MZN</p>
                  </div>
                </div>
              </CardAccordionItem>
            </CardAccordion>
          </div>

          {/* Column 2 ------------------------------------------------------------ */}
          <div className="grid gap-1">
            <CardAccordion
              header={
                <CardAccordionHeader
                  icon={'📊'}
                  title="Contas à Ordem"
                  value="16.272.24"
                  currency="MZN"
                />
              }
            >
              <CardAccordionItem>
                <div className="flex flex-col w-full space-y-1">
                  <div className="flex justify-between items-center">
                    <p className="text-xs font-medium">73653476234 - Conta Salário</p>
                    <p className="text-xs text-gray-500 text-right">Saldo disponível</p>
                  </div>
                  <div className="flex justify-between text-xs">
                    <p>
                      <Badge variant="active">ACTIVA</Badge>
                    </p>
                    <p className="text-right">0.24 MZN</p>
                  </div>
                </div>
              </CardAccordionItem>
              <CardAccordionItem>
                <div className="flex flex-col w-full space-y-1">
                  <div className="flex justify-between items-center">
                    <p className="text-xs font-medium">736534723476 - Conta Jovem</p>
                    <p className="text-xs text-gray-500 text-right">Saldo disponível</p>
                  </div>
                  <div className="flex justify-between text-xs">
                    <p>
                      <Badge variant="inactive">INACTIVA</Badge>
                    </p>
                    <p className="text-right">10.272.00 MZN</p>
                  </div>
                </div>
              </CardAccordionItem>
            </CardAccordion>
            <CardAccordion
              header={
                <CardAccordionHeader
                  icon={'💰'}
                  title="Depósitos a Prazo"
                  value="16.272.24"
                  currency="MZN"
                />
              }
            >
              <CardAccordionItem>
                <div className="flex flex-col w-full space-y-1">
                  <div className="flex justify-between items-center">
                    <p className="text-xs font-medium">73653476234 - Conta Salário</p>
                    <p className="text-xs text-gray-500 text-right">Saldo disponível</p>
                  </div>
                  <div className="flex justify-between text-xs">
                    <p>
                      <Badge variant="active">ACTIVA</Badge>
                    </p>
                    <p className="text-right">0.24 MZN</p>
                  </div>
                </div>
              </CardAccordionItem>
              <CardAccordionItem>
                <div className="flex flex-col w-full space-y-1">
                  <div className="flex justify-between items-center">
                    <p className="text-xs font-medium">736534723476 - Conta Jovem</p>
                    <p className="text-xs text-gray-500 text-right">Saldo disponível</p>
                  </div>
                  <div className="flex justify-between text-xs">
                    <p>
                      <Badge variant="inactive">INACTIVA</Badge>
                    </p>
                    <p className="text-right">10.272.00 MZN</p>
                  </div>
                </div>
              </CardAccordionItem>
            </CardAccordion>
          </div>

          {/* Column 3 ------------------------------------------------------------ */}
          <CardAccordion header="Assets Products">
            <p>Assets Products3</p>
          </CardAccordion>
        </div>
      </div>
    </>
  );
};

export default AssetsProducts;

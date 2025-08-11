import React from 'react';
import { Helmet } from 'react-helmet';
import CardAccordion from 'shared/components/CardAccordion';
import { CardAccordionHeader } from './components/CardAccordionHeader/CardAccordionHeader';
import { CardAccordionItem } from './components/CardAccordionItem/CardAccordionItem';

const AssetsProducts: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Assets Products</title>
      </Helmet>
      <div className="p-2 h-full">
        <div className="grid grid-cols-3 grid-rows-2 gap-2">
          <div className="grid gap-2">
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
                    <p className="text-sm font-medium">Conta Salário</p>
                    <p className="text-xs text-gray-500">MZN</p>
                  </div>
                  <div className="flex justify-start">
                    <p className="text-lg font-semibold">16.272.24</p>
                  </div>
                </div>
              </CardAccordionItem>
            </CardAccordion>
            <CardAccordion
              header={
                <CardAccordionHeader title="Depósitos a Prazo" value="16.272.24" currency="MZN" />
              }
            >
              <p>Assets Products</p>
            </CardAccordion>
          </div>
          <CardAccordion header="Assets Products">
            <p>Assets Products2</p>
          </CardAccordion>
          <CardAccordion header="Assets Products">
            <p>Assets Products3</p>
          </CardAccordion>
        </div>
      </div>
    </>
  );
};

export default AssetsProducts;

import * as React from 'react';
import { Helmet } from 'react-helmet';

import PersonalDataCard from './components/cards/PersonalData/PersonalData';
import ClientDataCard from './components/cards/ClientData/ClientData';
import AddressesCard from './components/cards/Addresses/Addresses';
import DocumentationCard from './components/cards/Documentation/Documentation';
import FinancialDataCard from './components/cards/FinancialData/FinancialData';
import ContactsCard from './components/cards/Contacts/Contacts';
import RiskDataCard from './components/cards/RiskData/RiskData';

const PersonalData: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Dados Pessoais</title>
      </Helmet>
      <div className="px-4 py-5 rounded-lg bg-gray-100 w-full h-[calc(100vh_-_194px_-_107px)]">
        <div className="grid grid-cols-4 gap-4 h-full">
          {/* Column 1 */}
          <div className="flex flex-col h-full flex-1 min-h-0 overflow-y-scroll">
            <PersonalDataCard />
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-4 h-full min-h-0 overflow-y-scroll">
            <ClientDataCard />
            <AddressesCard />
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-4 h-full">
            <DocumentationCard />
            <FinancialDataCard />
          </div>

          {/* Column 4 */}
          <div className="flex flex-col gap-4 h-full">
            <ContactsCard />
            <RiskDataCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalData;

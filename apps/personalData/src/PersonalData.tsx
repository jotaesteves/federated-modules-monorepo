import * as React from 'react';
import { Helmet } from 'react-helmet';

import ChannelsAndServices from './components/cards/ChannelsAndServices';
import EstateAndProducts from './components/cards/EstateAndProducts';
import Incidents from './components/cards/Incidents';
import LastContact from './components/cards/LastContact';
import PersonalDataCard from './components/cards/PersonalData';

const PersonalData: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Dados Pessoais</title>
      </Helmet>
      <div className="p-2">
        <div className="grid grid-cols-5 grid-rows-4 gap-2">
          {/* div1 */}
          <div className="row-span-4">
            <PersonalDataCard />
          </div>
          {/* div2 */}
          <div className="col-span-3 row-span-2">
            <EstateAndProducts />
          </div>
          {/* div3 */}
          <div className="col-start-5 row-span-2">
            <LastContact />
          </div>
          {/* div4 */}
          <div className="col-span-3 row-span-2 col-start-2 row-start-3">
            <ChannelsAndServices />
          </div>
          {/* div5 */}
          <div className="col-start-5 row-start-3 row-span-2">
            <Incidents />
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalData;

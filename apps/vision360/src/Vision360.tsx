import * as React from 'react';
import { Helmet } from 'react-helmet';

import ChannelsAndServices from '../../vision360/src/components/cards/ChannelsAndServices';
import EstateAndProducts from '../../vision360/src/components/cards/EstateAndProducts';
import Incidents from '../../vision360/src/components/cards/Incidents';
import LastContact from './components/cards/LastContact/LastContact';
import PersonalData from '../../vision360/src/components/cards/PersonalData';

const Vision360: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Visão 360</title>
      </Helmet>
      <div className="p-2">
        <div className="grid grid-cols-4 grid-rows-4 gap-2">
          {/* div1 */}
          <div className="row-span-4">
            <PersonalData />
          </div>
          {/* div2 */}
          <div className="col-span-2 row-span-2">
            <EstateAndProducts />
          </div>
          {/* div3 */}
          <div className="col-start-4 row-span-2">
            <LastContact />
          </div>
          {/* div4 */}
          <div className="col-span-2 row-span-2 col-start-2 row-start-3">
            <ChannelsAndServices />
          </div>
          {/* div5 */}
          <div className="col-start-4 row-start-3 row-span-2">
            <Incidents />
          </div>
        </div>
      </div>
    </>
  );
};

export default Vision360;

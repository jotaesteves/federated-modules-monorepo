import * as React from 'react';
import { Helmet } from 'react-helmet';
import ChannelsAndServices from 'src/components/cards/ChannelsAndServices';
import EstateAndProducts from 'src/components/cards/EstateAndProducts';
import Incidents from 'src/components/cards/Incidents/Incidents';
import LastContact from 'src/components/cards/LastContact';
import PersonalData from 'src/components/cards/PersonalData';

const Vision360: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Visão 360</title>
      </Helmet>
      <div className="grid grid-cols-24 grid-rows-10 gap-4 px-4 py-5 rounded-lg bg-gray-100 w-full overflow-y-auto  h-[calc(100vh_-_194px_-_107px)]">
        {/* div1 */}
        <div className="row-span-10 col-span-5">
          <PersonalData />
        </div>
        {/* div2 */}
        <div className="col-span-13 col-start-6 row-span-5">
          <EstateAndProducts />
        </div>
        {/* div3 */}
        <div className="col-start-19 col-span-6 row-span-5">
          <LastContact />
        </div>
        {/* div4 */}
        <div className="col-start-6 col-span-13 row-span-5 row-start-6">
          <ChannelsAndServices />
        </div>
        {/* div5 */}
        <div className="col-span-6 col-start-19 row-start-6 row-span-5">
          <Incidents />
        </div>
      </div>
    </>
  );
};

export default Vision360;

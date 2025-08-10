import * as React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Page1 from './pages/page1/Page1';
import Page2 from './pages/page2/Page2';
import Button from 'shared/components/Button';
import { swapObjectKeyValue } from 'shared/utils/transformations';
import PersonalDataCard from './components/cards/PersonalData';
import EstateAndProducts from './components/cards/EstateAndProducts';
import ChannelsAndServices from './components/cards/ChannelsAndServices';
import Incidents from './components/cards/Incidents';
import LastContact from './components/cards/LastContact';

const PersonalData: React.FC = () => {
  const obj = { a: 'x', b: 'y', c: 'z' };
  console.log(
    'app1 swapObjectKeyValue demo',
    JSON.stringify(obj),
    JSON.stringify(swapObjectKeyValue(obj))
  );

  return (
    <>
      <Helmet>
        <title>Personal Data</title>
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

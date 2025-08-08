import * as React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Page1 from './pages/page1/Page1';
import Page2 from './pages/page2/Page2';
import Button from 'shared/components/Button';
import { swapObjectKeyValue } from 'shared/utils/transformations';
import PersonalData from '../../vision360/src/components/cards/PersonalData';
import EstateAndProducts from '../../vision360/src/components/cards/EstateAndProducts';
import ChannelsAndServices from '../../vision360/src/components/cards/ChannelsAndServices';
import Incidents from '../../vision360/src/components/cards/Incidents';
import LastContact from '../../vision360/src/components/cards/LastContact';

const App1: React.FC = () => {
  const obj = { a: 'x', b: 'y', c: 'z' };
  console.log(
    'app1 swapObjectKeyValue demo',
    JSON.stringify(obj),
    JSON.stringify(swapObjectKeyValue(obj))
  );

  return (
    <>
      <Helmet>
        <title>Visao 360</title>
      </Helmet>
      <div className="p-2">
        <div className="grid grid-cols-5 grid-rows-5 gap-2 mb-6">
          {/* div1 */}
          <div className="row-span-4">
            <PersonalData />
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

export default App1;

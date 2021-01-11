import React, { useEffect, useState } from 'react';

import './Splash.scss';
import { CustomAccordion } from '../../components';

const AnimatedSplash: React.FC = () => {
  const [accordionDetails, setAccordionDetails] = useState([{}]);
  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log('Hide splash now');
      return () => {
        clearTimeout(timeout);
      };
    }, 7000);
  }, []);

  useEffect(() => {
    const data = [
      {
        id: 1,
        //buttonLabel="account.openAccount",
        showDetails: false,
      },
    
    ];
    setAccordionDetails(data);
  }, []);

  return (
    <React.Fragment>
      <CustomAccordion accordionData={accordionDetails}
        buttonLabel="account.openAccount"/>
      <CustomAccordion accordionData={accordionDetails}
        buttonLabel="account.openAccount"/>
      <CustomAccordion accordionData={accordionDetails}
        buttonLabel="account.openAccount"/>
    </React.Fragment>
  );
};

export { AnimatedSplash };

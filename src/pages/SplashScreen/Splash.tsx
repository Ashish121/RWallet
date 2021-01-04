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
        title: 'Button 1 content',
        showDetails: false,
      },
      {
        id: 2,
        title: 'Button 2 content',
        showDetails: false,
      },

      {
        id: 3,
        title: 'Button 3 content',
        showDetails: false,
      },
    ];
    setAccordionDetails(data);
  }, []);

  return (
    <React.Fragment>
      <CustomAccordion accordionData={accordionDetails} />
    </React.Fragment>
  );
};

export { AnimatedSplash };

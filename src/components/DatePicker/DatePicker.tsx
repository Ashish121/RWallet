import React, { useState } from 'react';
import { IonLabel, IonList, IonItem, IonDatetime } from '@ionic/react';

import { Translate } from '../../i18n/formatMessages';
import { CalenderIcon } from '../../assets/Icons';
import './DatePicker.scss';

const DatePickerComponent: React.FC<{
  placeholder: any;
  handler?: Function;
}> = ({ placeholder, handler }) => {
  const [selectedDate, setSelectedDate] = useState<string>('');

  function handleDate(date: any) {
    setSelectedDate(date);
    handler?.(date);
  }
  return (
    <div className="date-picker-container">
      <IonList>
        <IonItem>
          <IonLabel position="floating" className="date-picker-label">
            <Translate message={placeholder} />
          </IonLabel>
          <IonDatetime
            style={{ color: '#ffffff' }}
            //displayFormat="MMM DD YYYY"
            displayFormat="MM/DD/YYYY"
            min="1970-06-04"
            value={selectedDate}
            onIonChange={(e) => handleDate(e.detail.value!)}
          ></IonDatetime>
          <div
            className="calendericon"
            style={{
              position: 'absolute',
              top: 'calc(100% - 31px)',
              right: '16px',
            }}
          >
            <CalenderIcon width="16" height="16" />
          </div>
        </IonItem>
      </IonList>
    </div>
  );
};

export default DatePickerComponent;

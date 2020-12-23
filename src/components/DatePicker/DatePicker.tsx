import React, { useState } from 'react';
import { IonLabel, IonList, IonItem, IonDatetime } from '@ionic/react';

import { Translate } from '../../i18n/formatMessages';
import { CalenderIcon } from '../../assets/Icons';
import './DatePicker.scss';

const DatePickerComponent: React.FC<any> = () => {
  const [selectedDate, setSelectedDate] = useState<string>('');

  return (
    <div className="date-picker-container">
      <IonList>
        <IonItem>
          <IonLabel position="floating" className="date-picker-label">
            <Translate message="account.dateofBirth" />
          </IonLabel>
          <IonDatetime
            style={{ color: '#ffffff' }}
            displayFormat="MMM DD YYYY"
            min="1970-06-04"
            value={selectedDate}
            onIonChange={(e) => setSelectedDate(e.detail.value!)}
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

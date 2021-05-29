import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { IonIcon, IonButton, IonToolbar, IonButtons } from '@ionic/react';
import { star } from 'ionicons/icons';
import { requestForRating } from '../../redux/actions';
import './Rating.scss';
interface headerProps {
  productId?: any;
}

const Rating: React.FC<headerProps> = ({ productId }) => {
  const dispatch = useDispatch();
  const user_id = localStorage.getItem('userId');
  const [showColor1, setShowColor1] = useState(true);
  const [showColor2, setShowColor2] = useState(true);
  const [showColor3, setShowColor3] = useState(true);
  const [showColor4, setShowColor4] = useState(true);
  const [showColor5, setShowColor5] = useState(true);
  const [count, setCount] = useState(Number);

  function changeHandler(key: any) {
    var ab = false;
    switch (key) {
    case 1:
      setShowColor1(!showColor1);
      ab = showColor1;
      break;
    case 2:
      setShowColor2(!showColor2);
      ab = showColor2;
      break;
    case 3:
      setShowColor3(!showColor3);
      ab = showColor3;
      break;
    case 4:
      setShowColor4(!showColor4);
      ab = showColor4;
      break;

    case 5:
      setShowColor5(!showColor5);
      ab = showColor5;
      break;

    default:
      break;
    }
    var count1 = 0;
    if (ab === true) {
      count1 = count + 1;
    } else {
      count1 = count - 1;
    }
    setCount(count1);
    dispatch(requestForRating({ user_id, productId, rating: count1 }));
  }

  return (
    <div style={{ marginLeft: '60px' }}>
      <IonToolbar>
        <IonButtons>
          <IonButton onClick={() => changeHandler(1)}>
            <IonIcon
              slot="icon-only"
              icon={star}
              style={{ color: !showColor1 ? '#f7b504' : '#e4dddd' }}
            />
          </IonButton>
          <IonButton onClick={() => changeHandler(2)}>
            <IonIcon
              slot="icon-only"
              icon={star}
              style={{ color: !showColor2 ? '#f7b504' : '#e4dddd' }}
            />
          </IonButton>
          <IonButton onClick={() => changeHandler(3)}>
            <IonIcon
              slot="icon-only"
              icon={star}
              style={{ color: !showColor3 ? '#f7b504' : '#e4dddd' }}
            />
          </IonButton>
          <IonButton onClick={() => changeHandler(4)}>
            <IonIcon
              slot="icon-only"
              icon={star}
              style={{ color: !showColor4 ? '#f7b504' : '#e4dddd' }}
            />
          </IonButton>
          <IonButton onClick={() => changeHandler(5)}>
            <IonIcon
              slot="icon-only"
              icon={star}
              style={{ color: !showColor5 ? '#f7b504' : '#e4dddd' }}
            />
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </div>
  );
};

export default Rating;

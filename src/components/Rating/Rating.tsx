import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { IonIcon, IonButton, IonButtons } from '@ionic/react';
import { star } from 'ionicons/icons';
import { requestForRating } from '../../redux/actions';
import './Rating.scss';
import { debounce } from 'lodash';
interface RatingsProps {
  productId?: any;
  ratings?: any;
}

const Rating: React.FC<RatingsProps> = ({ productId, ratings }) => {
  const dispatch = useDispatch();
  const user_id = localStorage.getItem('userId');
  const [showColor1, setShowColor1] = useState(false);
  const [showColor2, setShowColor2] = useState(false);
  const [showColor3, setShowColor3] = useState(false);
  const [showColor4, setShowColor4] = useState(false);
  const [showColor5, setShowColor5] = useState(false);
  useEffect(() => {
    changeHandler(Math.ceil(ratings), true);
  }, []);
  const updateRatings = debounce((val: any) => {
    dispatch(requestForRating({ user_id, productId, rating: val }));
  }, 1000);
  function changeHandler(key: any, updateMode: any) {
    switch (key) {
    case 1:
      setShowColor1(true);
      setShowColor2(false);
      setShowColor3(false);
      setShowColor4(false);
      setShowColor5(false);
      break;
    case 2:
      setShowColor1(true);
      setShowColor2(true);
      setShowColor3(false);
      setShowColor4(false);
      setShowColor5(false);
      break;
    case 3:
      setShowColor3(!showColor3);
      setShowColor1(true);
      setShowColor2(true);
      setShowColor3(true);
      setShowColor4(false);
      setShowColor5(false);
      break;
    case 4:
      setShowColor4(!showColor4);
      setShowColor1(true);
      setShowColor2(true);
      setShowColor3(true);
      setShowColor4(true);
      setShowColor5(false);
      break;

    case 5:
      setShowColor5(!showColor5);
      setShowColor1(true);
      setShowColor2(true);
      setShowColor3(true);
      setShowColor4(true);
      setShowColor5(true);
      break;

    default:
      break;
    }
    if (!updateMode) updateRatings(key);
  }

  return (
    <div style={{ padding: '6px 0px' }}>
      <IonButtons style={{ justifyContent: 'center' }}>
        <IonButton onClick={() => changeHandler(1, false)}>
          <IonIcon
            slot="icon-only"
            icon={star}
            style={{ color: showColor1 ? '#f7b504' : '#e4dddd' }}
          />
        </IonButton>
        <IonButton onClick={() => changeHandler(2, false)}>
          <IonIcon
            slot="icon-only"
            icon={star}
            style={{ color: showColor2 ? '#f7b504' : '#e4dddd' }}
          />
        </IonButton>
        <IonButton onClick={() => changeHandler(3, false)}>
          <IonIcon
            slot="icon-only"
            icon={star}
            style={{ color: showColor3 ? '#f7b504' : '#e4dddd' }}
          />
        </IonButton>
        <IonButton onClick={() => changeHandler(4, false)}>
          <IonIcon
            slot="icon-only"
            icon={star}
            style={{ color: showColor4 ? '#f7b504' : '#e4dddd' }}
          />
        </IonButton>
        <IonButton onClick={() => changeHandler(5, false)}>
          <IonIcon
            slot="icon-only"
            icon={star}
            style={{ color: showColor5 ? '#f7b504' : '#e4dddd' }}
          />
        </IonButton>
      </IonButtons>
    </div>
  );
};

export default Rating;

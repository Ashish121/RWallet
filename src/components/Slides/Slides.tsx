import React, { useEffect } from 'react';
import {
  IonSlides,
  IonSlide,
  IonCard,
  IonCardContent,
  IonImg,
} from '@ionic/react';

// Optional parameters to pass to the swiper instance.
// See http://idangero.us/swiper/api/ for valid options.

interface sliderProps {
  value?: any;
}

const slideOpts = {
  initialSlide: 1,
  autoplay: true,
  speed: 400,
};

const SlidesComponent: React.FC<sliderProps> = ({ value }) => {
  useEffect(() => {}, []);
  return (
    <IonSlides pager={true} options={slideOpts}>
      <IonSlide>
        <IonCard>
          <IonCardContent>
            <div style={{ backgroundColor: 'white', borderRadius: '7px' }}>
              <IonImg src={value} style={{ padding: '30px', margin: '10px' }} />
            </div>
          </IonCardContent>
        </IonCard>
      </IonSlide>
      <IonSlide>
        <IonCard>
          <IonCardContent>
            <div style={{ backgroundColor: 'white', borderRadius: '7px' }}>
              <IonImg src={value} style={{ padding: '30px', margin: '10px' }} />
            </div>
          </IonCardContent>
        </IonCard>
      </IonSlide>
      <IonSlide>
        <IonCard>
          <IonCardContent>
            <div style={{ backgroundColor: 'white', borderRadius: '7px' }}>
              <IonImg src={value} style={{ padding: '30px', margin: '10px' }} />
            </div>
          </IonCardContent>
        </IonCard>
      </IonSlide>
      <IonSlide>
        <IonCard>
          <IonCardContent>
            <div style={{ backgroundColor: 'white', borderRadius: '7px' }}>
              <IonImg src={value} style={{ padding: '30px', margin: '10px' }} />
            </div>
          </IonCardContent>
        </IonCard>
      </IonSlide>
    </IonSlides>
  );
};

export default SlidesComponent;

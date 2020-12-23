import React from 'react';
import { IonSlides, IonSlide, IonCard, IonCardContent } from '@ionic/react';

// Optional parameters to pass to the swiper instance.
// See http://idangero.us/swiper/api/ for valid options.
const slideOpts = {
  initialSlide: 1,
  speed: 400,
};

const SlidesComponent: React.FC<any> = () => {
  return (
    <IonSlides pager={true} options={slideOpts}>
      <IonSlide>
        <IonCard>
          <IonCardContent>
            Keep close to Nature's heart... and break clear away, once in
            awhile, and climb a mountain or spend a week in the woods. Wash your
            spirit clean.
          </IonCardContent>
        </IonCard>
      </IonSlide>
      <IonSlide>
        <IonCard>
          <IonCardContent>
            Keep close to Nature's heart... and break clear away, once in
            awhile, and climb a mountain or spend a week in the woods. Wash your
            spirit clean.
          </IonCardContent>
        </IonCard>
      </IonSlide>
      <IonSlide>
        <IonCard>
          <IonCardContent>
            Keep close to Nature's heart... and break clear away, once in
            awhile, and climb a mountain or spend a week in the woods. Wash your
            spirit clean.
          </IonCardContent>
        </IonCard>
      </IonSlide>
      <IonSlide>
        <IonCard>
          <IonCardContent>
            Keep close to Nature's heart... and break clear away, once in
            awhile, and climb a mountain or spend a week in the woods. Wash your
            spirit clean.
          </IonCardContent>
        </IonCard>
      </IonSlide>
    </IonSlides>
  );
};

export default SlidesComponent;

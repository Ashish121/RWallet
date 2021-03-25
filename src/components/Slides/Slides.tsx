import React, { useEffect } from 'react';
import { IonSlides, IonSlide, IonCard, IonCardContent } from '@ionic/react';

// Optional parameters to pass to the swiper instance.
// See http://idangero.us/swiper/api/ for valid options.
const slideOpts = {
  initialSlide: 1,
  autoplay: true,
  speed: 400,
};

const SlidesComponent: React.FC<any> = () => {
  useEffect(() => {}, []);
  return (
    <IonSlides pager={true} options={slideOpts}>
      <IonSlide>
        <IonCard>
          <IonCardContent>Image 1</IonCardContent>
        </IonCard>
      </IonSlide>
      <IonSlide>
        <IonCard>
          <IonCardContent>Image 2</IonCardContent>
        </IonCard>
      </IonSlide>
      <IonSlide>
        <IonCard>
          <IonCardContent>Image 3</IonCardContent>
        </IonCard>
      </IonSlide>
      <IonSlide>
        <IonCard>
          <IonCardContent>Image 4</IonCardContent>
        </IonCard>
      </IonSlide>
    </IonSlides>
  );
};

export default SlidesComponent;

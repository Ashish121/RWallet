import React, { useEffect, useState } from 'react';
import { IonSlides, IonSlide, IonCard, IonCardContent } from '@ionic/react';

// Optional parameters to pass to the swiper instance.
// See http://idangero.us/swiper/api/ for valid options.

interface sliderProps {
  value?: any;
  showSlider?: boolean;
}

const slideOpts = {
  initialSlide: 1,
  autoplay: true,
  speed: 400,
};

const SlidesComponent: React.FC<sliderProps> = ({ value, showSlider }) => {
  const [slider, setSlider] = useState([{}]);

  useEffect(() => {
    const param = value;
    setSlider(param);
  });

  return (
    <div className="slider-component-wrapper">
      {showSlider ? (
        <IonSlides pager={true} options={slideOpts}>
          {slider.map((item: any, index: any) => {
            return (
              <IonSlide key={index}>
                <IonCard>
                  <IonCardContent
                    className="background_image_cover"
                    style={{
                      backgroundImage: 'url(' + item.image_path + ')',
                      width: '100%',
                      height: '100%',
                      backgroundSize: 'cover',
                    }}
                  ></IonCardContent>
                </IonCard>
              </IonSlide>
            );
          })}
        </IonSlides>
      ) : (
        <div>
          <IonSlides pager={true} options={slideOpts}>
            <IonSlide>
              <IonCard style={{ width: '100%', height: '250px' }}>
                <IonCardContent
                  style={{
                    backgroundImage: 'url(' + value + ')',
                    width: '100%',
                    height: '100%',
                    backgroundSize: '100% 100%',
                  }}
                ></IonCardContent>
              </IonCard>
            </IonSlide>
          </IonSlides>
        </div>
      )}
    </div>
  );
};

export default SlidesComponent;

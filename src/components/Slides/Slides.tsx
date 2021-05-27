import React, { useEffect, useState } from 'react';
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
    <div>
      {showSlider ? (
        <IonSlides pager={true} options={slideOpts}>
          {slider.map((item: any) => {
            return (
              <IonSlide>
                <IonCard>
                  <IonCardContent>
                    <div
                      style={{
                        backgroundColor: 'white',
                        borderRadius: '7px',
                      }}
                    >
                      <IonImg
                        src={item.image_path}
                        style={{
                          padding: '5px',
                          width: '150px',
                          marginLeft: '50px',
                        }}
                      />
                    </div>
                  </IonCardContent>
                </IonCard>
              </IonSlide>
            );
          })}
        </IonSlides>
      ) : (
        <div>
          <IonSlides pager={true} options={slideOpts}>
            <IonSlide>
              <IonCard>
                <IonCardContent>
                  <div
                    style={{
                      backgroundColor: 'white',
                      borderRadius: '7px',
                    }}
                  >
                    <IonImg
                      src={value}
                      style={{ padding: '30px', margin: '10px' }}
                    />
                  </div>
                </IonCardContent>
              </IonCard>
            </IonSlide>
          </IonSlides>
        </div>
      )}
    </div>
  );
};

export default SlidesComponent;

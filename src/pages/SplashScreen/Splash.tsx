import React, { useEffect } from 'react';
import { IonContent } from '@ionic/react';

import './Splash.scss';

const SplashScreenPlayer: React.FC = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log('Hide splash now');
      return () => {
        clearTimeout(timeout);
      };
    }, 7000);
  }, []);

  return (
    <div className="splash-wrapper">
      <IonContent className="video-player-wrapper">
        <video className="video-player" loop autoPlay>
          <source src={require('./video.mp4')} type="video/mp4" />
        </video>
      </IonContent>
    </div>
  );
};

export { SplashScreenPlayer };

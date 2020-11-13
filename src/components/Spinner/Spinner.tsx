import React from 'react';
import './Spinner.css';
import { IonLoading, IonContent } from '@ionic/react';

interface LoaderProps {
    showLoading: boolean,
    loaderMessage: string
}

const LoaderComponent: React.FC<LoaderProps> = ({ showLoading, loaderMessage }) => {
  return (
    <IonContent>
      <div className="loaderWrapper">
        <IonLoading
          cssClass='my-custom-class'
          isOpen={showLoading}
          message={loaderMessage}
        />
      </div>
    </IonContent>
  );
};

export default LoaderComponent;

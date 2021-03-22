import React from 'react';
import './Spinner.css';
import { IonLoading } from '@ionic/react';

interface LoaderProps {
  showLoading: boolean;
  loaderMessage: string;
}

const LoaderComponent: React.FC<LoaderProps> = ({
  showLoading,
  loaderMessage,
  ...props
}) => {
  return (
    <div className="loaderWrapper">
      <IonLoading
        cssClass="my-custom-class"
        isOpen={showLoading}
        message={loaderMessage}
        {...props}
      />
    </div>
  );
};

export default LoaderComponent;

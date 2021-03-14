import React, { useState, useEffect } from 'react';
import { IonPage, IonContent, IonApp } from '@ionic/react';
import { Plugins } from '@capacitor/core';
import {
  HeaderComponent,
  LoaderComponent,
  RoyallityWalletMap,
} from '../../components';

import './MapView.scss';

const MapView: React.FC = () => {
  const [mapReady, setMapReady] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [message, setMessage] = useState('');
  const [zoomLevel, setZoomLevel] = useState(10);
  const [center, setMapCenter] = useState({ lat: 0, lng: 0 });
  const [
    currentPositionMarkerDetails,
    setCurrentPositionMarkerDetails,
  ] = useState({});
  const { Geolocation } = Plugins;

  useEffect(() => {
    getCurrentPosition();
    setShowLoader(true);
    setMessage('Fetching your location...');
  }, []);

  async function getCurrentPosition() {
    const coordinates = await Geolocation.getCurrentPosition();
    console.log('Current', coordinates);
    const coords: any = {
      lat: coordinates.coords?.latitude,
      lng: coordinates.coords?.longitude,
    };
    setMapCenter({ lat: coords.lat, lng: coords.lng });
    setZoomLevel(17);
    const markerArray = [
      {
        coordinates: [12.929883, 77.622658],
        iconPath: 'mapMarkerIcon.svg',
        description: 'Marker 1',
      },
      {
        coordinates: [12.937845, 77.61142],
        iconPath: 'mapMarkerIcon.svg',
        description: 'marker 2',
      },
    ];
    createMarkerDetails(coords, markerArray);

    setMapReady(true);
    setShowLoader(false);
    setMessage('');
    setMapReady(true);
  }
  function createMarkerDetails(currentPos: any, markers: any) {
    const array = [
      {
        coordinates: [currentPos.lat, currentPos.lng],
        iconPath: 'currentPositionIcon.svg',
        description: 'Hey!',
      },
    ];
    markers.forEach((data: any) => {
      array.push(data);
    });
    setCurrentPositionMarkerDetails(array);
  }
  return (
    <>
      <IonApp>
        <LoaderComponent showLoading={showLoader} loaderMessage={message} />
        <IonPage>
          <HeaderComponent headerLable={'common.header'} />
          <IonContent>
            <div className="map-container">
              {mapReady && (
                <React.Fragment>
                  <RoyallityWalletMap
                    mapCenter={center}
                    markerDetails={currentPositionMarkerDetails}
                    zoomLevel={zoomLevel}
                  />
                </React.Fragment>
              )}
            </div>
          </IonContent>
        </IonPage>
      </IonApp>
    </>
  );
};

export { MapView };

import React, { useState, useEffect } from 'react';
import { IonPage, IonContent, IonApp } from '@ionic/react';
import { useDispatch } from 'react-redux';
import { Plugins } from '@capacitor/core';
import debounce from 'lodash.debounce';
import {
  HeaderComponent,
  LoaderComponent,
  RoyallityWalletMap,
} from '../../components';
import { loadPOSDetails } from '../../redux/actions';

import './MapView.scss';
interface mapViewProps {
  detailsView?: boolean;
}
const MapView: React.FC<mapViewProps> = ({ detailsView = true }) => {
  const dispatch = useDispatch();
  const [mapReady, setMapReady] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [message, setMessage] = useState('');
  const [zoomLevel, setZoomLevel] = useState(10);
  const [center, setMapCenter] = useState({ lat: 0, lng: 0 });
  // const [posData, setPosData] = useState([{}]);
  const [
    currentPositionMarkerDetails,
    setCurrentPositionMarkerDetails,
  ] = useState({});
  const [userCurrentPosition, setUserCurrentLocation] = useState(null);
  const { Geolocation } = Plugins;

  useEffect(() => {
    setShowLoader(true);
    setMessage('Fetching your location...');
    getCurrentPosition();
  }, []);

  useEffect(() => {
    console.log('Inside useEffect: ', userCurrentPosition);
    if (userCurrentPosition !== null) {
      getPosDetails();
    }
  }, [userCurrentPosition]);

  function getCurrentPosition() {
    Geolocation.getCurrentPosition().then((coordinates) => {
      console.log('Current', coordinates);
      const coords: any = {
        lat: coordinates.coords?.latitude,
        lng: coordinates.coords?.longitude,
      };
      console.log('*******: ', coords);

      console.log('Beforw: userCurrentPosition', userCurrentPosition);

      setMapCenter({ lat: coords.lat, lng: coords.lng });
      setZoomLevel(17);
      setShowLoader(false);
      setMessage('');
      setUserCurrentLocation(coords);

      setMapReady(true);
    });
  }

  const getPosDetails = debounce(() => {
    console.log('Getting POS details now.');
    dispatch(loadPOSDetails(handlePOSData));
  }, 200);

  const handlePOSData = debounce((res) => {
    console.log('Received POS data: ', res);
    const posDetails = res.data.data;
    // setPosData(posDetails);
    console.log('userCurrentPosition: ', userCurrentPosition);

    createMarkerDetails(userCurrentPosition, posDetails);
  }, 200);
  function createMarkerDetails(currentPos: any, markers: any) {
    console.log('markers: ', markers);
    console.log('currentPos: ', currentPos);

    const array = [
      {
        latitude: currentPos.lat,
        longitude: currentPos.lng,
        iconPath: 'currentPositionMarker.svg',
        description: 'I am here.',
      },
    ];
    markers.forEach((data: any) => {
      array.push(data);
    });
    console.log('array: ', array);

    setCurrentPositionMarkerDetails(array);
  }
  return (
    <>
      {detailsView && (
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
      )}
      {!detailsView && (
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
      )}
    </>
  );
};

export { MapView };

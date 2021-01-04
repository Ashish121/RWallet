import React, { useState, useEffect } from 'react';
import { IonPage, IonContent, IonApp } from '@ionic/react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { HeaderComponent } from '../../components';
import { MapMarker } from '../../assets/Icons';
import osm from './osm-provider';
import './MapView.scss';

const MapView: React.FC = () => {
  const center = { lat: 12.9716, lng: 77.5946 };
  const zoomlevel = 13;
  const [mapReady, setMapReady] = useState(false);
  const markerDetails = {
    coordinates: [12.9716, 77.5946],
    iconPath: 'mapMarkerIcon.svg',
    description: 'Hello',
  };
  useEffect(() => {
    setTimeout(() => {
      setMapReady(true);
    }, 1000);
  }, []);
  return (
    <>
      <IonApp>
        <IonPage>
          <HeaderComponent headerLable={'common.header'} />
          <IonContent>
            <div className="map-container">
              {mapReady && (
                <MapContainer center={center} zoom={zoomlevel}>
                  <TileLayer
                    attribution={osm.mapTiler.attr}
                    url={osm.mapTiler.url}
                  />
                  <MapMarker markerDetails={markerDetails} />
                </MapContainer>
              )}
            </div>
          </IonContent>
        </IonPage>
      </IonApp>
    </>
  );
};

export { MapView };

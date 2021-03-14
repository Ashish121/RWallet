/**
 * This components renders leafleat map on the screen.
 */
import React, { useState } from 'react';
import { IonFabButton } from '@ionic/react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { MapMarker } from './MapMarker';
import osm from './osm-provider';
import './Map.scss';
import { CurrentPositionBtn } from '../../assets/Icons';

interface MapProps {
  mapCenter: any;
  zoomLevel?: any;
  markerDetails?: any;
  hasMany?: any;
}

const RoyallityWalletMap: React.FC<MapProps> = ({
  mapCenter,
  zoomLevel,
  markerDetails,
}) => {
  const [map, setMap] = useState(null);
  function setMapInstance(instance: any) {
    setMap(instance);
  }

  function panMap(mapView: any) {
    console.log('Panning:', markerDetails[0]);
    mapView.flyTo(markerDetails[0].coordinates, zoomLevel);
  }
  /**
   * @param null
   * Register clieck reference to the map to pan the map and return button
   * @returns  IconFabButton
   */
  function LocateUserButton() {
    const mapView = map;
    const onClick = () => panMap(mapView);

    return (
      <IonFabButton
        color="light"
        className="current-location-btn ion-text-center"
        onClick={onClick}
      >
        <CurrentPositionBtn
          className="current-location-icon"
          width={20}
          height={20}
        />
      </IonFabButton>
    );
  }
  return (
    <div className="map-wrapper">
      <MapContainer
        center={mapCenter}
        zoom={zoomLevel || 12}
        whenCreated={setMapInstance}
      >
        <TileLayer attribution={osm.mapTiler.attr} url={osm.mapTiler.url} />
        {markerDetails.map((marker: any) => {
          return <MapMarker markerDetails={marker} />;
        })}
      </MapContainer>
      <LocateUserButton />
    </div>
  );
};
export default RoyallityWalletMap;

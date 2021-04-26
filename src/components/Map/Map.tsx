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
  getMapInstance?: Function;
  mapBounds?: any;
}

const RoyallityWalletMap: React.FC<MapProps> = ({
  mapCenter,
  zoomLevel,
  markerDetails,
  getMapInstance,
  mapBounds,
}) => {
  const [map, setMap] = useState(null);

  function setMapInstance(instance: any) {
    setMap(instance);
    getMapInstance?.(instance);
  }

  function panMap(mapView: any, coords: any) {
    mapView.flyTo([coords[0].latitude, coords[0].longitude], zoomLevel);
  }
  /**
   * @param null
   * Register clieck reference to the map to pan the map and return button
   * @returns  IconFabButton
   */
  function LocateUserButton() {
    const mapView = map;
    const onClick = () => panMap(mapView, markerDetails);

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
        whenCreated={setMapInstance}
        bounds={mapBounds}
        zoom={mapBounds ? undefined : 15}
      >
        <TileLayer attribution={osm.mapTiler.attr} url={osm.mapTiler.url} />
        {markerDetails.length > 0 &&
          markerDetails.map((marker: any) => {
            return <MapMarker markerDetails={marker} />;
          })}
      </MapContainer>
      <LocateUserButton />
    </div>
  );
};
export default RoyallityWalletMap;

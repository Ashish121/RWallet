import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

const MapMarker: React.FC<any> = ({ width, height, markerDetails }) => {
  const { coordinates, iconPath } = markerDetails;
  const marker = new L.Icon({
    iconUrl: require(`../../assets/Icons/${iconPath}`),
    iconRetinaUrl: require(`../../assets/Icons/${iconPath}`),
    iconSize: new L.Point(width, height),
    shadowSize: [50, 64], // size of the shadow
    iconAnchor: [13, 80], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62], // the same for the shadow
    popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
  });
  return (
    <React.Fragment>
      <Marker position={[coordinates[0], coordinates[1]]} icon={marker}>
        <Popup>{markerDetails.description}</Popup>
      </Marker>
    </React.Fragment>
  );
};

export { MapMarker };

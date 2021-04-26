import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { IonText } from '@ionic/react';
import { Translate } from '../../i18n/formatMessages';

const MapMarker: React.FC<any> = ({ width, height, markerDetails }) => {
  const iconPath = markerDetails.iconPath
    ? markerDetails.iconPath
    : 'mapMarkerIcon.svg';
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
      <Marker
        position={[markerDetails.latitude, markerDetails.longitude]}
        icon={marker}
      >
        <Popup maxWidth={100}>
          <div className="popup_content">
            <div>
              <IonText>
                <Translate message="map.name" />
              </IonText>
              <IonText>: {markerDetails.pos_name}</IonText>
            </div>
            <div>
              <IonText>
                <Translate message="map.pos_no" />
              </IonText>
              <IonText>: {markerDetails.pos_number}</IonText>
            </div>
            <div>
              <IonText>
                <Translate message="map.dispatchStatus" />
              </IonText>
              <IonText>: Yes</IonText>
            </div>
          </div>
        </Popup>
      </Marker>
    </React.Fragment>
  );
};

export { MapMarker };

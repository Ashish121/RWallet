import React from 'react';
import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonRouterOutlet,
  IonMenuToggle,
} from '@ionic/react';

const MenuComponent: React.FC<any> = () => (
  <>
    <IonMenu side="start" menuId="menu" contentId="menu">
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Start Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonMenuToggle>
            <IonItem>Menu Item</IonItem>
          </IonMenuToggle>

          <IonMenuToggle>
            <IonItem>Menu Item</IonItem>
          </IonMenuToggle>
          <IonMenuToggle>
            <IonItem>Menu Item</IonItem>
          </IonMenuToggle>
          <IonMenuToggle>
            <IonItem>Menu Item</IonItem>
          </IonMenuToggle>
          <IonMenuToggle>
            <IonItem>Menu Item</IonItem>
          </IonMenuToggle>
        </IonList>
      </IonContent>
    </IonMenu>

    <IonRouterOutlet id="menu"></IonRouterOutlet>
  </>
);
export default MenuComponent;

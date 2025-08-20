import React from "react";
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonMenuToggle } from "@ionic/react";

const Menu = () => {
  return (
    <IonMenu contentId="main-content" type="overlay">
      <IonHeader>
        <IonToolbar className="nude-toolbar">
          <IonTitle>Equipos de Futbol</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonMenuToggle autoHide={false}>
            <IonItem routerLink="/bienvenida" routerDirection="none">
              <IonLabel>Bienvenida</IonLabel>
            </IonItem>
            <IonItem routerLink="/agregar" routerDirection="none">
              <IonLabel>Agregar Equipo</IonLabel>
            </IonItem>
            <IonItem routerLink="/listado" routerDirection="none">
              <IonLabel>Listado de Equipos</IonLabel>
            </IonItem>
            <IonItem routerLink="/noticias" routerDirection="none">
              <IonLabel>Noticias</IonLabel>
            </IonItem>
            <IonItem routerLink="/acerca" routerDirection="none">
              <IonLabel>Acerca</IonLabel>
            </IonItem>
          </IonMenuToggle>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;

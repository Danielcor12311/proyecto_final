import React from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonImg,
  IonItem,
  IonLabel
} from "@ionic/react";

const Acerca = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="nude-toolbar">
          <IonTitle>Acerca de Nosotros</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {/* Imagen central */}
        <IonImg src="/images/inicio.jpg" style={{ width: "100%", maxHeight: "200px", objectFit: "cover", borderRadius: "10px" }} />

        {/* Cards de Misión, Visión y Valores */}
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Misión</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Nuestra misión es brindar información completa y confiable sobre equipos de futbol y su historia.
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Visión</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Ser la aplicación de referencia para aficionados del futbol que buscan datos precisos y visuales.
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Valores</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Honestidad, pasión por el deporte, innovación y cercanía con nuestros usuarios.
          </IonCardContent>
        </IonCard>

        {/* Fundador */}
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Fundador</IonCardTitle>
          </IonCardHeader>
          <IonCardContent style={{ textAlign: "center" }}>
            <IonImg src="/images/mifoto.jpg" style={{ width: "120px", borderRadius: "50%" }} />
            <p>Daniel Cortez</p>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Acerca;

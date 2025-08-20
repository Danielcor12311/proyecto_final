import React from "react";
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonFab, IonFabButton, IonIcon } from "@ionic/react";
import { mailOutline } from "ionicons/icons";
import { useHistory } from "react-router-dom";

const Bienvenida = () => {
  const history = useHistory();

  const irAContacto = () => {
    history.push("/contacto");
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="nude-toolbar">
          <IonTitle>Bienvenido</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h2>¡Bienvenido a la App de Equipos de Futbol!</h2>
        <p>Gestiona tus equipos favoritos, visualiza sus datos y más.</p>
        <img src="/images/inicio.jpg" alt="Inicio" style={{ width: "100%", marginTop: "20px", borderRadius: "10px" }} />

        {/* Botón flotante para ir a Contacto */}
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton onClick={irAContacto} color="medium">
            <IonIcon icon={mailOutline} />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Bienvenida;

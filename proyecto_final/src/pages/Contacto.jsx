import React, { useState } from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
  IonButton,
  IonToast,
} from "@ionic/react";

const Contacto = () => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [showToast, setShowToast] = useState(false);

  const handleEnviar = (e) => {
    e.preventDefault();
    if (!nombre || !correo || !mensaje) return;

    // Aquí puedes guardar los datos en localStorage si quieres
    setNombre("");
    setCorreo("");
    setMensaje("");
    setShowToast(true);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="nude-toolbar">
          <IonTitle>Contacto</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <form onSubmit={handleEnviar}>
          <IonItem>
            <IonLabel position="floating">Nombre</IonLabel>
            <IonInput
              value={nombre}
              onIonChange={(e) => setNombre(e.detail.value)}
              required
            />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Correo electrónico</IonLabel>
            <IonInput
              type="email"
              value={correo}
              onIonChange={(e) => setCorreo(e.detail.value)}
              required
            />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Mensaje</IonLabel>
            <IonTextarea
              value={mensaje}
              onIonChange={(e) => setMensaje(e.detail.value)}
              required
            />
          </IonItem>
          <IonButton
            expand="block"
            type="submit"
            className="ion-margin-top"
            style={{ "--background": "#D2B48C", "--color": "#fff" }}
          >
            Enviar
          </IonButton>
        </form>
        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message="¡Mensaje enviado correctamente!"
          duration={2000}
          style={{ "--background": "#D2B48C", "--color": "#fff" }}
        />
      </IonContent>
    </IonPage>
  );
};

export default Contacto;

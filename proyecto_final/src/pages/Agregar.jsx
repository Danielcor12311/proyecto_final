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
  IonSelect,
  IonSelectOption,
  IonButton,
  IonToast,
} from "@ionic/react";

const Agregar = () => {
  const [nombre, setNombre] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [liga, setLiga] = useState("La liga");
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre || !ciudad || !liga) return;

    // Guardar en localStorage
    const saved = JSON.parse(localStorage.getItem("equipos")) || [];
    saved.push({ nombre, ciudad, liga });
    localStorage.setItem("equipos", JSON.stringify(saved));

    setNombre("");
    setCiudad("");
    setLiga("La liga");
    setShowToast(true);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="nude-toolbar">
          <IonTitle>Agregar Equipo</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <form onSubmit={handleSubmit}>
          <IonItem>
            <IonLabel position="floating">Nombre del equipo</IonLabel>
            <IonInput value={nombre} onIonChange={(e) => setNombre(e.detail.value)} required />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Ciudad</IonLabel>
            <IonInput value={ciudad} onIonChange={(e) => setCiudad(e.detail.value)} required />
          </IonItem>
          <IonItem>
            <IonLabel>Liga</IonLabel>
            <IonSelect value={liga} onIonChange={(e) => setLiga(e.detail.value)}>
              <IonSelectOption value="La liga">La liga</IonSelectOption>
              <IonSelectOption value="Liga Inglesa">Liga Inglesa</IonSelectOption>
              <IonSelectOption value="Liga Alemana">Liga Alemana</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonButton
            expand="block"
            type="submit"
            className="ion-margin-top"
            style={{ "--background": "#D2B48C", "--color": "#fff" }}
          >
            Agregar Equipo
          </IonButton>
        </form>
        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message="¡Equipo agregado correctamente!"
          duration={2000}
          style={{ "--background": "#D2B48C", "--color": "#fff" }}
        />
      </IonContent>
    </IonPage>
  );
};

export default Agregar;

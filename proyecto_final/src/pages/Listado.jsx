import React, { useState, useEffect } from "react";
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
  IonButton
} from "@ionic/react";

const Listado = () => {
  const [equipos, setEquipos] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("equipos")) || [];
    setEquipos(saved);
  }, []);

  const handleEliminar = (index) => {
    const nuevosEquipos = [...equipos];
    nuevosEquipos.splice(index, 1);
    setEquipos(nuevosEquipos);
    localStorage.setItem("equipos", JSON.stringify(nuevosEquipos));
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="nude-toolbar">
          <IonTitle>Listado de Equipos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {equipos.length === 0 ? (
          <p>No hay equipos agregados aún.</p>
        ) : (
          equipos.map((equipo, index) => (
            <IonCard key={index} style={{ "--background": "#F5F5DC", "--color": "#000" }} className="ion-margin-bottom">
              <IonCardHeader>
                <IonCardTitle>{equipo.nombre}</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                Ciudad: {equipo.ciudad} <br />
                Liga: {equipo.liga} <br /><br />
                <IonButton
                  color="danger"
                  expand="block"
                  onClick={() => handleEliminar(index)}
                >
                  Eliminar Equipo
                </IonButton>
              </IonCardContent>
            </IonCard>
          ))
        )}
      </IonContent>
    </IonPage>
  );
};

export default Listado;

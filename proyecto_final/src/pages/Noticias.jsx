import React, { useState, useEffect } from "react";
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from "@ionic/react";

const Noticias = () => {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    // Aquí podrías cargar noticias desde un API o archivo local
    const ejemploNoticias = [
      { titulo: "Real Madrid gana la liga", contenido: "El Real Madrid se consagra campeón de la temporada 2025..." },
      { titulo: "Lionel Messi ficha por Inter Miami", contenido: "Messi inicia una nueva etapa en la MLS..." },
      { titulo: "Manchester City sorprende en Champions", contenido: "Los Citizens avanzan con victoria contundente..." },
    ];
    setNoticias(ejemploNoticias);
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="nude-toolbar">
          <IonTitle>Noticias de Fútbol</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {noticias.map((noticia, index) => (
          <IonCard key={index} className="ion-margin-bottom" style={{ "--background": "#F5F5DC", "--color": "#000" }}>
            <IonCardHeader>
              <IonCardTitle>{noticia.titulo}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>{noticia.contenido}</IonCardContent>
          </IonCard>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Noticias;

import React from "react";
import { IonApp, IonSplitPane, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Route, Redirect, Switch } from "react-router-dom";

/* Páginas */
import Menu from "./pages/Menu";
import Bienvenida from "./pages/Bienvenida";
import Agregar from "./pages/Agregar";
import Listado from "./pages/Listado";
import Noticias from "./pages/Noticias";
import Acerca from "./pages/Acerca";
import Contacto from "./pages/Contacto"; // solo accesible por IonFab

setupIonicReact();

export default function App() {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main-content">
          <Menu />
          <IonRouterOutlet id="main-content">
            <Switch>
              <Route path="/" exact>
                <Redirect to="/bienvenida" />
              </Route>
              <Route path="/bienvenida" component={Bienvenida} exact />
              <Route path="/agregar" component={Agregar} exact />
              <Route path="/listado" component={Listado} exact />
              <Route path="/noticias" component={Noticias} exact />
              <Route path="/acerca" component={Acerca} exact />
              <Route path="/contacto" component={Contacto} exact />
            </Switch>
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
}

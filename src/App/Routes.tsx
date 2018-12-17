import * as React from "react";
import { Route, Switch } from "react-router-dom";
import Registration from "src/App/Registration/Registration";
import { Login, ILogDaten } from "src/App/Login/Login";
import Body from "src/App/Layout/Body/Body";
import HerrenArtikel from "src/App/Herren/HerrenArtikel";
import TimberlandBootsDetail from "src/App/Herren/Artikel/TimberlandBoots/TimberlandBootsDetail";
import { Registrieren } from './Registration/Registrieren';

export default function Routes() {
  return (
    <Switch>
      <Route path="/registrierung" exact={true} component={Registrieren} />
      <Route path="/" exact={true} component={Body} />
      <Route path="/login" exact={true} component={Login} />
      <Route path="/herren" exact={true} component={HerrenArtikel} />
      <Route
        path="/herren/timberlandboots"
        exact={true}
        component={TimberlandBootsDetail}
      />
    </Switch>
  );
}

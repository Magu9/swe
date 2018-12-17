import * as React from "react";
import { NavLink } from "react-router-dom";
import Herren from "./Herren";
import TimberlandBoots from "./Artikel/TimberlandBoots/TimberlandBoots";

export default function HerrenArtikel() {
  return (
    <div>
      <div className="container text-center">
        <h2> Saisonale Kollektion</h2>
        <hr className="style10" />
        <div className="row">
          <div className="col-sm-4">
            <Herren />
          </div>
          <div className="col-sm-4">
            <img src="/img/frau.png" id="icoon" className="img-responsive" />
            <h4>Frauen</h4>
          </div>
          <div className="col-sm-4">
            <img src="/img/kinder.png" id="icoon" className="img-responsive" />
            <h4>Kinder</h4>
          </div>
        </div>
        <br />
      </div>

      <div className="container text-center">
        <h2>Artikel</h2>
        <hr className="style10" />
        <div className="col-sm-4">
          <TimberlandBoots />
        </div>
        <div className="col-sm-4">
          <img
            src="/img/Wollmantel.jpg"
            id="icoon"
            className="img-responsive"
          />
          <h4>Wollmantel</h4>
        </div>
        <div className="col-sm-4">
          <img src="/img/Goldkette.jpg" id="icoon" className="img-responsive" />
          <h4>Versace Goldkette</h4>
        </div>
      </div>
      <br />
    </div>
  );
}

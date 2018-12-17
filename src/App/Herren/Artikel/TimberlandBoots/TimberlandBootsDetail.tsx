import * as React from "react";
import { NavLink } from "react-router-dom";
import { Artikel1 } from "./TimberlandBoot";
import "./TimberlandBootsDetail.css";

export default function TimberlandBootsDetail() {
  return (
    <div className="container text">
      <br />
      <img
        src="/img/TimberlandBoots.jpg"
        id="icoon"
        className="img-responsive"
        width="300"
      />
      <h2>Details</h2>
      <hr className="style10" />
      <span className="details">Preis: </span>
      {Artikel1.preis} €
      <br />
      <span className="details">Obermaterial: </span>
      {Artikel1.obermaterial}
      <br />
      <span className="details">Innenmaterial: </span>
      {Artikel1.innenmaterial}
      <br />
      <span className="details">Decksohle: </span>
      {Artikel1.decksohle}
      <br />
      <span className="details">Sohle: </span> {Artikel1.sohle}
      <br />
      <span className="details">Fütterungsdicke: </span>
      {Artikel1.fütterungsdicke}
      <br />
      <span className="details">Wetter: </span>
      {Artikel1.wetter}
      <br />
      <span className="details">Schuhspitze: </span>
      {Artikel1.schuhspitze}
      <br />
      <span className="details">Details: </span>
      {Artikel1.details}
      <br />
      <span className="details">Verschluss: </span>
      {Artikel1.verschluss}
      <br />
      <span className="details">Artikelnummer: </span>
      {Artikel1.artikelnummer}
      <br />
      <br />
    </div>
  );
}

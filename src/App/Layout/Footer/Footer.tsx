import * as React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <footer className="container-fluid text-center">
      <div className="row">
        <div className="col-sm-3">
          <h3>Kontakt</h3>
          <br />
          <a href="#">
            <h4>Kundenservice</h4>
          </a>
          <a href="#">
            <h4>FAQ</h4>
          </a>
          <a href="#">
            <h4>ABG und Datenschutz</h4>
          </a>
          <a href="#">
            <h4>Impressum</h4>
          </a>
        </div>

        <div className="col-sm-3">
          <h3>Bezahlmöglichkeiten</h3>
          <img src="/img/geld.png" className="icon img-responsive" />
        </div>

        <div className="col-sm-3">
          <h3>Versandarten</h3>
          <img src="/img/Logistik.png" className="icon img-responsive" />
        </div>

        <div className="col-sm-3">
          <h3>Social Media</h3>
          <a href="#" className="fa fa-facebook" />
          <a href="#" className="fa fa-google" />
          <a href="#" className="fa fa-twitter" />
          <a href="#" className="fa fa-instagram" />
        </div>
      </div>
    </footer>
  );
}

import * as React from "react";
import { Link } from "react-router-dom";
import Herren from "../../Herren/Herren";

import "./Body.css";

export default function Body() {
  return (
    <div>
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className="active" />
          <li data-target="#myCarousel" data-slide-to="1" />
          <li data-target="#myCarousel" data-slide-to="2" />
        </ol>

        <div className="carousel-inner" role="listbox">
          <div className="item active">
            <img src="/img/slide1.png" />
            <div className="carousel-caption">
              <h1>Großer Sale</h1>

              <button type="button" className="btn bt-default">
                {" "}
                Hol dir deinen Code
              </button>
            </div>
          </div>
          <div className="item">
            <img src="/img/slide2.png" />
          </div>
          <div className="item">
            <img src="/img/slide3.png" />
          </div>
          <a
            className="left carousel-control"
            href="#myCarousel"
            role="button"
            data-slide="prev"
          >
            <span
              className="glyphicon glyphicon-chevron-left"
              aria-hidden="true"
            />
            <span className="sr-only"> Previous</span>{" "}
          </a>
          <a
            className="right carousel-control"
            href="#myCarousel"
            role="button"
            data-slide="next"
          >
            <span
              className="glyphicon glyphicon-chevron-right"
              aria-hidden="true"
            />
            <span className="sr-only"> Previous</span>{" "}
          </a>
        </div>
      </div>

      <div className="container text-center">
        <h2> Saisonale Kollektion</h2>
        <hr className="style10" />
        <div className="row">
          <div className="col-sm-4">
            <Herren/>
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
      </div>

      <div className="panel-group">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h4 className="panel-title text-center">
              <a data-toggle="collapse" href="#collapse1">
                Jetzt beim Newsletter anmelden und 5€ geschenkt bekommen
              </a>
            </h4>
          </div>
          <div id="collapse1" className="panel-collapse collapse">
            <div className="panel-body">
              <div className="row">
                <div className="col-md-6">
                  <a href="#">
                    <h3>Unser super Newsletter!</h3>{" "}
                  </a>
                  <p>
                    Sichere dir viele Vorteile wie unter anderem
                    Benachrichtigungen bei unseren Sales sowie Wishlist Updates!
                  </p>
                  <p>
                    Hier wird auch irgendsoein Text stehen, aber wer will denn
                    schon großartig Texte lesen wenn ein solches
                    Newsletter-Angebot existiert.
                  </p>
                </div>
                <div className="col-md-6">
                  <img src="/img/news.png" className="img-responsive" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <h4>Neueste Trends</h4>
            <p>
              Trendbewusst? Dann bist du hier genau richtig! Wir durchleuchten
              die neuesten Trends und die freshesten Styles. Finde deinen Style!
            </p>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <img src="/img/trend.png" className="img-responsive" />
          </div>

          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <h4>Hi-Fashion </h4>
            <p>
              Hier erfahrt ihr alles was ihr jemals über eure Lieblingsmarken
              erfahren wolltet. Wir geben euch einen Einblick in die Welt der
              Hi-Fashion.
            </p>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <img src="/img/fash.png" className="img-responsive" />
          </div>
        </div>
      </div>
    </div>
  );
}

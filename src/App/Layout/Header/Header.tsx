import * as React from "react";

import "./Header.css";
import { Registrieren, IRegDaten } from "../../Registration/Registrieren";
import { Login, ILogDaten } from "../../Login/Login";

import { Link } from "react-router-dom";


export default class Header extends React.Component {
  public render() {
    return (
      <header>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#myNavbar"
              >
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <Link to="/" className="navbar-brand">
                <img src="/img/logo.png" height="65px" />
              </Link>
            </div>

            <div className="collapse navbar-collapse" id="myNavbar">
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <a href="#">
                    {" "}
                    <span className="glyphicon glyphicon-shopping-cart" />
                    <span> Warenkorb</span>
                  </a>
                </li>

                <li className="active" />
                <li className="dropdown">
                  <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                    <i className="glyphicon glyphicon-book" /> Kategorien
                    <span className="caret" />
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="#">T-Shirts</a>
                    </li>
                    <li>
                      <a href="#">Hemden</a>
                    </li>
                    <li>
                      <a href="#">Hosen</a>
                    </li>
                    <li>
                      <a href="#">Jacken</a>
                    </li>
                    <li>
                      <a href="#">Sport</a>
                    </li>
                    <li>
                      <a href="#">%Sale</a>
                    </li>
                  </ul>
                </li>
                <li>
                <Link to="/registrierung" className="">
                <span className="glyphicon glyphicon-user" />
      <span> Registrieren</span>
                </Link>
                
                </li>
                <li>
                <Link to="/Login" className="">
                <span className="glyphicon glyphicon-user" />
      <span> Login</span>
                </Link>
                </li>
                <li>
                  <form className="form-inline my-2 my-lg-0">
                    <input
                      className="form-control mr-sm-2"
                      type="search"
                      placeholder="Suchen..."
                      aria-label="Search"
                    />
                    <button
                      className="btn btn-outline-success my-2 my-sm-0"
                      type="submit"
                    >
                      <i className="glyphicon glyphicon-search" />
                    </button>
                  </form>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}



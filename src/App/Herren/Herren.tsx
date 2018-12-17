import * as React from "react";
import { Link } from "react-router-dom";

export default function() {
  return (
    <Link to="/herren">
      <img src="/img/herr.png" id="icoon" className="img-responsive" />
      <h4>Herren</h4>
    </Link>
  );
}

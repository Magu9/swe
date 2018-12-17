import * as React from "react";
import { Link } from "react-router-dom";

export default function TimberlandBoots() {
  return (
    <Link to="/herren/timberlandboots">
      <img
        src="/img/TimberlandBoots.jpg"
        id="icoon"
        className="img-responsive"
      />
      <h4>Timberland Boots</h4>
    </Link>
  );
}

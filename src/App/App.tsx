import * as React from "react";

import Header from "./Layout/Header/Header";
import Footer from "./Layout/Footer/Footer";
import Main from "./Layout/Body/Main";

export default function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
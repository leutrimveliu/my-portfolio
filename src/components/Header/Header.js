import React from "react";
import Navbar from "./Navbar";

import "./Header.css";
const Header = () => {
  return (
    <div>
      <Navbar />
      <div className="head row d-flex justify-content-center header m-0">
        <div className="banner-text align-self-center">
          <h1 className="responsive-headline d-flex justify-content-center ">
            I'm Leutrim Veliu.
          </h1>
          <h3>I'm a ReactJS Developer based in Kosovo.</h3>
          <ul className="social"></ul>
          <hr />
        </div>
        <hr />
      </div>
    </div>
  );
};
export default Header;
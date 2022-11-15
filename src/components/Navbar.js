import React from "react";
import navLogo from "../assets/images/airbnb-logo.png";

export default function Navbar() {
  return (
    <nav>
      <img src={navLogo} alt="airbnb logo" className="nav--logo" />
    </nav>
  );
}

import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/eTaskify-logo.svg";

import "./header.styles.scss";

const Header = () => (
  <div className="header">
    <Link className="logo-container" to="/exit">
      <Logo className="logo" />
    </Link>
  </div>
);

export default Header;

import React from "react";
import { Link } from "react-router-dom";

import Search from "../components/Search";
import Logo from "../components/Logo";

import "../styles/containers/Header.css";

const Header = () => (
  <div className="background-image">
    <div className="header">
      <div className="container header__container">
        <Link to="/">
          <Logo />
        </Link>
        <Search />
      </div>
    </div>
  </div>
);

export default Header;

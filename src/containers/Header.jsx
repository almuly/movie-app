import React from "react";

import Search from "../components/Search";
import Logo from "../components/Logo";
import "../styles/containers/Header.css";

const Header = () => {
  return (
    <div className="background-image">
      <div className="header">
        <div className="container header__container">
          <Logo />
          <Search />
        </div>
      </div>
    </div>
  );
};

export default Header;

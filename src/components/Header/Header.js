import logo from "../../assets/investment-calculator-logo.png";
import React from "react";

import styled from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={styled.header}>
      <img src={logo} alt="logo" />
      <h1>Investment Calculator</h1>
    </header>
  );
};

export default Header;

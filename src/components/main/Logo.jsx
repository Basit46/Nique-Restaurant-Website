import React from "react";
import logoImg from "../../assets/nique-logo.svg";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <img src={logoImg} alt="logo" />
    </Link>
  );
};

export default Logo;

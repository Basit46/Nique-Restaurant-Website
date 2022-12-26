import React from "react";
import logoImg from "../../assets/nique-logo.svg";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  return <img onClick={handleClick} src={logoImg} alt="logo" />;
};

export default Logo;

import React from "react";
import logo from "../../assets/nique-logo.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer font-chillax md:flex justify-between cursor-pointer ">
      <div className="w-full md:w-[33.3%] text-[.875rem] flex flex-col md:block items-center justify-center text-center md:text-left mb-[40px]">
        <img className="mb-[20px]" src={logo} alt="logo" />
        <p>
          By{" "}
          <a className="text-[#Face8d]" href="https://twitter.com/Basit0282">
            Hassan Basit.
          </a>
        </p>
        <p>Powered by React JS.</p>
      </div>

      <div className="links w-full md:w-[66.6%] flex justify-between text-center md:text-left">
        <ul className="w-1/2">
          <p className="mb-[25px]">Pages</p>
          <Link to="/menu">Menu</Link>
          <Link to="/restaurant">Restaurant</Link>
          <Link to="/classes">Classes </Link>
          <Link to="/reservation">Book A Table</Link>
          <Link to="/contact">Contact </Link>
          <Link to="/blog">Blog</Link>
          <Link to="/shop">Shop</Link>
        </ul>

        <ul className="w-1/2">
          <p className="mb-[25px]">Utlility Pages</p>
          <li>Styleguide</li>
          <li>LIcensing</li>
          <li>Changelog</li>
          <li>404 Page</li>
          <li>Password Protected</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

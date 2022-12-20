import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { BsClock } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import ListItem from "../Navbar/ListItem";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="nav relative w-fit bg-white text-black font-[500] rounded-[500px] flex items-center space-x-[10px] px-[12px] py-[13px]">
      <div
        className={`${
          openMenu ? "" : "hidden"
        } menu rounded-[20px] absolute left-0 bottom-[120%] w-[250px] bg-white text-black p-[24px] `}
      >
        <h2 className="mb-[16px]">Pages</h2>
        <div>
          <ListItem name="Menu" />
          <ListItem name="Restaurant" />
          <ListItem name="Classes" />
          <ListItem name="Contact" />
          <ListItem name="Shop" />
          <ListItem name="Blog" />
        </div>
      </div>
      <FaBars
        onClick={() => setOpenMenu(!openMenu)}
        className="h-[24px] w-[24px]"
      />
      <BsClock className="h-[24px] w-[24px]" />
      <FiShoppingCart className="h-[24px] w-[24px]" />
      <ul className="flex space-x-[10px]">
        <NavLink to="/menu">Menu</NavLink>
        <NavLink to="/restaurant">Restaurant</NavLink>
        <NavLink to="/classes">Classes</NavLink>
      </ul>
      <div
        onClick={() => navigate("/reservation")}
        className="booking cursor-default bg-black text-white rounded-[30px] font-bold px-3 py-3"
      >
        BOOK A TABLE
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import MenuItems from "./MenuItems";

const MenuSection = ({ name, items }) => {
  return (
    <div id={name} className="mb-[80px]">
      <h1 className="text-[#Face8d] leading-[90%] text-[4rem] font-great-vibes">
        {name}
      </h1>
      <div>
        {items.map((item, index) => (
          <MenuItems key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MenuSection;

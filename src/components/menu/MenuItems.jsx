import React from "react";

const MenuItems = ({ item }) => {
  return (
    <div className="mb-[20px] flex justify-between items-center box-content rounded-[10px] p-2 border-2 border-transparent hover:border-[#Face8d]">
      <div className="h-[80px] w-[100px] rounded-[10px] bg-red-600 overflow-hidden">
        <img
          className="h-full w-full rounded-[10px] hover:scale-110 duration-700"
          src={item.img}
          alt="item"
        />
      </div>

      <div className="ml-[6px] md:ml-0">
        <h1 className="text-[1.5rem]">{item.name}</h1>
        <p className="text-[hsla(0,0%,100%,.6)]">
          Lorem ipsum dolor sit amet, consectetur
        </p>
      </div>
      <p className="text-[1.25rem]">${item.price}</p>
    </div>
  );
};

export default MenuItems;

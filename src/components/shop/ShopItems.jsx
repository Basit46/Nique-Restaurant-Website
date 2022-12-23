import React from "react";

const shopItems = ({ price, name, img }) => {
  return (
    <div className="mb-[40px] flex justify-between font-chillax">
      <img
        className="w-[224px] h-[168px] rounded-[10px]"
        src={img}
        alt="shop"
      />
      <div className="ml-[30px]">
        <p className="text-[#face8d] text-[0.875rem] leading-[160%]">
          $ {price} USD
        </p>
        <h1 className="text-[1.5rem] leading-[130%]">{name}</h1>
        <p className="text-[hsla(0,0%,100%,.6)] mt-[20px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit eo ut vitae
          neque sed sed sit sagittis tristique scelerisque.
        </p>
      </div>
    </div>
  );
};

export default shopItems;

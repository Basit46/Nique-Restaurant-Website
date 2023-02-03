import React from "react";

const HoverDiv = ({ text }) => {
  return (
    <div className=" w-full h-[24px] overflow-hidden">
      <div className="group-hover:translate-y-[-50%] duration-200">
        <p className="text-center">{text}</p>
        <p className="text-center">{text}</p>
      </div>
    </div>
  );
};

export default HoverDiv;

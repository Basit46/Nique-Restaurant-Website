import React from "react";

const ClassesItem = ({ img, title, name1, name2, date }) => {
  return (
    <div className="relative w-[33.3vw] h-screen bg-red-600 group font-chillax">
      <img className="h-full w-full object-cover" src={img} alt="nique-class" />
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 duration-500 group-hover:bg-black/40 flex flex-col items-center justify-center text-center">
        <p className="text-[4rem] leading-[90%] font-great-vibes text-[#Face8d]">
          {title}
        </p>
        <p className="text-[4rem] leading-[110%] font-[500]">
          {name1}
          <br />
          {name2}
        </p>
        <p className="text-[hsla(0,0%,100%,.6)] font-semibold">{date}</p>
      </div>
    </div>
  );
};

export default ClassesItem;
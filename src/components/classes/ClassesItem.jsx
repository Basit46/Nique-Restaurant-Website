import React from "react";
import { useNavigate } from "react-router-dom";

const ClassesItem = ({ item }) => {
  const navigate = useNavigate();

  const { img, title, name1, name2, date } = item;

  const handleClick = () => {
    navigate(`/classes/${name1}`);
  };

  return (
    <div
      onClick={handleClick}
      className="relative w-screen lg:w-[33.3vw] h-screen bg-red-600 group font-chillax cursor-pointer"
    >
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

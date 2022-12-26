import React from "react";

const BlogItem = ({ name, img }) => {
  return (
    <div className="mb-[50px] sm:flex justify-between font-chillax">
      <img
        className="w-full sm:w-[224px] h-[168px] rounded-[10px]"
        src={img}
        alt="shop"
      />
      <div className="sm:ml-[30px] mt-[10px] sm:mt-0">
        <p className="text-[#face8d] text-[0.875rem] leading-[160%]">
          September 19, 2022
        </p>
        <h1 className="text-[1.5rem] leading-[130%]">{name}</h1>
        <p className="text-[hsla(0,0%,100%,.6)] mt-[10px] md:mt-[20px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit eo ut vitae
          neque sed sed sit sagittis tristique scelerisque.
        </p>
      </div>
    </div>
  );
};

export default BlogItem;

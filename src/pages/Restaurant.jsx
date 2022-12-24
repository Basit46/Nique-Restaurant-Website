import React, { useEffect, useRef } from "react";

const Restaurant = () => {
  const gparentRef = useRef();
  const parentRef = useRef();
  const childRef = useRef();

  const scroll = () => {
    childRef.current.style.transform =
      "translateX(-" + parentRef.current.offsetTop + "px)";
  };

  return (
    <div
      onScroll={scroll}
      className="restaurant h-screen w-screen overflow-x-hidden"
    >
      <div ref={gparentRef} className="bg-[tomato] h-[300vw] w-screen relative">
        <div
          ref={parentRef}
          className="h-[100vh] bg-black w-full  sticky top-0 overflow-x-hidden"
        >
          <div ref={childRef} className="flex w-fit ">
            <div className="side bg-[red]"></div>
            <div className="side bg-[blue]"></div>
            <div className="side bg-[green]"></div>
            <div className="side bg-[yellow]"></div>
            <div className="side bg-[chocolate]"></div>
            <div className="side bg-[aqua]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;

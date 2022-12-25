import React, { useRef } from "react";
import img1 from "../assets/nique-res1.webp";
import img2 from "../assets/nique-res2.webp";
import img3 from "../assets/nique-res3.webp";
import img4 from "../assets/nique-res4.webp";
import img5 from "../assets/nique-res5.webp";
import img6 from "../assets/nique-res6.webp";
import img7 from "../assets/nique-res7.webp";
import Navbar from "../components/main/Navbar";

const Restaurant = () => {
  const gparentRef = useRef();
  const parentRef = useRef();
  const childRef = useRef();

  const scroll = () => {
    gparentRef.current.style.height = childRef.current.offsetWidth + "px";

    if (
      parentRef.current.offsetTop >
      childRef.current.offsetWidth - window.innerWidth
    ) {
      return;
    } else {
      childRef.current.style.transform =
        "translateX(-" + parentRef.current.offsetTop + "px)";
    }
  };

  return (
    <div
      onScroll={scroll}
      className="restaurant h-screen w-screen overflow-x-hidden"
    >
      <div ref={gparentRef} className="bg-[tomato] h-[300vw] w-screen relative">
        <div
          ref={parentRef}
          className="h-[100vh] bg-black w-full sticky top-0 overflow-x-hidden"
        >
          <div className="absolute z-50 bottom-[50px] left-0 w-full grid place-items-center">
            <Navbar />
          </div>
          <div ref={childRef} className="flex w-fit ">
            <div className="side">
              <img
                src={img1}
                className="h-full w-full object-cover"
                alt="restaurant"
              />
            </div>

            <div className="side">
              <img
                src={img2}
                className="h-full w-full object-cover"
                alt="restaurant"
              />
            </div>

            <div className="side">
              <img
                src={img3}
                className="h-full w-full object-cover"
                alt="restaurant"
              />
            </div>

            <div className="side">
              <img
                src={img4}
                className="h-full w-full object-cover"
                alt="restaurant"
              />
            </div>

            <div className="side">
              <img
                src={img5}
                className="h-full w-full object-cover"
                alt="restaurant"
              />
            </div>

            <div className="side">
              <img
                src={img6}
                className="h-full w-full object-cover"
                alt="restaurant"
              />
            </div>

            <div className="side">
              <img
                src={img7}
                className="h-full w-full object-cover"
                alt="restaurant"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;

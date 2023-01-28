import React, { useRef } from "react";
import ClassesItem from "../components/classes/ClassesItem";
import Logo from "../components/main/Logo";
import Navbar from "../components/main/Navbar";
import { classesItems } from "../assets/classesItems";

const Classes = () => {
  const gparentRef = useRef();
  const parentRef = useRef();
  const childRef = useRef();

  const scroll = () => {
    if (window.innerWidth > 1024) {
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
    } else {
      return;
    }
  };

  return (
    <div
      onScroll={scroll}
      className="restaurant h-screen w-screen overflow-x-hidden"
    >
      <div
        ref={gparentRef}
        className="bg-[tomato] lg:h-[300vw] w-screen relative"
      >
        <div
          ref={parentRef}
          className="h-fit lg:h-[100vh] bg-black w-full lg:sticky top-0 overflow-x-hidden"
        >
          <div className="fixed z-50 top-[50px] left-1/2 translate-x-[-50%] ">
            <Logo />
          </div>

          <div className="fixed z-50 bottom-[50px] left-0 w-full grid place-items-center">
            <Navbar />
          </div>
          <div ref={childRef} className="lg:flex w-fit ">
            {classesItems.map((item, index) => (
              <ClassesItem key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classes;

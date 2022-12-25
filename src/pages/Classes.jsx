import React, { useRef } from "react";
import ClassesItem from "../components/classes/ClassesItem";
import Navbar from "../components/main/Navbar";
import img1 from "../assets/nique-class1.webp";
import img2 from "../assets/nique-class2.webp";
import img3 from "../assets/nique-class3.webp";
import img4 from "../assets/nique-class4.webp";
import img5 from "../assets/nique-class5.webp";

const Classes = () => {
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
            <ClassesItem
              img={img1}
              title="Asian"
              name1="Delicious"
              name2="Breakfast"
              date="June 16, 2023"
            />
            <ClassesItem
              img={img2}
              title="Breakfast"
              name1="Coffee"
              name2="Time"
              date="March 17, 2023"
            />
            <ClassesItem
              img={img3}
              title="Vegan"
              name1="Vgan"
              name2="Burger"
              date="January 10, 2023"
            />
            <ClassesItem
              img={img4}
              title="Italian"
              name1="Salad"
              name2="Style"
              date="November 19, 2023"
            />
            <ClassesItem
              img={img5}
              title="Italian"
              name1="Homemade"
              name2="Honey"
              date="October 8, 2023"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classes;

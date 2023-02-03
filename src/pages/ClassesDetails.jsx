import React, { useEffect, useState } from "react";
import Logo from "../components/main/Logo";
import Navbar from "../components/main/Navbar";
import Footer from "../components/main/Footer";
import { classesItems } from "../assets/classesItems";
import { useParams } from "react-router-dom";
import teacher from "../assets/nique-teacher.webp";

const ClassesDetails = () => {
  const { classId } = useParams();

  const [itemDetails, setItemDetails] = useState({});
  useEffect(() => {
    setItemDetails(classesItems.find((item) => item.id === Number(classId)));
  }, [classId]);

  return (
    <div className="contact lg:flex h-fit w-full relative pb-[100px] sm:pb-0">
      <div className="lg:sticky top-0 img-box w-screen lg:w-1/2 h-[400px] lg:h-screen flex flex-col justify-between items-center pb-[120px] pt-[60px] lg:pb-[60px]">
        <Logo />
        <div>
          <p className="font-great-vibes text-[4rem] lg:text-[5rem] text-[#Face8d] leading-[90%] text-center">
            {itemDetails.title}
          </p>
          <p className="font-chillax text-[3.125rem] md:text-[4rem] lg:text-[5rem] font-[500] leading-[100%] text-center">
            {itemDetails.name1} {itemDetails.name2}
          </p>
        </div>
        <div className="fixed bottom-[20px] lg:static z-50">
          <Navbar />
        </div>
      </div>

      <div className="w-screen lg:w-1/2 px-[24px] py-[40px] md:p-[64px] text-[hsla(0,0%,100%,.6)] ">
        <p className="">Cooking Class</p>
        <h1 className="text-white text-[2.5rem] leading-[110%] font-[500] my-[20px]">
          Reserve your spot
        </h1>
        <p className="text-[1.125rem] leading-[160%] mb-[25px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor
          massa id neque aliquam.
        </p>
        <div className="flex items-center mb-[30px] space-x-[20px]">
          <button className="bg-[#f8d49e] text-black rounded-[500px] px-[1.5rem] py-[1rem] font-[500] ">
            BOOK A SPOT
          </button>
          <p className="text-white text-[1.5rem] leading-[130%]">$89</p>
        </div>

        <div className="detailsSec mb-[30px]">
          <p className="font-great-vibes text-[#face8d] text-[4rem]">Details</p>
          <div>
            <p>Date</p>
            <p>June 16, 2023 8:00 PM</p>
          </div>

          <div>
            <p>Teacher</p>
            <span className="flex items-center">
              <img
                className="rounded-[100px] h-[60px] w-[60px]"
                src={teacher}
                alt="teacher"
              />
              <p>Jakob Grønberg</p>
            </span>
          </div>
          <div>
            <p>Language</p>
            <p>English</p>
          </div>
          <div>
            <p>Location</p>
            <p>nique. Main Street 16 10629 Berlin</p>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default ClassesDetails;

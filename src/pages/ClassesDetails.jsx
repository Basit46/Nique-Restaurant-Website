import React, { useEffect, useState } from "react";
import Logo from "../components/main/Logo";
import Navbar from "../components/main/Navbar";
import Footer from "../components/main/Footer";
import { classesItems } from "../assets/classesItems";
import { useParams } from "react-router-dom";

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
        <p className="text-[1.25rem]">
          Volutpat maecenas volutpat blandit aliquam etiam erat velit
          scelerisque. Arcu non odio euismod lacinia. Tortor aliquam nulla
          facilisi cras fermentum odio eu.
        </p>

        <Footer />
      </div>
    </div>
  );
};

export default ClassesDetails;

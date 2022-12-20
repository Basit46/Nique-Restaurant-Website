import React from "react";
import logo from "../assets/nique-logo.svg";
import Navbar from "../components/main/Navbar";

const Home = () => {
  return (
    <div className="home h-full w-full overflow-hidden flex flex-col items-center py-[50px] ">
      <img className="mb-[50px]" src={logo} alt="logo" />
      <p className="text-[#face8d] text-[5rem] font-great-vibes">
        The pure taste of
      </p>
      <h1 className="text-[10rem] leading-[100%] font-[500]">Thailand</h1>
      <p className="text-[1.5rem] text-center mb-[25px]">
        It is very important for the customer to follow the
        <br /> customer's training, but it is the same time as the
        <br /> work.
      </p>
      <Navbar />
    </div>
  );
};

export default Home;

import React from "react";
import logo from "../assets/nique-logo.svg";
import Navbar from "../components/main/Navbar";
import Footer from "../components/main/Footer";

const Reservation = () => {
  return (
    <div className="reservation lg:flex">
      <div className="lg:sticky top-0 h-[400px] lg:h-screen img-box w-screen lg:w-1/2 flex flex-col justify-between items-center pt-[50px] pb-[100px] lg:pt-[50px] lg:pb-[50px]">
        <img src={logo} alt="logo" />
        <div>
          <p className="font-great-vibes text-[4rem] lg:text-[5rem] text-[#Face8d] leading-[90%] text-center">
            Book a table
          </p>
          <p className="font-chillax text-[3.125rem] md:text-[4rem] lg:text-[5rem] font-[500] leading-[100%] text-center">
            Reservation
          </p>
        </div>
        <div className="fixed bottom-[20px] lg:static z-50">
          <Navbar />
        </div>
      </div>

      <div className="w-screen lg:w-1/2 p-[64px]">
        <h1 className="text-[2.5rem] leading-[110%] font-[500]">
          Book a table
        </h1>
        <p className="text-[1.25rem] leading-[160%] text-white/60 mt-[10px] ">
          Volutpat maecenas volutpat blandit aliquam etiam erat velit
          scelerisque. Arcu non odio euismod lacinia. Tortor aliquam nulla
          facilisi cras fermentum odio eu.
        </p>

        <form className="my-[40px]">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Enter your name" />

          <label htmlFor="guests">Number of Guests</label>
          <input type="number" placeholder="2" id="guests" />

          <div className="flex justify-between">
            <div>
              <label htmlFor="date">Date</label>
              <input type="text" id="date" placeholder="16.06.2022" />
            </div>

            <div>
              <label htmlFor="time">Time</label>
              <input type="text" id="time" placeholder="6pm" />
            </div>
          </div>

          <button className="mt-[20px]  bg-[#f8d49e] text-black w-full py-[1rem] px-[1.5rem] rounded-[500px] font-[500]">
            BOOK A TABLE
          </button>
        </form>

        <Footer />
      </div>
    </div>
  );
};

export default Reservation;

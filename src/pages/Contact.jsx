import React from "react";
import logo from "../assets/nique-logo.svg";
import Navbar from "../components/main/Navbar";
import Footer from "../components/main/Footer";

const Contact = () => {
  return (
    <div className="contact flex h-fit w-full relative">
      <div className="sticky top-0 h-screen img-box w-1/2 flex flex-col justify-between items-center py-[60px]">
        <img src={logo} alt="logo" />
        <div>
          <p className="font-great-vibes text-[5rem] text-[#Face8d] leading-[90%] text-center">
            Contact
          </p>
          <p className="font-chillax text-[5rem] font-[500] leading-[100%] text-center">
            Get in Touch
          </p>
        </div>
        <Navbar />
      </div>

      <div className="w-1/2 p-[64px] text-[hsla(0,0%,100%,.6)] ">
        <p className="text-[1.25rem]">
          Volutpat maecenas volutpat blandit aliquam etiam erat velit
          scelerisque. Arcu non odio euismod lacinia. Tortor aliquam nulla
          facilisi cras fermentum odio eu.
        </p>

        <form>
          <label htmlFor="">Name</label>
          <input type="text" placeholder="Enter your name" />

          <label htmlFor="">Email</label>
          <input type="text" placeholder="Your email address" />

          <label htmlFor="">Message</label>
          <textarea name="" placeholder="Your message"></textarea>

          <button className="mt-[20px] mb-[100px] bg-[#f8d49e] text-black w-full py-[1rem] px-[1.5rem] rounded-[500px] font-[500]">
            SEND MESSAGE
          </button>
        </form>

        <Footer />
      </div>
    </div>
  );
};

export default Contact;

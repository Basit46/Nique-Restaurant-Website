import React from "react";
import Logo from "../components/main/Logo";
import Navbar from "../components/main/Navbar";
import MenuSection from "../components/menu/MenuSection";
import img from "../assets/starters1.webp";
import Footer from "../components/main/Footer";

const Menu = () => {
  const startersItems = [
    {
      img: img,
      name: "Tomato Soup",
      price: "4.90",
    },
    {
      img: img,
      name: "Noodle Soup",
      price: "5.50",
    },
    {
      img: img,
      name: "Pumpkin Soup",
      price: "6.90",
    },
  ];

  const breakfastItems = [
    {
      img: img,
      name: "Delicious Pancakes",
      price: "8.90",
    },
    {
      img: img,
      name: "Delicious Heaven",
      price: "9.50",
    },
    {
      img: img,
      name: "Oatmeal Spirit",
      price: "9.90",
    },
    {
      img: img,
      name: "Avocado Smash",
      price: "7.90",
    },
  ];

  const lunchItems = [
    {
      img: img,
      name: "Italian Pizza",
      price: "8.90",
    },
    {
      img: img,
      name: "Vegan Burger",
      price: "9.50",
    },
    {
      img: img,
      name: "Sea Curry",
      price: "9.90",
    },
    {
      img: img,
      name: "Needle Bowl",
      price: "7.90",
    },
  ];

  const drinksItems = [
    {
      img: img,
      name: "Panthouse Tonic",
      price: "10.90",
    },
    {
      img: img,
      name: "Apple Breeze",
      price: "10.90",
    },
    {
      img: img,
      name: "Frenchman Blitz",
      price: "6.90",
    },
  ];

  return (
    <div className="menuPage relative w-screen h-screen overflow-y-scroll lg:flex font-chillax pb-[100px] sm:pb-0">
      <div className="leftSection lg:sticky top-0 w-full lg:w-1/2 h-[400px] lg:h-screen flex flex-col items-center justify-between pt-[50px] pb-[100px] lg:pt-[50px] lg:pb-[50px]">
        <Logo />

        <div>
          <p className="text-[#face8d] text-[4rem] lg:text-[5rem] leading-[90%] font-great-vibes text-center">
            Check Out
          </p>
          <h1 className="text-[3.125rem] md:text-[4rem] lg:text-[5rem] leading-[100%] font-chillax font-[500] text-center">
            Our Menu
          </h1>
        </div>
        <div className="fixed bottom-[20px] lg:static z-50">
          <Navbar />
        </div>
      </div>

      <div className="relative w-full lg:w-1/2 h-fit bg-black">
        <ul className="sticky top-0 left-0 w-full bg-black flex justify-center space-x-[15px] md:space-x-[30px] py-3 text-[1.2rem]">
          <li className="text-white/60 hover:text-white duration-100 cursor-pointer">
            <a href="#Starters">Starters</a>
          </li>
          <li className="text-white/60 hover:text-white duration-100 cursor-pointer">
            <a href="#Breakfast">Breakfast</a>
          </li>
          <li className="text-white/60 hover:text-white duration-100 cursor-pointer">
            <a href="#Lunch">Lunch</a>
          </li>
          <li className="text-white/60 hover:text-white duration-100 cursor-pointer">
            <a href="#Drinks">Drinks</a>
          </li>
        </ul>

        <div className="h-fit w-full px-[20px] md:px-[70px] mt-[35px] lg:mt-[60px]">
          <MenuSection name="Starters" items={startersItems} />
          <MenuSection name="Breakfast" items={breakfastItems} />
          <MenuSection name="Lunch" items={lunchItems} />
          <MenuSection name="Drinks" items={drinksItems} />

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Menu;

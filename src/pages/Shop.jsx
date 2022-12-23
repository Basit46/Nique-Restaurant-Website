import React from "react";
import logo from "../assets/nique-logo.svg";
import Navbar from "../components/main/Navbar";
import Footer from "../components/main/Footer";
import ShopItems from "../components/shop/ShopItems";
import img from "../assets/nique-shop1.webp";

const Shop = () => {
  return (
    <div className="shop flex">
      <div className="sticky top-0 h-screen img-box w-1/2 flex flex-col justify-between items-center py-[60px]">
        <img src={logo} alt="logo" />
        <div>
          <p className="font-great-vibes text-[5rem] text-[#Face8d] leading-[90%] text-center">
            Shop
          </p>
          <p className="font-chillax text-[5rem] font-[500] leading-[100%] text-center">
            Give a gift
          </p>
        </div>
        <Navbar />
      </div>

      <div className="w-1/2 p-[64px]">
        <ShopItems img={img} name="Gift Card Light" price={"15.00"} />
        <ShopItems img={img} name="Gift Card Standard" price={"30.00"} />
        <ShopItems img={img} name="Gift Card Premium" price={"50.00"} />
        <ShopItems img={img} name="Gift Card Gold" price={"100.00"} />

        <Footer />
      </div>
    </div>
  );
};

export default Shop;

import React from "react";
import logo from "../assets/nique-logo.svg";
import Navbar from "../components/main/Navbar";
import Footer from "../components/main/Footer";
import BlogItem from "../components/blog/BlogItem";
import img from "../assets/nique-blog1.webp";

const Blog = () => {
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
        <BlogItem img={img} name="Gatsby Night" />
        <BlogItem img={img} name="Classic Dinner Night" />
        <BlogItem img={img} name="New Restaurant" />
        <BlogItem img={img} name="Romantic Dinner" />
        <BlogItem img={img} name="Brand New Kitchen" />

        <Footer />
      </div>
    </div>
  );
};

export default Blog;

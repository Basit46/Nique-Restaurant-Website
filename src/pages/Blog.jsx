import React from "react";
import Logo from "../components/main/Logo";
import Navbar from "../components/main/Navbar";
import Footer from "../components/main/Footer";
import BlogItem from "../components/blog/BlogItem";
import img from "../assets/nique-blog1.webp";

const Blog = () => {
  return (
    <div className="shop lg:flex pb-[100px] sm:pb-0">
      <div className="lg:sticky top-0 h-[400px] lg:h-screen img-box w-screen lg:w-1/2 flex flex-col justify-between items-center pb-[120px] pt-[60px] lg:pb-[60px]">
        <Logo />
        <div>
          <p className="font-great-vibes text-[4rem] lg:text-[5rem] text-[#Face8d] leading-[90%] text-center">
            Blog
          </p>
          <p className="font-chillax text-[3.125rem] md:text-[4rem] lg:text-[5rem] font-[500] leading-[100%] text-center">
            Latest News
          </p>
        </div>
        <div className="fixed bottom-[20px] lg:static z-50">
          <Navbar />
        </div>
      </div>

      <div className="w-screen lg:w-1/2 p-[32px] md:p-[64px]">
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

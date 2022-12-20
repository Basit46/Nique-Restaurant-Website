import React from "react";
import { Routes, Route } from "react-router-dom";
import Menu from "./pages/Menu";
import Restaurant from "./pages/Restaurant";
import Classes from "./pages/Classes";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Reservation from "./pages/Reservation";

const Router = () => {
  return (
    <div className="h-screen w-screen bg-black text-white font-chillax">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="menu" element={<Menu />} />
        <Route path="restaurant" element={<Restaurant />} />
        <Route path="classes" element={<Classes />} />
        <Route path="shop" element={<Shop />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="reservation" element={<Reservation />} />
      </Routes>
    </div>
  );
};

export default Router;

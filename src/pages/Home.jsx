import React from "react";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Announcement from "../components/Announcement";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Products />
    </div>
  );
};

export default Home;

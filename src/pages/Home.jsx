import React from "react";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Announcement from "../components/Announcement";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Products />
    </div>
  );
};

export default Home;

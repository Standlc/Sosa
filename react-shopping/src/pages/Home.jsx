import React from "react";
import { useSelector } from "react-redux";
import Categories from "../components/Categories";
import NewsLetter from "../components/NewsLetter";
import Products from "../components/Products";
import Slider from "../components/Slider";

const Home = () => {
  const user = useSelector((state) => state.user.currentUser);
  console.log(user);
  return (
    <div>
      <Slider />
      <Categories />
      <Products title="Popular Products" />
      <NewsLetter />
    </div>
  );
};

export default Home;

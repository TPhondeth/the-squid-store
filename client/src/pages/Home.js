import React, { useState } from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import Jumbotron from "../components/Jumbotron";
import Carousel from  "../components/Carousel";

const Home = () => {
  return (
    <div className="container">
      {/* <Jumbotron /> */}
      <Carousel/>
      <CategoryMenu />
      <ProductList />
      <Cart />
    </div>
  );
};

export default Home;

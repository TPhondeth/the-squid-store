import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Carousel from "../components/Carousel";
import Cart from "../components/Cart";

const Home = () => {
  return (
    <div className="container">
      {/* <Jumbotron /> */}
      <Carousel />
      <CategoryMenu />
      <ProductList />
      <Cart />
    </div>
  );
};

export default Home;

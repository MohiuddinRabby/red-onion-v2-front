import React from "react";
import Foods from "../Foods/Foods";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import ChooseUs from "../ChooseUs/ChooseUs";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Foods></Foods>
      <ChooseUs></ChooseUs>
      <Footer></Footer>
    </>
  );
};

export default Home;

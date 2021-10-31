import React from "react";
import Status from "../Status/Status";
import Welcome from "../Welcome/Welcome";
import CarouselSlider from "./CarouselSlider/CarouselSlider";
import ServicesForHome from "./ServicesForHome";

const Home = () => {
  return (
    <div>
      <CarouselSlider></CarouselSlider>
      <Status></Status>
      <Welcome></Welcome>
      <ServicesForHome></ServicesForHome>
    </div>
  );
};

export default Home;

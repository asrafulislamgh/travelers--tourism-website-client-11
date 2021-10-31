import React from "react";
import Gallery from "../Gallery/Gallery";
import Newsletter from "../Newsletter/Newsletter";
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
      <Gallery></Gallery>
      <Newsletter></Newsletter>
    </div>
  );
};

export default Home;

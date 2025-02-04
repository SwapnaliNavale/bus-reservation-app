import React from "react";
import MyNavbar from "../Components/MyNavbar";
import HeroSection from "../Components/HeroSection";

import AboutUs from "../Components/AboutUs";
import Footer from "../Components/Footer";
import MovingImages from "../Components/MovingImages";
import OfferCarousel from "../Components/OffersCarousel";



const Homepage = () => {
  return (
    <>
      <MyNavbar />
      <HeroSection />
      <MovingImages/>
      <OfferCarousel/>
      {/* <AboutUs/> */}
      <Footer/>
    </>
  );
};

export default Homepage;

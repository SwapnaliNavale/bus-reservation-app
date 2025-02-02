import React from "react";
import MyNavbar from "../Components/MyNavbar";
import HeroSection from "../Components/HeroSection";
import OffersCarousel from "../Components/Offers";



const Homepage = () => {
  return (
    <>
      <MyNavbar />
      <HeroSection />
      <OffersCarousel/>
    </>
  );
};

export default Homepage;

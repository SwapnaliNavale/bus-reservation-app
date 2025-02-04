import React from "react";
import MyNavbar from "../Components/MyNavbar";
import HeroSection from "../Components/HeroSection";
import OffersCarousel from "../Components/Offers";
import AboutUs from "../Components/AboutUs";
import Footer from "../Components/Footer";



const Homepage = () => {
  return (
    <>
      <MyNavbar />
      <HeroSection />
      <OffersCarousel/>
      {/* <AboutUs/> */}
      <Footer/>
    </>
  );
};

export default Homepage;

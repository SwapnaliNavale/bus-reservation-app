
import React, { useEffect, useRef } from "react";
import '../css/offerscaraosel.css';

// const offers = [
//   {
//     id: 1,
//     title: "50% Off on Bus Tickets",
//     description: "Book now and get 50% off on your next bus ride!",
//     image: "https://via.placeholder.com/300x200",
//   },
//   {
//     id: 2,
//     title: "Weekend Getaway Deals",
//     description: "Enjoy exclusive discounts on weekend trips.",
//     image: "https://via.placeholder.com/300x200",
//   },
//   {
//     id: 3,
//     title: "Early Bird Discounts",
//     description: "Book early and save up to 30% on your travel.",
//     image: "https://via.placeholder.com/300x200",
//   },
//   {
//     id: 4,
//     title: "Group Travel Offers",
//     description: "Special discounts for group bookings.",
//     image: "https://via.placeholder.com/300x200",
//   },
//   {
//     id: 5,
//     title: "Last-Minute Deals",
//     description: "Grab amazing last-minute travel offers.",
//     image: "https://via.placeholder.com/300x200",
//   },
// ];
const offers = [
    {
      title: "Save up to Rs 250 on bus tickets",
      code: "FIRST",
      validity: "Valid till 28 Feb",
      bgColor: "bg-primary",
      icon: "https://via.placeholder.com/50x50?text=FIRST",
    },
    {
      title: "Save up to Rs 300 on AP, TS routes",
      code: "SUPERHIT",
      validity: "Valid till 28 Feb",
      bgColor: "bg-gradient-to-r from-teal-500 to-blue-500",
      icon: "https://via.placeholder.com/50x50?text=SUPERHIT",
    },
    {
      title: "Save up to Rs 300 on Chartered Bus",
      code: "CHARTERED15",
      validity: "Valid till 28 Feb",
      bgColor: "bg-danger",
      icon: "https://via.placeholder.com/50x50?text=CHARTERED",
    },
    {
      title: "Save 25% on KSRTC tickets",
      code: "SBNEW25",
      validity: "Valid till 28 Feb",
      bgColor: "bg-success",
      icon: "https://via.placeholder.com/50x50?text=KSRTC",
    },
  ];
const OffersCarousel = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    let scrollAmount = 0;
    const scrollSpeed = 1; // Adjust speed as needed

    const autoScroll = () => {
      if (carousel) {
        carousel.scrollLeft += scrollSpeed;
        scrollAmount += scrollSpeed;

        // Reset scroll position when reaching the end
        if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
          carousel.scrollLeft = 0;
          scrollAmount = 0;
        }
      }
      requestAnimationFrame(autoScroll);
    };

    autoScroll();
  }, []);

  return (
    <div className="offers-carousel-container">
      <h2>Exclusive Offers</h2>
      <div className="offers-carousel" ref={carouselRef}>
        {offers.map((offer) => (
          <div key={offer.id} className="offer-card">
            <img src={offer.image} alt={offer.title} />
            <h3>{offer.title}</h3>
            <p>{offer.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OffersCarousel;
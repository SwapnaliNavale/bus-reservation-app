import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import sbstcLogo from '../assets/offer_1.png'; // Corrected import path
import intrcityLogo from '../assets/offer_2.png'; // Corrected import path
import anotherOfferImage from '../assets/offer_3.png'; // Corrected import path

const OfferCard = ({ image, offerText, validity, button, link }) => {
  return (
    <Carousel.Item>
      <div className="d-flex justify-content-center align-items-center" style={{ height: '200px' }}>
        <div className="card text-center" style={{ width: '18rem' }}>
          <img className="card-img-top" src={image} alt="Bus Logo" />
          <div className="card-body">
            <h5 className="card-title">{offerText}</h5>
            <p className="card-text">{validity}</p>
            <a href={link} className="btn btn-primary">{button}</a>
          </div>
        </div>
      </div>
    </Carousel.Item>
  );
};

const OfferCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const cardsData = [
    {
      image: sbstcLogo, 
      offerText: "Save 25% on your first booking with TicketTrail",
      validity: "Valid till 31st March",
      button: "Book Now",
      link: "/book-now"
    },
    {
      image: intrcityLogo, 
      offerText: "Flat Rs. 100 off on AC bus tickets",
      validity: "Valid for bookings made today",
      button: "Book Now",
      link: "/book-now"
    },
    {
      image: anotherOfferImage, 
      offerText: "Weekend Special: 15% off on all bookings",
      validity: "Valid for weekends only",
      button: "Book Now",
      link: "/book-now"
    }
  ];

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {cardsData.map((card, index) => (
        <OfferCard key={index} {...card} />
      ))}
    </Carousel>
  );
};

export default OfferCarousel;
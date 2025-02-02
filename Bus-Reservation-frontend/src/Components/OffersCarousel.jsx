// import React from "react";
// import { Carousel, Container } from "react-bootstrap";
// import bg from '../assets/Background.png'

// const OffersCarousel = () => {
//   const offers = [
//     {
//       title: "20% Off on All City Rides!",
//       description: "Enjoy discounted fares on all intercity travels.",
//       image: {bg},
//     },
//     {
//       title: "Buy 1 Get 1 Free!",
//       description: "Limited-time offer on weekend tickets.",
//       image: "https://via.placeholder.com/800x300?text=Weekend+Special",
//     },
//     {
//       title: "Flat $5 Off!",
//       description: "For your first booking with us.",
//       image: "https://via.placeholder.com/800x300?text=First+Booking+Discount",
//     },
//   ];

//   return (
//     <Container className="my-5">
//       <Carousel fade indicators={false} controls={false} interval={3000} pause={false}>
//         {offers.map((offer, index) => (
//           <Carousel.Item key={index}>
//             <img
//               className="d-block w-100 rounded-3"
//               src={offer.image}
//               alt={`Slide ${index}`}
//             />
//             <Carousel.Caption>
//               <h3 className="fw-bold">{offer.title}</h3>
//               <p>{offer.description}</p>
//             </Carousel.Caption>
//           </Carousel.Item>
//         ))}
//       </Carousel>
//     </Container>
//   );
// };

// export default OffersCarousel;



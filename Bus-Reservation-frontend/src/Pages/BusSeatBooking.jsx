import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import MyNavbar from "../Components/MyNavbar";
const BusSeatBooking = () => {
  const rows = 10;
  const cols = 4;
  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeatSelection = (seat) => {
    setSelectedSeats((prevSelectedSeats) =>
      prevSelectedSeats.includes(seat)
        ? prevSelectedSeats.filter((s) => s !== seat)
        : [...prevSelectedSeats, seat]
    );
  };

  return (
    <>
    <MyNavbar/>
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-8">
          <div className="border p-3">
            <div className="d-flex flex-column align-items-center">
              <div className="mb-2 text-center fw-bold">Driver</div>
              <div className="bus-seat-layout">
                {[...Array(rows)].map((_, rowIndex) => (
                  <div key={rowIndex} className="d-flex justify-content-center mb-2">
                    {[...Array(cols)].map((_, colIndex) => {
                      const seat = `R${rowIndex + 1}C${colIndex + 1}`;
                      return (
                        <button
                          key={seat}
                          className={`btn btn-sm me-2 ${selectedSeats.includes(seat) ? "btn-primary" : "btn-outline-secondary"}`}
                          onClick={() => toggleSeatSelection(seat)}
                        >
                          {seat}
                        </button>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <h5>Selected Seats</h5>
          <ul>
            {selectedSeats.map((seat) => (
              <li key={seat}>{seat}</li>
            ))}
          </ul>
          <h5>Total Fare: ${selectedSeats.length * 10}</h5>
          <Link to="/payment">
          <button className="btn btn-success w-100">BOOK</button>
          </Link>
        </div>
      </div>
    </div>
    </>
  );
};

export default BusSeatBooking;

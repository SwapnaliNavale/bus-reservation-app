import React, { useState } from "react";
import MyNavbar from "../Components/MyNavbar";
// import "bootstrap/dist/css/bootstrap.min.css";

function PaymentGateway(){
  const [selectedSeats, setSelectedState] = useState('')
  const farePerPassenger = 10;
  const totalFare = selectedSeats.length * farePerPassenger;

  return (
    <>
    
    <MyNavbar/>
    <div className="container p-3 mt-4">
      <div className='row'>
          <div className='col-3'></div>
      <div className='col-6 p-4 shadow'>
      <h5 className="text-center fw-bold">Payment Gateway</h5>
      
      <div className='row'>
          <div className ='col'>
              <div className='mb-4'>
                  <strong>No of passengers: </strong>
                  {selectedSeats.length}
              </div>
          </div>
      </div>
      <div className='row'>
          <div className ='col'>
              <div className='mb-4'>
                  <strong>Fare per passenger: </strong>
                  ${farePerPassenger}
              </div>
          </div>
      </div>
      <div className='row'>
          <div className ='col'>
              <div className='mb-4'>
                  <strong>Total fare: </strong>
                  ${totalFare}
              </div>
          </div>
      </div>
      <button className="btn btn-primary w-100">Pay</button>
    </div>
    </div>
    </div>
    </>
  );
};

export default PaymentGateway;
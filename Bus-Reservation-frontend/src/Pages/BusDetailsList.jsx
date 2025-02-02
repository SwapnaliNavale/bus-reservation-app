// import React from "react";
// import { useNavigate } from "react-router-dom";
// // import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";

// const MyBusList = () => {
//     const navigate = useNavigate();

//     // Static bus data for testing
//     const buses = [
//         { id: 1, busNo: "AB1234", capacity: 40, route: { source: "City A", destination: "City B" }, schedule: { departureTime: "10:00 AM" } },
//         { id: 2, busNo: "XY5678", capacity: 35, route: { source: "City C", destination: "City D" }, schedule: { departureTime: "2:30 PM" } },
//         { id: 3, busNo: "LM9012", capacity: 50, route: { source: "City E", destination: "City F" }, schedule: { departureTime: "6:45 PM" } }
//     ];

//     const handleBookNow = (busId) => {
//         navigate(`/seat-selection/${busId}`);
//     };

//     return (
//         <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {buses.map((bus) => (
//                 <Card key={bus.id} className="p-4 shadow-lg rounded-lg border border-gray-200">
//                     <CardContent>
//                         <h2 className="text-xl font-semibold text-gray-800">🚌 Bus No: {bus.busNo}</h2>
//                         <p className="text-gray-600">Capacity: {bus.capacity} Seats</p>
//                         <p className="text-gray-600">Route: {bus.route.source} ➝ {bus.route.destination}</p>
//                         <p className="text-gray-600">Departure: {bus.schedule.departureTime}</p>
//                         <Button className="mt-4 w-full bg-blue-500 hover:bg-blue-600" 
//                             onClick={() => handleBookNow(bus.id)}>
//                             Book Now
//                         </Button>
//                     </CardContent>
//                 </Card>
//             ))}
//         </div>
//     );
// };

// export default MyBusList;


import React from "react";
import BusDetails from "../Components/BusDetails";


const BusDetailsList = ({ buses, handleBookNow }) => {
  return (
    <div>
      {buses.map((bus) => (
        <BusDetails key={bus.id} bus={bus} onBookNow={handleBookNow} />
      ))}
    </div>
  );
};

export default BusDetailsList;


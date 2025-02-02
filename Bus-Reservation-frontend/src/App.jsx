import Login from "./Pages/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Pages/Register";
import ForgotPassword from "./Pages/ForgotPassword";
import "./App.css";
// import Navbar from "./Components/Navbar";
import MyNavbar from "./Components/MyNavbar";
import Mylogin from "./Pages/Mylogin";
import Homepage from "./Pages/Homepage";
import TicketBooking from "./Pages/TicketBooking";
import BusList from "./Pages/BusList";
import BusSeatBooking from "./Pages/BusSeatBooking";
import PaymentGateway from "./Pages/PaymentGateway";
import MyBusList from "./Pages/BusDetailsList";
import BusDetailsList from "./Pages/BusDetailsList";
import BusListPage from "./Pages/BusListPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Navbar />}></Route> */}
          <Route path="/" element={<Homepage />}></Route>
          {/* <Route path="/" element={<MyNavbar />}></Route> */}
          <Route path="/login" element={<Mylogin />}></Route>
          {/* <Route path="/login" element={<Login />}></Route> */}
          <Route path="/register" element={<Register />}></Route>
          <Route path="/forgot-password" element={<ForgotPassword />}></Route>
          <Route path="/user/ticket" element={<TicketBooking />}></Route>
          {/* <Route path="/bus-list" element={<BusList />}></Route> */}
          <Route path="/bus-list" element={<BusListPage />}></Route>
          <Route path="/select-seat" element={<BusSeatBooking />}></Route>
          <Route path="/payment" element={<PaymentGateway />}></Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;

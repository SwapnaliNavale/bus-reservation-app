import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Pages/Register";
import ForgotPassword from "./Pages/ForgotPassword";
import "./App.css";
import Mylogin from "./Pages/Mylogin";
import Homepage from "./Pages/Homepage";
import TicketBooking from "./Pages/TicketBooking";
import BusSeatBooking from "./Pages/BusSeatBooking";
import PaymentGateway from "./Pages/PaymentGateway";
import BusListPage from "./Pages/BusListPage";
// import AdminPage from "./Pages/Admin/AdminPage";
import AdminPageWithRouter from "./Pages/Admin/AdminPage";
import AboutUs from "./Components/AboutUs";
import Services from "./Components/Services";
import Offers from "./Components/Offers";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          {/* <Route path="/admin-home" element={<AdminPage />}></Route> */}
          <Route path="/admin/*" element={<AdminPageWithRouter/>}></Route>
          <Route path="/login" element={<Mylogin />}></Route>
          <Route path="/about" element={<AboutUs />}></Route>
          <Route path="/offers" element={<Offers />}></Route>
          <Route path="/services" element={<Services />}></Route>
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

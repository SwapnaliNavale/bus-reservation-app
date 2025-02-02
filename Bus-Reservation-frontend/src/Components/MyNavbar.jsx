// import React from "react";
// import { Link } from "react-router-dom";
// import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// // import logo from './Navbar'
// import logo from "../assets/logo.png"; // Ensure correct import path
// import { BsChatText } from "react-icons/bs";
// // import { faCat } from '@awesome.me/kit-KIT_CODE/icons/sharp/solid';

// const MyNavbar = () => {
//   return (
//     <Navbar bg="light" variant="light" expand="lg">
//       <Container>
//         {/* Logo */}
//         <Navbar.Brand as={Link} to="/">
//           <img src={logo} alt="logo" height="100" className="d-inline-block align-top rounded" />
//         </Navbar.Brand>

//         {/* Toggle Button for Mobile */}
//         <Navbar.Toggle aria-controls="navbar-nav" />

//         {/* Navbar Items */}
//         <Navbar.Collapse id="navbar-nav">
//           <Nav className="me-auto">
//             {/* Dropdown Menu */}
//             {/* <NavDropdown title="Services" id="basic-nav-dropdown">
//               <NavDropdown.Item as={Link} to="#">Service-1</NavDropdown.Item>
//               <NavDropdown.Item as={Link} to="#">Service-2</NavDropdown.Item>
//               <NavDropdown.Item as={Link} to="#">Service-3</NavDropdown.Item>
//             </NavDropdown> */}
            
//             {/* Additional Page Link */}
//             <Nav.Link as={Link} to="/services">Services</Nav.Link>
//             <Nav.Link as={Link} to="/user/ticket">MyTickets </Nav.Link>
//             <Nav.Link as={Link} to="/offers">offers</Nav.Link>
//             <Nav.Link as={Link} to="/about">About</Nav.Link>
//           </Nav>

//           {/* Right-side Auth Links */}
//           <Nav>
//             <Nav.Link as={Link} to="/login">
//             <button className="btn btn-outline-success">Login</button>
//               {/* <i className=" btn btn-success rounded"></i> Sign Up */}
//             </Nav.Link>
//             <Nav.Link as={Link} to="/register">
//               {/* <i className="glyphicon glyphicon-log-in"></i> Login */}
//               <button className="btn btn-outline-success">Signup</button>
//             </Nav.Link>
//             <Nav.Link as={Link} to="/users/notification">
//             <button className="btn btn-warning text-black"><BsChatText /></button>
            
//             </Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default MyNavbar;



import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

import logo from "../assets/logo.png";
import { BsChatText } from "react-icons/bs";

const MyNavbar = () => {
  return (
    <Navbar bg="transparent" expand="lg"   className="fixed-top shadow-sm py-2 border rounded m-2 " style={{ backdropFilter: 'blur(10px)' }}>
      <Container>
        {/* Logo */}
        <Navbar.Brand as={Link} to="/">
          <img 
            src={logo} 
            alt="logo" 
            height="60" 
            className="d-inline-block align-top rounded-circle border border-2 border-warning"
          />
        </Navbar.Brand>

        {/* Toggle Button for Mobile */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        {/* Navbar Items */}
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto gap-3">
            <Nav.Link as={Link} to="/services" className="text-dark fw-bold">Services</Nav.Link>
            <Nav.Link as={Link} to="/user/ticket" className="text-dark fw-bold">My Tickets</Nav.Link>
            <Nav.Link as={Link} to="/offers" className="text-dark fw-bold">Offers</Nav.Link>
            <Nav.Link as={Link} to="/about" className="text-dark fw-bold">About</Nav.Link>
          </Nav>

          {/* Right-side Auth Links */}
          <Nav className="gap-2">
            <Button as={Link} to="/login" variant="outline-primary" className="rounded-pill px-3">Login</Button>
            <Button as={Link} to="/register" variant="outline-success" className="rounded-pill px-3">Signup</Button>
            <Button as={Link} to="/users/notification" variant="outline-warning" className="rounded-pill text-dark px-3">
              <BsChatText size={20} />
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;

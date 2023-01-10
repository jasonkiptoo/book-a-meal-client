import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaInstagram, FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";

function bars() {
  return (
    
    <>
    
      <br />
      <Navbar bg="danger" text-variant="white">
        <Container>
          <Navbar.Brand href="#home">GrubHub</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Menu</Nav.Link>
            <Nav.Link href="#features">My Orders</Nav.Link>
            <Nav.Link href="#pricing">Order History</Nav.Link>
          </Nav>
          
          <li className="navbar-nav ml-auto">
        <i className="nav-link bi bi-instagram"></i>
        <i className="nav-link bi bi-facebook"> </i>
        <i className="nav-link bi bi-twitter"> </i>

        <button className="btn bg-light">Logout</button>
      </li>
        </Container>
      </Navbar>

      <br />
     
    </>
  );
}

export default bars;
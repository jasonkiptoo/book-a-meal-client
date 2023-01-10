import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconName } from "react-icons/fa";
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
          <h1>
          <FontAwesomeIcon IconName=" FaInstagram" />
          <FontAwesomeIcon IconName=" FaFacebook" />
          <FontAwesomeIcon IconName=" Whatsapp" />
          <FontAwesomeIcon IconName=" FaTwitter" />
        </h1>
        <button className="btn bg-light">Logout</button>
     
        </Container>
      </Navbar>

      <br />
     
    </>
  );
  
}

export default bars;
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <Navbar bg="red" expand="lg">
      <Container>
        
          <Nav className="me-auto">
            <Nav.Link href="Menu">Menu</Nav.Link>
            <Nav.Link href="MyOrders">My Orders</Nav.Link>
            <Nav.Link href="OrderHistory">Order History</Nav.Link>
            <Nav.Link href="LogOut">LogOut</Nav.Link>
            
          </Nav>
        
      </Container>
    </Navbar>
  );
}

export default NavBar;
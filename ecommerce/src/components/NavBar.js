import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget'
function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark">
      <Container>
        <Navbar.Brand href="#home">COMIC-STORE</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">NOVEDADES</Nav.Link>
            <Nav.Link href="#pricing">COMIC</Nav.Link>
            <NavDropdown title="PRODUCTOS" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">FIGURAS</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              JUEGOS
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">MERCHANDISING</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                VER MÁS
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">CONTACTO</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
             CARRITO 
              <CartWidget />
            </Nav.Link>
          
          </Nav>
       
        </Navbar.Collapse>
      </Container>
     
    </Navbar>
    
  );
}

export default CollapsibleExample;
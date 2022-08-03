import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';
import { LinkContainer } from 'react-router-bootstrap';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark">
      <Container>
        <LinkContainer to={'/'}>
          <Navbar.Brand >COMIC-STORE</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">NOVEDADES</Nav.Link>
            <NavDropdown title="CATEGORIAS" id="collasible-nav-dropdown">
              <LinkContainer to={'/category/figuras'}>
                <NavDropdown.Item >FIGURAS</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to={'/category/comic'}>
                <NavDropdown.Item >
                  COMIC
                </NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to={'/category/merch'}>
                <NavDropdown.Item>MERCHANDISING</NavDropdown.Item>
              </LinkContainer>
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
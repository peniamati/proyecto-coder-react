import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartWidget } from "./CartWidget"

export const NavBar = () => {
  return (
    <header>
      <Navbar bg="primary" variant="dark" expand="md"> 
        <Container>
          <Navbar.Brand href="/" className="navbar-brand">MC King</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto my-2 my-lg-0">
              <Nav.Link as={NavLink} to="/category/Combos">Combos</Nav.Link>
              <Nav.Link as={NavLink} to="/category/Bebidas">Bebidas</Nav.Link>
              <Nav.Link as={NavLink} to="/category/Postres">Postres</Nav.Link>
            </Nav>
            <CartWidget />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

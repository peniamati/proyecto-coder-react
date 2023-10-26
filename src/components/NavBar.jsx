import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartWidget } from "./CartWidget"

export const NavBar = () => {
  return (
    <header>
      <Navbar bg="primary" variant="dark" expand="md"> {/* Use expand="lg" for the navbar to collapse on smaller screens */}
        <Container>
          <Navbar.Brand href="#home" className="navbar-brand">MC King</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" /> {/* This creates the burger menu */}
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto my-2 my-lg-0">
              <Nav.Link href="#Combos">Combos</Nav.Link>
              <Nav.Link href="#Bebidas">Bebidas</Nav.Link>
              <Nav.Link href="#Postres">Postres</Nav.Link>
            </Nav>
            <CartWidget />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

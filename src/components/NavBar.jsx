import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartWidget } from "./CartWidget"
import Logo from "../assets/mcking-logo.jpeg";
import { NavDropdown } from 'react-bootstrap';

export const NavBar = () => {
  return (
    <header>
      <Navbar style={{backgroundColor: "#000014"}} variant='dark' expand="md"> 
        <Container>
          <Navbar.Brand href="/" className="navbar-brand">
            <img src={Logo} alt="Logo de MC King" className="logo" width={80}/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto my-2 my-lg-0">
              <NavDropdown title="Categorías" id="basic-nav-dropdown" style={{ textAlign: "center", backgroundColor: "#000014", color: "white"}}>
                <NavDropdown.Item style={{ textAlign: "center", color: "white"}} as={NavLink} to="/category/Combos">Combos</NavDropdown.Item>
                <NavDropdown.Item style={{ textAlign: "center", color: "white"}} as={NavLink} to="/category/Bebidas">Bebidas</NavDropdown.Item>
                <NavDropdown.Item style={{ textAlign: "center", color: "white"}} as={NavLink} to="/category/Postres">Postres</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <CartWidget/>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

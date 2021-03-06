import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

const NavBar = () => {
  return (
    <div className="App">
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand style={{marginLeft:'10px'}}as={Link} to="/">
        Kumba

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Link to="/CustomerPage">
              <Nav.Link style={{cursor: 'pointer'}}href="#CustomerPage">CustomerPage</Nav.Link>
            </Link>


            <Link to="/OrderPage">
              <Nav.Link href="#OrderPage">OrderSummary</Nav.Link>
            </Link>


          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;

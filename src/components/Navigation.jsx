import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useLocation } from "react-router-dom";

const expand = "md";

function Navigation(props) {
  const location = useLocation();

  return (
    <div className="navContainer">
      <div className="navBox">
        <Navbar key={expand} expand={expand}>
          <Container fluid>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Al-Huriat
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link className="navButton" href="/">
                    Home
                    {location.pathname === "/" && (
                      <div className="navMark"></div>
                    )}
                  </Nav.Link>
                  <Nav.Link className="navButton" href="/services">
                    Services
                    {location.pathname === "/services" && (
                      <div className="navMark"></div>
                    )}
                  </Nav.Link>
                  <Nav.Link className="navButton" href="/request-printing">
                    Request Printing
                    {location.pathname === "/request-printing" && (
                      <div className="navMark"></div>
                    )}
                  </Nav.Link>
                  <Nav.Link className="navButton" href="/contact-us">
                    Contact Us
                    {location.pathname === "/contact-us" && (
                      <div className="navMark"></div>
                    )}
                  </Nav.Link>
                  {/* <NavDropdown
                  title="Dropdown"
                  id={`offcanvasNavbarDropdown-expand-${expand}`}
                >
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown> */}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}

export default Navigation;

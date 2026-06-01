import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link, useLocation } from "react-router-dom";

const expand = "lg";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Products" },
  { href: "/request-printing", label: "Printing Request" },
  { href: "/contact-us", label: "Contact Us" },
];

function Navigation() {
  const location = useLocation();

  return (
    <nav className="navContainer" aria-label="Primary">
      <div className="navBox">
        <Navbar key={expand} expand={expand} variant="dark">
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
                  {links.map(({ href, label }) => (
                    <Nav.Link
                      key={href}
                      as={Link}
                      to={href}
                      className="navButton"
                      aria-current={location.pathname === href ? "page" : undefined}
                    >
                      {label}
                      {location.pathname === href && <span className="navMark" />}
                    </Nav.Link>
                  ))}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </div>
    </nav>
  );
}

export default Navigation;

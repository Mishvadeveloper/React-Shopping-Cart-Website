import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function NavBar() {
  const cartProducts = useSelector((state) => state.cart);
  return (
    <>
      <Navbar
        expand="lg"
        /*className="bg-body-tertiary"*/ style={{ backgroundColor: "grey" }}
      >
        <Container fluid>
          <Navbar.Brand
            href="#"
            style={{ fontSize: "25px", fontWeight: "bold" }}
          >
            {" "}
            Shopping Cart{" "}
          </Navbar.Brand>
          <Nav>
            <Nav.Link
              to="/"
              as={Link}
              style={{ fontSize: "25px", fontWeight: "bold" }}
            >
              {" "}
              Products
            </Nav.Link>
          </Nav>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Nav.Link
                to="/cart"
                as={Link}
                style={{ fontSize: "25px", fontWeight: "bold" }}
              >
                My Bag {cartProducts.length}{" "}
              </Nav.Link>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;

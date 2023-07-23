import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";
import { BiLogIn } from "react-icons/bi";
import { FaUserPlus } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbars() {
  const cartItems = useSelector((state) => state.user.cart);

  // Calculate the total quantity in the cart
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const navigate = useNavigate();
  return (
    <div>
      <Navbar bg="light" expand="lg" className="py-3 shadow-sm bg-white">
        <Container>
          <Navbar.Brand
            onClick={() => navigate("/")}
            className="fw-bold fs-4 text-decoration-none "
          >
            <span className="first-letter">U</span>niquick Products
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto  navbar-nav mb-2 mb-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
              <Nav.Link onClick={() => navigate("/products")}>
                Products
              </Nav.Link>
              <Nav.Link onClick={() => navigate("/about")}>About</Nav.Link>
              <Nav.Link onClick={() => navigate("/contact")}>Contact</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Button
                variant="outline-success"
                className="btn btn-outline-dark ms-2"
                onClick={() => navigate("/login")}
              >
                <span className="me-1">
                  <BiLogIn />
                </span>
                Login
              </Button>
              <Button
                variant="outline-success"
                className="btn btn-outline-dark ms-2"
                onClick={() => navigate("/signup")}
              >
                <span className="me-1">
                  <FaUserPlus />
                </span>
                Register
              </Button>
              <Button
                variant="outline-success"
                className="btn btn-outline-dark ms-2"
                onClick={() => navigate("/cart")}
              >
                <span className="me-1">
                  <BsCart4 />
                </span>
                Cart
                <span  className="navbar-cart-quantity">
                  {totalQuantity}
                </span>
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbars;

import React from "react";
import "./HeaderNav.css";
import logo from "../../../img/logo.png";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const HeaderNav = () => {
  const { user, handleLogOut } = useAuth();
  return (
    <div>
      {/* <HeaderTop></HeaderTop> */}
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="dark"
        sticky="top"
        className="text-center nav-background"
      >
        <Container className="py-2">
          <Navbar.Brand as={Link} to="/home">
            <img
              style={{ maxHeight: "40px", width: "100%" }}
              src={logo}
              alt="logo"
            ></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto header-nav ms-lg-3">
              <Nav.Link
                className="nav-item"
                as={NavLink}
                activeStyle={{ color: "#fff" }}
                to="/home"
              >
                Home
              </Nav.Link>
              <Nav.Link
                className="nav-item"
                as={NavLink}
                activeStyle={{ color: "#fff" }}
                to="/aboutus"
              >
                About
              </Nav.Link>
              <Nav.Link
                className="nav-item"
                as={NavLink}
                activeStyle={{ color: "#fff" }}
                to="/services"
              >
                Services
              </Nav.Link>
              {user.email && (
                <Nav.Link
                  className="nav-item"
                  as={NavLink}
                  activeStyle={{ color: "#fff" }}
                  to="/myorder"
                >
                  My Order
                </Nav.Link>
              )}
              {user.email && (
                <Nav.Link
                  className="nav-item"
                  as={NavLink}
                  activeStyle={{ color: "#fff" }}
                  to="/allorders"
                >
                  Manage Orders
                </Nav.Link>
              )}
              {user.email && (
                <Nav.Link
                  className="nav-item"
                  as={NavLink}
                  activeStyle={{ color: "#fff" }}
                  to="/addservice"
                >
                  Add Service
                </Nav.Link>
              )}

              {/* <Nav.Link
                className="nav-item"
                as={NavLink}
                activeStyle={{ color: "#e00f28" }}
                to="/contact"
              >
                Contact
              </Nav.Link> */}
            </Nav>

            {user.email && (
              <Nav.Link>
                <img
                  style={{
                    height: "50px",
                    width: "50px",
                    borderRadius: "50%",
                  }}
                  src={user.photoURL}
                  alt="user"
                />
              </Nav.Link>
            )}

            <Nav>
              {user.displayName && <Nav.Link>{user.displayName}</Nav.Link>}

              {/* Logout */}

              {user.email ? (
                <Nav.Link onClick={handleLogOut}>Logout</Nav.Link>
              ) : (
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default HeaderNav;

import React from "react";
import { Container, Nav, Navbar as Appbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Navigation = () => {
  const { user, logOut } = useAuth();
  return (
    <div className="header">
      <Appbar expand="md" className="navbar-dark">
        <Appbar.Toggle aria-controls="AppbarScroll" />
        <Appbar.Collapse id="AppbarScroll">
          <Container>
            <Nav className=" my-lg-0 justify-content-end " AppbarScroll>
              <Link to="/home">Home</Link>
              <Link to="/about">About us</Link>
              <Link to="/products">Products</Link>
              <Link to="./regester">Regester</Link>
              <Link to="./login">Login</Link>

              <Link to="/contact">Contact us</Link>
              <span className="text-light">{user.email}</span>
              {user?.email && (
                <button className="btn btn-sm btn-warning">
                  <Link to="/dashboard">Dashboard</Link>
                </button>
              )}
              {user?.email && (
                <button className="btn btn-sm btn-danger" onClick={logOut}>
                  Logout
                </button>
              )}
            </Nav>
          </Container>
        </Appbar.Collapse>
      </Appbar>
    </div>
  );
};

export default Navigation;

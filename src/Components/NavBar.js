
import React from 'react';
import {Navbar,Nav,Container}from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Link, NavLink,Route} from "react-router-dom";

function NavBar(props) {
    return (
        <>

  <Navbar bg="light" variant="light">
    <Container>
    <Navbar.Brand as={NavLink} to="/" >Jerusalén</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link as={NavLink} to="/VERDURA" exact>VERDURA</Nav.Link>
      <Nav.Link as={NavLink} to="/Carne">Carne</Nav.Link>
      <Nav.Link as={NavLink} to="/Alimentos" >Alimentos</Nav.Link>
      <Nav.Link as={NavLink} to="/Management">Management</Nav.Link>

    </Nav>
    </Container>
  </Navbar>
</>
    );
}

export default NavBar;
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";
import "./NavBar.css"

export default function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
       <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto flex-column">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/student">Student</Nav.Link>    
            <Nav.Link href="/Courses">Courses</Nav.Link>    
            <Nav.Link href="/results">Results</Nav.Link>         
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

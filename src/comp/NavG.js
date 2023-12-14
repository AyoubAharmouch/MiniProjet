import React, { useState } from "react";
import "../css/navg.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";

export default function NavG(props) {

    return (
    <div>
        <Navbar expand="lg" className="cont navbar">
        <Container className="con">
            <Navbar.Brand as={Link} to="/home">
            take your move 
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nev ml-auto">
                <Nav.Link className="lin" as={Link} to="/Home">
                  Home
                </Nav.Link>
                <Nav.Link className="lin" as={Link} to="/Categories">
                Categories
                </Nav.Link>
                <Nav.Link className="lin" as={Link} to="/Contact">
                Contact
                </Nav.Link>
                <Nav.Link className="lin" as={Link} to="/Avis">
                Avis
                </Nav.Link>
                <Nav.Link className="lin" as={Link} to="/Product">
                 Product
                </Nav.Link>
                
            </Nav>
              </Navbar.Collapse>
            
                
        </Container>
      </Navbar>
    </div>
  );
}

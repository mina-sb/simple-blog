import React from "react";
import { Container, Col, Nav, Row, Button } from "react-bootstrap";
import "./Menu.css";

const Menu = () => {
  return (
    <Container className="pt-5 pb-3">
      <Row>
        <Col md={6}>
          <Nav>
            <Nav.Link className="active-tab first-tab">All Posts(32)</Nav.Link>
            <Nav.Link className="tab">Article</Nav.Link>
            <Nav.Link className="active-tab">Event</Nav.Link>
            <Nav.Link className="tab">Education</Nav.Link>
            <Nav.Link className="tab">Job</Nav.Link>
          </Nav>
        </Col>
        <Col md={6} className="buttons">
          <Button variant="secondary mx-2" className="write-post-btn">
            Write a Post <i className="fa fa-caret-down mx-2 arrow"></i>
          </Button>
          <Button variant="primary">
            {" "}
            <i className="fa fa-group mx-2"></i> Join Group{" "}
          </Button>
        </Col>
        <hr />
      </Row>
    </Container>
  );
};

export default Menu;

import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <Container className="d-flex flex-row-reverse d-xs-none d-sm-none d-md-block d-lg-block d-xl-block">
      <Col md={9}>
        <Row className="mt-5">
          <Col className="d-flex">
            <div className="px-2">
              <i className="fa fa-map-marker"></i>
              <span className="ml-1 txt-bold">Ahmedabad, India</span>
            </div>
            <div className="px-2 ml-auto">
              <i className="fa fa-pencil"></i>
            </div>
          </Col>
        </Row>
        <hr className="hr" />
        <Row className="px-2">
          <Col md={1}>
            <i className="fa fa-info-circle info"></i>
          </Col>
          <Col md={11}>
            <p className="info-p mx-1">
              Your location will help us serve better and extend a personalised
              experience.
            </p>
          </Col>
        </Row>
      </Col>
    </Container>
  );
};

export default Sidebar;

import React from "react";
import { Container, button, Row, Col } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <Container>
        <Col className="d-md-none">
          <Row>
            <div className="d-flex align-items-center mt-4">
              <i className="fa fa-arrow-left txt-white"></i>
              <div className=" ml-auto">
                <button type="button" class="btn btn-join">
                  Join Group
                </button>
              </div>
            </div>
          </Row>
        </Col>
        <h1 className="title">Computer Engineering</h1>
        <p className="subtitle">142,765 Computer Engineers follow this</p>
      </Container>
    </div>
  );
};

export default Banner;

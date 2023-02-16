import React from "react";
import { Container, button, Row, Col } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <Container className="px-5 eee">
        <Col>
          <Row>
            <div className="d-flex justify-content-between align-items-center">
              <i className="fa fa-arrow-left txt-white"></i>
              <div>
                <button type="button" class="btn btn-join ml-auto">
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

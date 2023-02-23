import React, { useContext } from "react";
import { Container, button, Row, Col } from "react-bootstrap";
import "./Banner.css";
import { AppContext } from "../AppContext";

const Banner = () => {
  const { showModal, showRegister } = useContext(AppContext);
  const [modal, setModal] = showModal;
  const [register, setRegister] = showRegister;

  const openRegister = () => {
    setModal(true);
    setRegister(true);
  };

  return (
    <div className="banner">
      <Container>
        <Col className="d-md-none">
          <Row className="mx-3">
            <div className="d-flex align-items-center mt-4">
              <i className="fa fa-arrow-left txt-white"></i>
              <div className=" ml-auto">
                <button
                  type="button"
                  class="btn btn-join"
                  onClick={openRegister}
                >
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

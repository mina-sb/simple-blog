import React, { useContext } from "react";
import "./Header.css";
import { Container, Navbar, Nav, Form, Row, Col } from "react-bootstrap";
import { AppContext } from "../AppContext";

const Header = () => {
  const { showModal, showRegister } = useContext(AppContext);
  const [modal, setModal] = showModal;
  const [register, setRegister] = showRegister;

  const openRegister = () => {
    setModal(true);
    setRegister(true);
  };

  return (
    <header className="header py-2 d-sm-none d-md-block d-none">
      <Navbar>
        <Container>
          <Col>
            <Row>
              <Col md={4} className="logo bb">
                <Navbar.Brand>Brand</Navbar.Brand>
              </Col>
              <Col md={8}>
                <Nav>
                  <Col>
                    <Row>
                      <Col md={6} className="dd">
                        <div className="d-flex justify-content-between  search-div align-items-center">
                          <Form inline className="flex-grow-1">
                            <Form.Control
                              type="text"
                              placeholder="Search for your favorite groups in ATGearch"
                              className="search_txt px-4 "
                            />
                          </Form>
                          <i className="fa fa-search px-4 search-icon"></i>
                        </div>
                      </Col>
                      <Col md={6} className="create-account bb">
                        <Nav.Link onClick={openRegister}>
                          Create account.{" "}
                          <span className="blue_txt">It's free!</span>
                        </Nav.Link>
                      </Col>
                    </Row>
                  </Col>
                </Nav>
              </Col>
            </Row>
          </Col>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;

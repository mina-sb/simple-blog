import React, { useContext, useState } from "react";
import { Container, Col, Nav, Row, Button } from "react-bootstrap";
import { AppContext } from "../AppContext";
import "./Menu.css";

const Menu = () => {
  const { loggedInFlag } = useContext(AppContext);
  const [loggedIn, setLoggedIn] = loggedInFlag;
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Container className="p-0 m-0">
      <Container className="pt-5 pb-3 d-none d-md-block">
        <Row>
          <Col md={6}>
            <Nav>
              <Nav.Link
                onClick={() => {
                  setActiveTab(0);
                }}
                className={`first-tab tab ${
                  activeTab == 0 ? "active-tab " : ""
                }`}
              >
                All Posts(32)
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  setActiveTab(1);
                }}
                className={`tab ${activeTab == 1 ? "active-tab " : ""}`}
              >
                Article
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  setActiveTab(2);
                }}
                className={`tab ${activeTab == 2 ? "active-tab " : ""}`}
              >
                Event
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  setActiveTab(3);
                }}
                className={`tab ${activeTab == 3 ? "active-tab " : ""}`}
              >
                Education
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  setActiveTab(4);
                }}
                className={`tab ${activeTab == 4 ? "active-tab " : ""}`}
              >
                Job
              </Nav.Link>
            </Nav>
          </Col>
          <Col md={6} className="buttons">
            <Button variant="secondary mx-2" className="write-post-btn">
              Write a Post <i className="fa fa-caret-down mx-2 arrow"></i>
            </Button>

            {loggedIn ? (
              <Button variant="outline-secondary" className="leave-btn">
                {" "}
                <i className="fa fa-sign-out mx-2 "></i> Leave Group{" "}
              </Button>
            ) : (
              <Button variant="primary">
                {" "}
                <i className="fa fa-group mx-2"></i> Join Group{" "}
              </Button>
            )}
          </Col>
          <hr />
        </Row>
      </Container>
      <Container className="pt-5 d-md-none p-0 d-flex align-items-center justify-content-between">
        <h5 className="text-left">Posts(368)</h5>
        <Button variant="secondary" className="write-post-btn">
          Filter: All <i className="fa fa-caret-down mx-2 arrow"></i>
        </Button>
      </Container>
    </Container>
  );
};

export default Menu;

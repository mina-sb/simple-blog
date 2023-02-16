import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Meetup from "../Meetup/Meetup";
import Post from "../Post/Post";
import Job from "../Job/Job";
import "./Body.css";
import Sidebar from "../Sidebar/Sidebar";

const Body = () => {
  return (
    <Container>
      <Row>
        <Col md={8} className="bb">
          <Post />
          <Post />
          <Meetup />
          <Job />
        </Col>
        <Col md={4} className="dd">
          <Sidebar />
        </Col>
      </Row>
    </Container>
  );
};

export default Body;

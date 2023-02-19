import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import PostDropDown from "../PostDropDown/PostDropDown";
import PostFooter from "../PostFooter/PostFooter";
import "./Job.css";

const Job = () => {
  return (
    <Card className="text-left mt-3 mb-5 ">
      <Card.Img
        className="img"
        variant="top"
        src="https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg?cs=srgb&dl=pexels-creative-vix-9754.jpg&fm=jpg"
      />
      <Card.Body className="p-4">
        <h5>Job</h5>
        <Row>
          <Col className="d-flex">
            <div className="px-2">
              <h4>Software Developer</h4>
            </div>
            <div className="ml-auto d-flex align-items-center">
              <PostDropDown />
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex">
            <div className="px-2 pb-2">
              <i className="fa fa-briefcase"></i>
              <span className="ml-1 txt-bold">
                Innovaccer Analytics Private Ltd.
              </span>
            </div>
            <div className="px-2 pb-2">
              <i className="fa fa-map-marker"></i>
              <span className="ml-1 txt-bold">Noida, India</span>
            </div>
          </Col>
        </Row>
        <Row className="p-2 pl-1">
          <Col className="d-flex">
            <button
              type="button"
              class="btn btn-outline-secondary btn-block Timesjobs-btn"
            >
              Apply on Timesjobs{" "}
            </button>
          </Col>
        </Row>
        <PostFooter />
      </Card.Body>
    </Card>
  );
};

export default Job;

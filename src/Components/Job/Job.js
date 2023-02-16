import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import "./Job.css";

const Job = () => {
  return (
    <Card className="text-left mt-3 mb-5 pb-5">
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
              <i className="fa fa-ellipsis-h ml-3 drop-down-btn"></i>
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
        <Row>
          <Col className="d-flex mt-3">
            <div className="pr-2">
              {" "}
              <i className="px-2 fa fa-user"></i>
            </div>
            <div className="px-2 writer">Sarthak Kamra</div>
            <div className="ml-auto d-flex align-items-center">
              <i className="px-2 fa fa-eye gray-txt"></i>
              <div className="gray-txt">1.4k views</div>
              <i className="fa fa-share-alt ml-3 share-btn"></i>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default Job;

import React from "react";
import "./PostFooter.css";
import { Row, Col } from "react-bootstrap";

const PostFooter = () => {
  return (
    <div>
      <Row className="d-md-block d-lg-block d-xl-block d-none">
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
      <Row className="d-sm-block d-xs-block d-md-none">
        <Col className="d-flex mt-3">
          <div className="pr-2">
            {" "}
            <i className="px-2 fa fa-user"></i>
          </div>
          <div className="px-2 writer">
            Sarthak Kamra
            <div className="gray-txt">1.4k views</div>
          </div>
          <div className="ml-auto d-flex align-items-center">
            <div className="d-flex justify-content-end">
              <div className="share-btn-sm">
                <i className="fa fa-share-alt share-btn"></i>
                <span className="pr-1">Share</span>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default PostFooter;

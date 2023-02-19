import React from "react";
import "./Article.css";
import { Card, Button, Row, Col } from "react-bootstrap";
import PostFooter from "../PostFooter/PostFooter";
import PostDropDown from "../PostDropDown/PostDropDown";

const Article = () => {
  return (
    <Card className="text-left mt-3">
      <Card.Img
        className="img"
        variant="top"
        src="https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg?cs=srgb&dl=pexels-creative-vix-9754.jpg&fm=jpg"
      />
      <Card.Body className="p-4">
        <h5>Article</h5>
        <Row>
          <Col
            md={9}
            className="p-2 align-self-center d-flex align-items-start"
          >
            {" "}
            <h4>What if famous brands had regular fonts? Meet RegulaBrands!</h4>
          </Col>
          <Col md={3} className="text-right">
            <PostDropDown />
          </Col>
        </Row>
        <Row>
          <p className="px-2">
            I’ve worked in UX for the better part of a decade. From now on, I
            plan to rei…
          </p>
        </Row>
        <PostFooter />
      </Card.Body>
    </Card>
  );
};

export default Article;

import React from "react";
import { Button, Container } from "react-bootstrap";
import Body from "../Body/Body";
import Menu from "../Menu/Menu";
import "./Main.css";

const Main = () => {
  return (
    <Container>
      <Menu />
      <Body />
      <Button className="fix d-xs-block d-sm-block d-md-none">
        <i className="fa fa-pencil pencil"></i>
      </Button>
    </Container>
  );
};

export default Main;

import React from "react";
import { Container } from "react-bootstrap";
import Body from "../Body/Body";
import Menu from "../Menu/Menu";

const Main = () => {
  return (
    <Container className="px-5">
      <Menu />
      <Body />
    </Container>
  );
};

export default Main;

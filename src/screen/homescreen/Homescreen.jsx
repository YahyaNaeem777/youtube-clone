import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Homescreen.scss";
import Categories from "../../components/categories/Categories";
import Vedios from "../../components/vedios/Vedios";

const Homescreen = () => {
  return (
    <Container>
      <Categories />
      <Row>
        {[...new Array(20)].map((val,i) => (
          <Col lg={3} md={4} key={i}>
            <Vedios />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Homescreen;

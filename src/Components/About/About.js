import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./about.css";
export default function About() {
  return (
    <Container>
      <Row>
        <div className="jumbotron jumbotron-fluid mb-0">
          <Container>
            <h1 className="display-4 pb-0 pb-sm-0 pb-md-0 mb-2 text-center">
              About Me
            </h1>
          </Container>
        </div>
      </Row>
      {/* Image of me and a paragraph next to the picture built in Bootstrap */}
      <Row>
        <Col
          xs={8}
          sm={6}
          md={6}
          lg={3}
          className="center mx-auto mb-lg-5 mb-m-4 mb-3"
        >
          <img
            src="https://https://github.com/JohnKimaiyo?tab=repositories"
            alt="Me"
            className="img-fluid rounded-circle"
          />
        </Col>

        <Col xs={12} sm={6} md={6} className="text-center my-auto" id="about">
          <p>
            My name is John, and I currently reside in kenya. I have over 2
            years of experience in various types of coding. I a currenty part of
            open source community.
          </p>
          <p>
            I have experience in front-end web development, working with
            technologies like Axios, Bootstrap, CSS, HTML, JavaScript, JSON,
            Materialize.css, Node.JS, and various other modern development
            media.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

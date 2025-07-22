import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a passionate <b className="purple">PHP Full Stack Developer</b> with a strong focus on building dynamic and scalable web applications.
              <br />
              <br />
              I have hands-on experience with technologies like
              <i>
                <b className="purple"> Nodejs, Reactjs, PHP, Laravel, WordPress, Codegnator, JavaScript, and MySQL</b>,
              </i>{" "}
              and I'm comfortable working across the entire development stack.
              <br />
              <br />
              My interests lie in creating robust &nbsp;
              <i>
                <b className="purple">web solutions</b> and bringing ideas to life through clean, maintainable code.
              </i>
              <br />
              <br />
              I enjoy building full-featured products using <b className="purple">Laravel</b> on the backend and
              <i>
                <b className="purple"> React.js</b>
              </i>{" "}
              on the frontend to deliver modern, responsive, and performant web experiences.
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/monukumar89"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/monu.prajapati.923"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaFacebookF />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/monu-kumar-8aa460130/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>

          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

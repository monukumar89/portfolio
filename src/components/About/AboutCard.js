import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Monu Kumar</span>,
            <br />
            a passionate <span className="purple">Web Developer</span> with over{" "}
            <span className="purple">11+ years of experience</span> specializing in modern web technologies.
            <br />
            <br />
            I have worked extensively with:
            <br />
            <b className="purple">
              React.js, Node.js, PHP, Laravel, WordPress, CodeIgniter, MySQL, JavaScript, jQuery
            </b>
            .
            <br />
            <br />
            I have delivered high-impact solutions for <b className="purple">US Federal clients</b> and
            collaborated with <b className="purple">European partners</b>.
            <br />
            <br />
            I'm also proficient in:
            <br />
            <b className="purple">
              Team leadership, project management, and API integrations
            </b>
            . I follow <b className="purple">Agile methodologies</b> and use tools like{" "}
            <b className="purple">Jira, Trello, Asana</b>.
            <br />
            <br />
            My DevOps & Collaboration Toolset includes:
            <br />
            <b className="purple">
              Git, AWS (EC2, S3), and Docker
            </b>
            .
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Mentoring & Team Collaboration
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Clean, Scalable Code
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring New Tech Stacks
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build impactful and scalable digital solutions!"{" "}
          </p>
          <footer className="blockquote-footer">Monu Kumar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

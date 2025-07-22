import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";

const projectData = [
  {
    title: "Zuno by FoundIt",
    link: "https://www.foundit.in/zuno/",
    imgPath: "https://media.foundit.in/zuno/assets/images/logo-main.png",
    description: "A career portal built for students and freshers to access internships, projects, and job opportunities. Optimized UI with performance-first design.",
  },
  {
    title: "Debatego",
    link: "https://www.debatego.com/",
    imgPath: "https://www.debatego.com/front/images/logo.png",
    description: "A social debating platform that lets users create, join, and vote on debates. Custom design and React.js based UI with backend integration.",
  },
  {
    title: "Nexon360",
    link: "https://nexon360.com/",
    imgPath: "https://nexon360.com/uploads/1747344185_NEXON%20LOGO.png",
    description: "Business management solution offering accounting, CRM, inventory, and invoicing in one platform.",
  },
  {
    title: "Uttarsuri",
    link: "https://uttarsuri.com/uttarsuri/",
    imgPath: "https://uttarsuri.com/uttarsuri/uploads/setting/uttarsuri-logo_1747236129.png",
    description: "Cultural & educational platform presenting legacy, traditions, and interviews of iconic personalities.",
  },
  {
    title: "SQC LMS",
    link: "https://lms.sqccertification.com/",
    imgPath: "https://lms.sqccertification.com/public/uploads/main/images/31-05-2025/683aa3ea4bc85.png",
    description: "LMS platform for online learning and certification management, with role-based dashboard and progress tracking.",
  },
  {
    title: "Technodecibel",
    link: "https://technodecibel.com/",
    imgPath: "https://technodecibel.com/wp-content/uploads/2022/06/resize-log.png",
    description: "Web development and digital transformation agency, specializing in scalable business solutions.",
  },
  {
    title: "Mobicom Solutions",
    link: "https://mobicomsolutions.com/",
    imgPath: "https://mobicomsolutions.com/wp-content/uploads/2021/04/MobicomSolutions_.png",
    description: "Mobile solutions and app development company focused on telecom and logistics tech.",
  },
  {
    title: "Prakriti Brain Bansal",
    link: "https://prakritibrainbansal.com/",
    imgPath: "https://prakritibrainbansal.com/wp-content/uploads/2022/07/Prakriti-Brain-nerve-center-LOGO.png",
    description: "Personal portfolio for Prakriti, showcasing wellness sessions, blogs, and booking features.",
  },
  {
    title: "IMP Transfer Service",
    link: "https://www.imptransferservice.com/",
    imgPath: "http://imptransferservice.com/wp-content/uploads/2024/07/replicate-prediction-0s237t7s99rgc0cgsaz9eneqxw-removebg-preview.png",
    description: "Private taxi and airport transfer booking platform with sleek UX and city-specific pricing.",
  },
  {
    title: "Premier Transport & Tour",
    link: "https://premiertransportandtour.com/",
    imgPath: "https://premiertransportandtour.com/wp-content/uploads/2024/02/PREMIER-TRANSPORT-AND-TOUR-logo.png",
    description: "Tourism-focused booking site with travel packages, custom bookings, and multilingual support.",
  },
  {
    title: "Travel Companies",
    link: "https://www.chetantravels.com/",
    imgPath: "https://www.chetantravels.com/images/happy-journey.jpg",
    description: "Built and deployed multiple travel websites including Chetan Travels, Yashika Tour & Travel, Shri Krishna Travel, and more.",
  },
];

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading" data-aos="fade-up">
          My <strong className="purple">Recent Projects</strong>
        </h1>
        <p style={{ color: "white" }} data-aos="fade-up" data-aos-delay="100">
          Here are some selected works from live production environments.
        </p>

        <Row style={{ justifyContent: "center" }} data-aos="fade-up" data-aos-delay="200">
          {projectData.map((project, index) => (
            <Col md={4} className="project-card" key={index} data-aos="zoom-in" data-aos-delay={index * 100}>
              <ProjectCard
                imgPath={project.imgPath}
                title={project.title}
                description={project.description}
                demoLink={project.link}
                isBlog={false}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "DebateGo",
      desc: "An educational platform for practicing and learning debate skills.",
      url: "https://www.debatego.com/",
      tags: ["React", "Laravel", "Education"]
    },
    {
      title: "Zuno by Foundit",
      desc: "A talent discovery platform for internships and fresher jobs.",
      url: "https://www.foundit.in/zuno/",
      tags: ["Scale", "Job Portal", "Next.js"]
    },
    {
      title: "Mentora IAS",
      desc: "Learning management system for UPSC and civil services aspirants.",
      url: "https://www.mentoraias.co.in/",
      tags: ["LMS", "WordPress", "E-learning"]
    },
    {
      title: "Sunny Flower Delivery",
      desc: "Premium e-commerce platform for flower delivery and gifting.",
      url: "https://www.sunnyflowerdelivery.com/",
      tags: ["E-commerce", "PHP", "Shopify Integration"]
    },
    {
      title: "Nexon360",
      desc: "A comprehensive fitness and lifestyle management platform.",
      url: "https://nexon360.com/",
      tags: ["Fitness", "SaaS", "React"]
    },
    {
       title: "Exam Academy",
       desc: "High-end exam preparation and mock test platform.",
       url: "https://exam-academy.webultrasolution.io/",
       tags: ["Testing", "Portal", "Laravel"]
    }
  ];

  return (
    <section id="projects">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Featured <span className="text-gradient">Projects</span></h2>
          <p style={{ color: "var(--text-secondary)", maxWidth: "600px", margin: "0 auto" }}>
            A selection of high-impact web applications I&apos;ve built for global clients.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "2rem" }}>
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass"
              style={{
                borderRadius: "24px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column"
              }}
            >
              {/* Project Image Placeholder */}
              <div style={{
                height: "200px",
                background: "var(--grad-surface)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative"
              }}>
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: `url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426&ixlib=rb-4.0.3') center/cover`,
                  opacity: 0.1,
                  filter: "grayscale(100%)"
                }} />
                <h3 className="text-gradient" style={{ fontSize: "1.5rem", zIndex: 1 }}>{project.title}</h3>
              </div>

              <div style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "1rem", flex: 1 }}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {project.tags.map(tag => (
                    <span key={tag} style={{ fontSize: "0.7rem", color: "var(--primary)", fontWeight: 600, textTransform: "uppercase" }}>{tag}</span>
                  ))}
                </div>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.5 }}>
                  {project.desc}
                </p>
                <div style={{ marginTop: "auto", display: "flex", gap: "1rem" }}>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass"
                    style={{
                      padding: "0.6rem 1.2rem",
                      borderRadius: "12px",
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem"
                    }}
                  >
                    Live Demo <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "4rem" }}>
          <p style={{ color: "var(--text-secondary)", marginBottom: "1.5rem" }}>And many more successful projects...</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;

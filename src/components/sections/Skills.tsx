"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, Layout, Database, Smartphone, Globe, Layers } from "lucide-react";

const Skills = () => {
  const skills = [
    { name: "Laravel", icon: <Code />, level: "Expert" },
    { name: "React.js", icon: <Layout />, level: "Expert" },
    { name: "WordPress", icon: <Globe />, level: "Expert" },
    { name: "PHP / MySQL", icon: <Database />, level: "Expert" },
    { name: "JavaScript / ES6", icon: <Layers />, level: "Advanced" },
    { name: "Responsive Design", icon: <Smartphone />, level: "Expert" },
  ];

  const tools = ["Codeigniter", "jQuery UI", "Shopify", "Git / GitHub", "REST APIs", "Node.js (Basic)"];

  return (
    <section id="skills">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>My <span className="text-gradient">Core Skills</span></h2>
          <p style={{ color: "var(--text-secondary)", maxWidth: "600px", margin: "0 auto" }}>
            Leveraging 11+ years of technical excellence to deliver robust and scalable solutions.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              whileHover={{ y: -10 }}
              className="glass"
              style={{
                padding: "2rem",
                borderRadius: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                transition: "all 0.3s ease"
              }}
            >
              <div style={{ color: "var(--primary)", marginBottom: "1rem" }}>{skill.icon}</div>
              <h3 style={{ fontSize: "1.25rem" }}>{skill.name}</h3>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <div style={{ height: "4px", flex: 1, background: "rgba(255,255,255,0.1)", borderRadius: "2px" }}>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "90%" }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    style={{ height: "100%", background: "var(--grad-main)", borderRadius: "2px" }}
                  />
                </div>
                <span style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>{skill.level}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div style={{ marginTop: "4rem", textAlign: "center" }}>
          <h3 style={{ marginBottom: "2rem", fontSize: "1.5rem" }}>Additional Tools & Technologies</h3>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem" }}>
            {tools.map((tool) => (
              <span
                key={tool}
                className="glass"
                style={{
                  padding: "0.5rem 1.5rem",
                  borderRadius: "50px",
                  fontSize: "0.9rem",
                  color: "var(--text-secondary)"
                }}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

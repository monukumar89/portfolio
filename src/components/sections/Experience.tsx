"use client";

import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      company: "InfoStride Technologies Pvt. Ltd.",
      role: "Expert Software Engineer",
      period: "Nov 2023 - Present",
      desc: "Leading development and client management efforts. Specializing in Laravel, CodeIgniter, ReactJS, and WordPress. Guiding a talented team and ensuring high-quality solutions.",
    },
    {
      company: "TryCyfer Technologies Pvt. Ltd",
      role: "Senior Web Developer",
      period: "May 2023 - Oct 2023",
      desc: "Led development projects using WordPress and Shopify, optimizing website performance and enhancing user experiences.",
    },
    {
      company: "Canvs Technologies",
      role: "Lead Developer",
      period: "Aug 2018 - May 2023",
      desc: "Oversaw and managed a skilled team, ensuring effective collaboration and successful project delivery. Contributed to development tasks and provided guidance.",
    },
    {
      company: "GauriTek Software Solutions",
      role: "Web Developer",
      period: "Jul 2017 - Jul 2018",
      desc: "Developed and maintained web applications, focusing on scalable and efficient code.",
    },
  ];

  return (
    <section id="experience" className="glass" style={{ margin: "4rem 0", borderRadius: "40px" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Career <span className="text-gradient">Timeline</span></h2>
          <p style={{ color: "var(--text-secondary)" }}>A journey through 11+ years of professional growth.</p>
        </div>

        <div style={{ position: "relative", maxWidth: "800px", margin: "0 auto" }}>
          {/* Timeline Line */}
          <div style={{
            position: "absolute",
            left: "0",
            top: "0",
            bottom: "0",
            width: "2px",
            background: "rgba(255,255,255,0.1)",
            marginLeft: "20px"
          }} />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              style={{
                paddingLeft: "60px",
                position: "relative",
                marginBottom: "3rem"
              }}
            >
              {/* Dot */}
              <div style={{
                position: "absolute",
                left: "14px",
                top: "8px",
                width: "14px",
                height: "14px",
                borderRadius: "50%",
                background: "var(--primary)",
                border: "4px solid var(--bg-dark)",
                zIndex: 1
              }} />

              <div className="glass" style={{ padding: "2rem", borderRadius: "20px" }}>
                <span style={{ fontSize: "0.8rem", color: "var(--primary)", fontWeight: 600 }}>{exp.period}</span>
                <h3 style={{ fontSize: "1.5rem", margin: "0.5rem 0" }}>{exp.role}</h3>
                <h4 style={{ fontSize: "1rem", color: "var(--text-secondary)", marginBottom: "1rem" }}>{exp.company}</h4>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>{exp.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

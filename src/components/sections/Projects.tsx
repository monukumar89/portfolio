"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface Project {
  title: string;
  desc: string;
  url: string;
  tags: string[];
}

const Projects = () => {
  const laravelProjects: Project[] = [
    {
      title: "DebateGo",
      desc: "An educational platform for practicing and learning debate skills with real-time feedback.",
      url: "https://www.debatego.com/",
      tags: ["Laravel", "React", "Education"]
    },
    {
      title: "Zuno by Foundit",
      desc: "A talent discovery platform for internships and fresher jobs, handling massive traffic.",
      url: "https://www.foundit.in/zuno/",
      tags: ["Scale", "Job Portal", "Laravel"]
    },
    {
      title: "Mentora IAS",
      desc: "Comprehensive learning management system for civil services aspirants.",
      url: "https://www.mentoraias.co.in/",
      tags: ["LMS", "Laravel", "Education"]
    },
    {
      title: "UttarSuri",
      desc: "A specialized platform for educational resources and student management.",
      url: "https://uttarsuri.com/uttarsuri/",
      tags: ["Laravel", "Education", "PHP"]
    },
    {
      title: "SQC Training LMS",
      desc: "Professional training and certification management system.",
      url: "https://lms.sqctraining.com/",
      tags: ["LMS", "Training", "Laravel"]
    },
    {
      title: "Nexon360",
      desc: "A comprehensive fitness and lifestyle management SaaS platform.",
      url: "https://nexon360.com/",
      tags: ["Fitness", "SaaS", "Laravel"]
    },
    {
       title: "Exam Academy",
       desc: "High-end exam preparation and mock test platform with advanced analytics.",
       url: "https://exam-academy.webultrasolution.io/",
       tags: ["Testing", "Analytics", "Laravel"]
    },
    {
       title: "Fuel Pump Management",
       desc: "Business management software for fuel stations and logistics.",
       url: "https://fuelpumpmanagement.webultrasolution.io/",
       tags: ["ERP", "Management", "Laravel"]
    }
  ];

  const wordpressProjects: Project[] = [
    {
      title: "Sunny Flower Delivery",
      desc: "Premium e-commerce platform for flower delivery and gifting across the US.",
      url: "https://www.sunnyflowerdelivery.com/",
      tags: ["E-commerce", "WordPress", "Custom UI"]
    },
    {
      title: "Bloom Flower Delivery",
      desc: "High-end floral arrangement and delivery service website.",
      url: "https://bloomflowerdelivery.com/",
      tags: ["WordPress", "Design", "E-commerce"]
    },
    {
      title: "Gift Basket Universe",
      desc: "Curation and delivery platform for specialized gift baskets.",
      url: "https://giftbasketuniverse.com/",
      tags: ["WordPress", "E-commerce", "Logistics"]
    },
    {
      title: "Characters for Party",
      desc: "Booking platform for professional character entertainment services.",
      url: "https://charactersforparty.com/",
      tags: ["WordPress", "Booking", "Entertainment"]
    },
    {
      title: "Party Characters for Kids",
      desc: "Entertainment services portal for kids' party bookings.",
      url: "https://partycharactersforkids.com/",
      tags: ["WordPress", "Kids", "Events"]
    }
  ];

  const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: (index % 3) * 0.1 }}
      whileHover={{ y: -10 }}
      className="glass"
      style={{
        borderRadius: "24px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column"
      }}
    >
      <div style={{
        height: "180px",
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
        <h3 className="text-gradient" style={{ fontSize: "1.25rem", zIndex: 1, textAlign: 'center', padding: '0 1rem' }}>{project.title}</h3>
      </div>

      <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", gap: "0.75rem", flex: 1 }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
          {project.tags.map(tag => (
            <span key={tag} style={{ fontSize: "0.6rem", color: "var(--primary)", fontWeight: 600, textTransform: "uppercase" }}>{tag}</span>
          ))}
        </div>
        <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.5 }}>
          {project.desc}
        </p>
        <div style={{ marginTop: "auto", display: "flex", gap: "1rem" }}>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="glass"
            style={{
              padding: "0.5rem 1rem",
              borderRadius: "10px",
              fontSize: "0.85rem",
              fontWeight: 600,
              display: "flex",
              alignItems: "center",
              gap: "0.5rem"
            }}
          >
            Live Demo <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="projects">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Featured <span className="text-gradient">Projects</span></h2>
          <p style={{ color: "var(--text-secondary)", maxWidth: "600px", margin: "0 auto" }}>
            A selection of high-impact web applications I&apos;ve built for global clients over 11+ years.
          </p>
        </div>

        {/* Laravel Section */}
        <div style={{ marginBottom: "5rem" }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.75rem', whiteSpace: 'nowrap' }}>Laravel Excellence</h3>
            <div style={{ height: '1px', flex: 1, background: 'var(--border-glass)' }}></div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
            {laravelProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* WordPress Section */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.75rem', whiteSpace: 'nowrap' }}>WordPress Solutions</h3>
            <div style={{ height: '1px', flex: 1, background: 'var(--border-glass)' }}></div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
            {wordpressProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: "5rem" }}>
          <p style={{ color: "var(--text-secondary)", marginBottom: "1.5rem" }}>And many more successful deployments...</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;

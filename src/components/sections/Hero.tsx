"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
      {/* Background Blobs */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '10%',
        width: '300px',
        height: '300px',
        background: 'var(--primary)',
        filter: 'blur(150px)',
        opacity: 0.2,
        zIndex: -1
      }} />
      <div style={{
        position: 'absolute',
        bottom: '20%',
        right: '10%',
        width: '400px',
        height: '400px',
        background: 'var(--secondary)',
        filter: 'blur(200px)',
        opacity: 0.15,
        zIndex: -1
      }} />

      <div className="container">
        <div style={{ maxWidth: '800px' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span style={{ 
              display: 'inline-block', 
              padding: '0.5rem 1rem', 
              borderRadius: '50px', 
              background: 'rgba(59, 130, 246, 0.1)', 
              color: 'var(--primary)',
              fontSize: '0.9rem',
              fontWeight: 600,
              marginBottom: '1.5rem',
              border: '1px solid rgba(59, 130, 246, 0.2)'
            }}>
              Available for New Projects
            </span>
            <h1 style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', lineHeight: 1.1, marginBottom: '1.5rem' }}>
              Crafting <span className="text-gradient">Digital Experiences</span> that Define Excellence
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', maxWidth: '600px' }}>
              I am <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Monu Kumar</span>, an Expert Software Engineer with 11+ years of mastery in full-stack development, specializing in Laravel, React.js, and WordPress.
            </p>

            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <a href="#projects" className="glass" style={{
                padding: '1rem 2rem',
                borderRadius: '12px',
                background: 'var(--primary)',
                color: 'white',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                border: 'none'
              }}>
                View My Work <ChevronRight size={20} />
              </a>
              <a href="#contact" className="glass" style={{
                padding: '1rem 2rem',
                borderRadius: '12px',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                Contact Me
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'var(--text-secondary)'
        }}
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;

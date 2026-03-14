"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Get In <span className="text-gradient">Touch</span></h2>
          <p style={{ color: "var(--text-secondary)", maxWidth: "600px", margin: "0 auto" }}>
            Have a project in mind or just want to say hi? Feel free to reach out.
          </p>
        </div>

        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
          gap: "4rem",
          alignItems: "start" 
        }}>
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 style={{ fontSize: "1.5rem", marginBottom: "2rem" }}>Contact Information</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <div className="glass" style={{ padding: "1rem", borderRadius: "12px", color: "var(--primary)" }}>
                  <Mail size={24} />
                </div>
                <div>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.8rem" }}>Email</p>
                  <p style={{ fontWeight: 600 }}>sun.rised01@gmail.com</p>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <div className="glass" style={{ padding: "1rem", borderRadius: "12px", color: "var(--secondary)" }}>
                  <Phone size={24} />
                </div>
                <div>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.8rem" }}>Phone</p>
                  <p style={{ fontWeight: 600 }}>(+91) 9653819089</p>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <div className="glass" style={{ padding: "1rem", borderRadius: "12px", color: "var(--accent)" }}>
                  <MapPin size={24} />
                </div>
                <div>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.8rem" }}>Location</p>
                  <p style={{ fontWeight: 600 }}>Mohali, INDIA</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="glass"
            style={{ padding: "3rem", borderRadius: "30px" }}
          >
            <form style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <label style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>Name</label>
                  <input type="text" className="glass" style={{ 
                    padding: "1rem", 
                    borderRadius: "12px", 
                    border: "none", 
                    color: "white",
                    outline: "none"
                  }} placeholder="John Doe" />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <label style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>Email</label>
                  <input type="email" className="glass" style={{ 
                    padding: "1rem", 
                    borderRadius: "12px", 
                    border: "none", 
                    color: "white",
                    outline: "none"
                  }} placeholder="john@example.com" />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <label style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>Message</label>
                <textarea className="glass" rows={4} style={{ 
                  padding: "1rem", 
                  borderRadius: "12px", 
                  border: "none", 
                  color: "white",
                  outline: "none",
                  resize: "none"
                }} placeholder="Your message here..." />
              </div>
              <button 
                type="button" 
                className="glass"
                style={{
                  padding: "1rem",
                  borderRadius: "12px",
                  background: "var(--primary)",
                  color: "white",
                  fontWeight: 600,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  border: "none",
                  cursor: "pointer",
                  marginTop: "1rem"
                }}
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

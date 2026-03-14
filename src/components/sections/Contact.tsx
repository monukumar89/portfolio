"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { submitContactForm } from "@/app/actions/contact";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ success: boolean; message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFeedback(null);

    const formData = new FormData(e.currentTarget);
    const result = await submitContactForm(formData);

    setFeedback(result);
    setIsSubmitting(false);

    if (result.success) {
      (e.target as HTMLFormElement).reset();
    }
  };

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
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <label style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>Name</label>
                  <input name="name" type="text" className="glass" required style={{ 
                    padding: "1rem", 
                    borderRadius: "12px", 
                    border: "none", 
                    color: "white",
                    outline: "none"
                  }} placeholder="John Doe" />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <label style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>Email</label>
                  <input name="email" type="email" className="glass" required style={{ 
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
                <textarea name="message" className="glass" rows={4} required style={{ 
                  padding: "1rem", 
                  borderRadius: "12px", 
                  border: "none", 
                  color: "white",
                  outline: "none",
                  resize: "none"
                }} placeholder="Your message here..." />
              </div>
              
              {feedback && (
                <div style={{ 
                  padding: "1rem", 
                  borderRadius: "12px", 
                  background: feedback.success ? "rgba(16, 185, 129, 0.1)" : "rgba(239, 68, 68, 0.1)",
                  color: feedback.success ? "var(--accent)" : "#ef4444",
                  fontSize: "0.9rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem"
                }}>
                  {feedback.success ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
                  {feedback.message}
                </div>
              )}

              <button 
                type="submit" 
                disabled={isSubmitting}
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
                  cursor: isSubmitting ? "not-allowed" : "pointer",
                  marginTop: "1rem",
                  opacity: isSubmitting ? 0.7 : 1
                }}
              >
                {isSubmitting ? (
                  <>Sending... <Loader2 className="reveal" style={{ animation: "spin 1s linear infinite" }} size={18} /></>
                ) : (
                  <>Send Message <Send size={18} /></>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default Contact;

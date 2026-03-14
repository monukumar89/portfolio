import React from "react";

const Footer = () => {
  return (
    <footer className="glass" style={{ padding: '4rem 0', marginTop: '4rem' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <div style={{ marginBottom: '2rem' }}>
          <h2 className="text-gradient" style={{ fontSize: '2rem', marginBottom: '1rem' }}>Monu Kumar</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto' }}>
            Expert Software Engineer with 11+ years of experience building high-performance web applications.
          </p>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2rem' }}>
          {/* Add social links here if provided later */}
        </div>

        <div style={{ borderTop: '1px solid var(--border-glass)', paddingTop: '2rem', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
          © {new Date().getFullYear()} Monu Kumar. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

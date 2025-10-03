"use client";
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo-container">
          <Image
            src="/assets/logo-comps/Real Royalty Records logo-OFFICIAL-1.png"
            alt="Real Royalty Records"
            width={144}
            height={144}
            className="footer-logo real-royalty-records-logo2" // Add a specific class for styling
          />
        </div>
        <div className="footer-text-container">
          <h1 className="footer-text">
            Real Royalty Records all rights reserved © 2025
          </h1>
        </div>
        <div className="footer-logo-container">
          <a 
            href="https://genesisrebornproductions.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/assets/logo-comps/Genisis Reborn _real_logo2.png"
              alt="Genesis Reborn Productions"
              width={144}
              height={144}
              className="footer-logo genesis-reborn-logo-footer" // Add a specific class for styling
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import './Footer.css';
import { FooterTags } from './components';

/**
 * Footer component that displays navigation tags and a chat button
 */
const Footer: React.FC = () => {
  return (
    <footer className={`footer ml-[106px]`}>
      <FooterTags />
      <div className="footer-chat">
        <button
          className="footer-chat-button"
          onClick={() => {
            console.log('Chat button clicked');
          }}
          aria-label="Open chat"
        >
          💬 Go<span style={{ fontWeight: 'bold' }}>IZI</span>
        </button>
      </div>
    </footer>
  );
};
export default Footer;

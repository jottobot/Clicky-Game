import React from 'react';
import './style.css';

// presentation - function - stateless WE CAN'T USE "THIS"
const Footer = props => {
  return (
    <footer className="footer">
      <span>{props.spanData}</span>
    </footer>
  );
}

export default Footer;
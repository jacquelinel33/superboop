import React from 'react'

export const Footer = () => {
  return (
    <div className="footer-grid">
      <div>
        <p className="footer-title">Information</p>
        <hr></hr>
        <ul className="footer-links">
          <li>Faqs</li>
          <li>About Us</li>
        </ul>
      </div>
      <div>
        <p className="footer-title">Order Support</p>
        <hr></hr>
        <ul className="footer-links">
          <li>Shipping & Handling</li>
          <li>Returns & Exchanges</li>
        </ul>
      </div>
    </div>
  )
}

import React from 'react'
import './FooterSection.css'
const FooterSection = () => {
  return (
      <div>
          <footer className="footer-section">
        <div className="footer-logo-container">
          <img src='../images/logo.png' alt="React Logo" className="footer-logo" />
        </div>
        <div className="legal-policies">
          <h3>Legal Policies</h3>
          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>
        </div>
        <div className="social-media">
          <h3>Social Media</h3>
          <p>Facebook</p>
          <p>Instagram</p>
        </div>
        <div className="ready-help">
        <h3>We are Ready to Help you.</h3>
        <p><a href='#'>Mail: enquiry@ebiz.co.in</a></p>
       <p> <a>Call: +918875023333</a></p>
      </div>

      </footer>

    </div>
  )
}

export default FooterSection
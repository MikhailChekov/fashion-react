import React from "react";
import "./Footer.css";
import facebook from "../../img/socials/fb.svg";
import instagram from "../../img/socials/inst.svg";
import twitter from "../../img/socials/tw.svg";
import linkedIn from "../../img/socials/in.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__text">
          <div className="footer__title">FASHION</div>
          <div className="footer__desc">
            Complete your style with awesome clothes from us.
          </div>
          <div className="footer__socials">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebook} alt="facebook" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} alt="instagram" />
            </a>
            <a
              href="https://www.twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitter} alt="twitter" />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedIn} alt="linkedIn" />
            </a>
          </div>
        </div>
        <div className="footer__menu">
          <div className="footer__menu-col">
            <ul>
              <li>Company</li>
              <li>About</li>
              <li>Contact us</li>
              <li>Support</li>
              <li>Careers</li>
            </ul>
          </div>
          <div className="footer__menu-col">
            <ul>
              <li>Quick Link</li>
              <li>Share Location</li>
              <li>Orders Tracking</li>
              <li>Size Guide</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div className="footer__menu-col">
            <ul>
              <li>Legal</li>
              <li>Terms & conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

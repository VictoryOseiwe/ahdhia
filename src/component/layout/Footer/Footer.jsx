import React from "react";
import { socialHandle } from "../../common/Icons";
import "./Footer.css";
import { support, location, about } from "../../common/Menu";

export default function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="footer-section1">
          <div className="footer-subscribe">
            <h1>AHDHIA</h1>
            <p>
              Get news letter update for upcoming and best discount for all item
            </p>
            <form className="footer-form" action="">
              <input
                placeholder="Your email"
                className="footer-input"
                type="text"
              />
              <button className="footer-sub-button" type="submit">
                Submit
              </button>
            </form>
          </div>
          <div className="footer-menu">
            <h4>Support</h4>
            <ul className="footer-menu-item">
              {support.map((item, index) => (
                <li key={index}>{item.name}</li>
              ))}
            </ul>
          </div>
          <div className="footer-menu">
            <h4>Location</h4>
            <ul className="footer-menu-item">
              {location.map((item, index) => (
                <li key={index}>{item.name}</li>
              ))}
            </ul>
          </div>
          <div className="footer-menu">
            <h4>About</h4>
            <ul className="footer-menu-item">
              {about.map((item, index) => (
                <li key={index}>{item.name}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="horizontal-rule"></div>
        <div className="footer-section2">
          <div className="footer-icon">
            {socialHandle.map((item) => (
              <a className="icon" href="">
                {item.icon}
              </a>
            ))}
          </div>
          <ul className="footer-policy">
            <li>Terms and Conditions</li>
            <li>Privacy Policy</li>
            <li>Support</li>
          </ul>

          <p>Copyright @ victoryoseiwe. All Rights Reserved</p>
        </div>
      </div>
    </>
  );
}

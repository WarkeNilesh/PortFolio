import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Nilesh</h1>

        <ui className="footer__list">
          <li className="li">
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>
        </ui>
        <div className="footer__social">
          <a
            href="https://github.com/WarkeNilesh"
            className="footer__social-link"
            target="blank"
          >
            <i class="uil uil-github"> </i>
          </a>
          <a
            href="https://www.linkedin.com/in/warke-nilesh/"
            className="footer__social-link"
            target="blank"
          >
            <i class="uil uil-linkedin"></i>
          </a>
          {/* <a
            href="https://twitter.com/home?lang=en"
            className="footer__social-link"
            target="blank"
          >
            <i class="uil uil-twitter"></i>
          </a> */}
        </div>

        <span className="footer__copy">
        Nilesh &#169;2024  . All rights reserved
        </span>

      </div>
    </footer>
  );
};

export default Footer;

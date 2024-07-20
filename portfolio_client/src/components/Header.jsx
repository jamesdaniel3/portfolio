import { Link } from "react-router-dom";
import "../styles/header.css";

import linkedIn from "../assets/icons/linkedin.png";
import github from "../assets/icons/github.png";
import contact from "../assets/icons/email.png";

export function Header() {
  return (
    <div className={"header"}>
      <div className={"header-section main-page-links"}>
        <Link className="navbar-link" to={"/web"}>
          <span>Web</span>
        </Link>
        <Link className="navbar-link" to={"/cli"}>
          <span>CLI</span>
        </Link>
        <Link className="navbar-link" to={"/upcoming"}>
          <span>In-the-works</span>
        </Link>
      </div>
      <div className={"header-section header-title"}>
        <Link className="navbar-link" to={"/"}>
          <span className={"title"}>
            <strong>James Daniel</strong>
          </span>
        </Link>
      </div>
      <div className="header-section social-links">
        <a
          href="https://github.com/jamesdaniel3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt="github link" className="image github-image" />
        </a>
        <a
          href="https://www.linkedin.com/in/james-daniel-5b48b01b0/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={linkedIn}
            alt="linedin link"
            className="image linkedin-image"
          />
        </a>
        <a href="mailto:jamesmd333@gmail.com" rel="noopener noreferrer">
          <img src={contact} alt="contact me" className="image contact-image" />
        </a>
      </div>
    </div>
  );
}

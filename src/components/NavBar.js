import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/logo-white.png";
import LinkedIn from "../assets/img/nav-icon1.svg";
/*import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";*/
import Github from "../assets/img/github.svg";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""} fixed="top">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#stack"
              className={
                activeLink === "stack" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("stack")}
            >
              Stack
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#resume"
              className={
                activeLink === "resume" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("resume")}
            >
              Resume
            </Nav.Link>
          </Nav>
          <span className="navbar-text d-flex align-items-center">
            <div className="social-icon d-flex">
              <a
                href="https://www.linkedin.com/in/stephany-acosta/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={LinkedIn} alt="Linkedin Icon" />
              </a>
              <a
                href="https://github.com/snag2003"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Github} alt="Github Icon" />
              </a>
              {/*
              <a href="#home">
                <img src={navIcon2} alt="Social Icon 2" />
              </a>
              <a href="#home">
                <img src={navIcon3} alt="Social Icon 3" />
              </a>
              */}
            </div>
            <button
              className="vvd ms-3"
              onClick={() => {
                const contactSection = document.getElementById("connect");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <span>Let’s Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo-white.png";
import LinkedIn from "../assets/img/nav-icon1.svg";
import Github from "../assets/img/github.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <Col sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
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
            </div>
            <p>CopyRight 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

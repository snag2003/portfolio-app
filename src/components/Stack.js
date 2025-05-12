import js from "../assets/img/JavaScript-logo.png";
import html from "../assets/img/html-logo.png";
import css from "../assets/img/css-logo.png";
import cplus from "../assets/img/c++-logo.png";
import react from "../assets/img/react-logo.webp";
import typescript from "../assets/img/typescript-logo.webp";
import nextjs from "../assets/img/nextjs-icon.png";
import tailwind from "../assets/img/tailwind-logo.png";
import bootstrap from "../assets/img/bootstrap-logo.png";
import figma from "../assets/img/figma-logo.webp";
import googleCloud from "../assets/img/google-cloud-icon.png";
import github from "../assets/img/github-logo.png";
import git from "../assets/img/git-logo.png";
import mysql from "../assets/img/mysql-logo.png";
import postman from "../assets/img/postman-logo.svg";
import python from "../assets/img/python-logo.webp";
import webflow from "../assets/img/webflow-logo.webp";
import wix from "../assets/img/wix-logo.png";
import wordpress from "../assets/img/wordpress-logo.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

export const Stack = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
    <section className="stack" id="stack">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="stack-bx wow zoomIn">
              <h2>Tech Stack</h2>
              <p>These are the tools I use to make my ideas come alive.</p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme stack-slider"
              >
                <div className="item">
                  <img src={js} alt="Javascript Logo" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={html} alt="HTML Logo" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={css} alt="CSS Logo" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={cplus} alt="C++ Logo" />
                  <h5>C++</h5>
                </div>
                <div className="item">
                  <img src={figma} alt="Figma Logo" />
                  <h5>Figma</h5>
                </div>
                <div className="item">
                  <img src={react} alt="React Logo" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={typescript} alt="Google Cloud Logo" />
                  <h5>Typescript</h5>
                </div>
                <div className="item">
                  <img src={nextjs} alt="Github Logo" />
                  <h5>Next.js</h5>
                </div>
                <div className="item">
                  <img src={tailwind} alt="Git Logo" />
                  <h5>Tailwind</h5>
                </div>
                <div className="item">
                  <img src={bootstrap} alt="mySQL Logo" />
                  <h5>Bootstrap</h5>
                </div>
                <div className="item">
                  <img src={googleCloud} alt="Google Cloud Logo" />
                  <h5>Google Cloud</h5>
                </div>
                <div className="item">
                  <img src={github} alt="Github Logo" />
                  <h5>Github</h5>
                </div>
                <div className="item">
                  <img src={git} alt="Git Logo" />
                  <h5>Git</h5>
                </div>
                <div className="item">
                  <img src={mysql} alt="mySQL Logo" />
                  <h5>mySQL</h5>
                </div>
                <div className="item">
                  <img src={postman} alt="Postman Logo" />
                  <h5>Postman</h5>
                </div>
                <div className="item">
                  <img src={python} alt="Python Logo" />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <img src={webflow} alt="Webflow" />
                  <h5>Webflow</h5>
                </div>
                <div className="item">
                  <img src={wix} alt="Wix" />
                  <h5>Wix</h5>
                </div>
                <div className="item">
                  <img src={wordpress} alt="Wordpress" />
                  <h5>Wordpress</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img
        className="background-image-left"
        src={colorSharp}
        alt="background"
      />
    </section>
  );
};

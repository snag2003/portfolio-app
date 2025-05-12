import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import cocheaArriba from "../assets/img/project-images/cochea-arriba.png";
import fromHomeland from "../assets/img/project-images/from-homeland-to-homeland.png";
import game from "../assets/img/project-images/game.png";
import imomubiales from "../assets/img/project-images/imomubiales.png";
import learningHow from "../assets/img/project-images/learning-how-to-learn.png";
import plusMed from "../assets/img/project-images/plus-medical.png";
import soundboard from "../assets/img/project-images/soundboard.png";
import spotify from "../assets/img/project-images/spotify-your-music-taste.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const firstProjects = [
    {
      title: "Your Music Taste",
      description:
        "Use Spotify API to provide a personalized music exploration experience",
      imgUrl: spotify,
      repoUrl: "https://github.com/snag2003/music-SpotifyAPI-frontend",
    },
    {
      title: "Operación Cochea",
      description:
        "Agricultural initiative website led by Wonder Panama and Juventud Agro",
      imgUrl: cocheaArriba,
      repoUrl: "https://github.com/snag2003/cochea-arriba",
      demoUrl: "https://cochea-arriba.vercel.app/",
    },
    {
      title: "From Homeland to Homeland",
      description: "Single-page website that explores the hometowns",
      imgUrl: fromHomeland,
      repoUrl: "https://github.com/snag2003/web_project_3_esp",
      demoUrl: "https://snag2003.github.io/web_project_3_esp/",
    },
    {
      title: "Shooter Game",
      description: "Dynamic and action-packed space shooter game",
      imgUrl: game,
      repoUrl: "https://github.com/snag2003/game-dev",
      demoUrl: "https://snag2003.github.io/game-dev/",
    },
    {
      title: "Imomubiales",
      description: "E-Commerce website for a small real estate company",
      imgUrl: imomubiales,
      repoUrl: "https://github.com/No-Country/c16-61",
      demoUrl: "https://imomubiales.vercel.app/",
    },
    {
      title: "Plus Medical",
      description: "Appointment setting app for doctors",
      imgUrl: plusMed,
      repoUrl: "https://github.com/No-Country/s15-15-n-java-react",
    },
  ];

  const secondProjects = [
    {
      title: "Learning How to Learn",
      description: "Single-page website about learning techniques",
      imgUrl: learningHow,
      repoUrl: "https://github.com/snag2003/web_project_1_es",
      demoUrl: "https://snag2003.github.io/web_project_1_es/",
    },
    {
      title: "Soundboard",
      description: "An interactive and playful soundboard",
      imgUrl: soundboard,
      repoUrl: "https://github.com/snag2003/stephysoundboard",
      demoUrl: "https://snag2003.github.io/stephysoundboard/",
    },
  ];

  /* const thirdProjects = [];*/

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Here’s a peek at my favorite projects — websites, apps, and
                    designs I’ve brought to life.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">2</Nav.Link>
                      </Nav.Item>
                      {/*<Nav.Item>
                        <Nav.Link eventKey="third">3</Nav.Link>
                      </Nav.Item>*/}
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {firstProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {secondProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      {/*<Tab.Pane eventKey="third">
                        <Row>
                          {thirdProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>*/}
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="Background pattern"
      />
    </section>
  );
};

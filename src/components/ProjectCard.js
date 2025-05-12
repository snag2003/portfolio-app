import { Col } from "react-bootstrap";

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  repoUrl,
  demoUrl,
}) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="project" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br />
          <div className="button-group">
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="repo-button"
            >
              View Repo
            </a>
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="demo-button"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </Col>
  );
};

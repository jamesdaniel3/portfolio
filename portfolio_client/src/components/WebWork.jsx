import PropTypes from "prop-types";
import "../styles/web_work.css";

function WebWork({ projects }) {
  return (
    <>
      {projects.map((project, index) => (
        <div className="web-project" key={index}>
          <img
            src={project.display_image}
            className="project-image"
            alt={project.name}
          ></img>
          <div className="project-info">
            <h3 className="project-name">{project.name}</h3>
            <p className="project-description">{project.description}</p>
            <a
              href={project.github_link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link repo-link"
            >
              <strong>View the code</strong>{" "}
            </a>
            {project.live_link && (
              <a
                href={project.live_link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link live-link"
              >
                <strong>See the site live</strong>{" "}
              </a>
            )}
          </div>
        </div>
      ))}
    </>
  );
}

WebWork.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      display_image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      github_link: PropTypes.string.isRequired,
      live_link: PropTypes.string,
    })
  ).isRequired,
};

export default WebWork;

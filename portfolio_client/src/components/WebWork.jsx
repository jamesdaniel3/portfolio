import spotifySocialImage from "../assets/project_previews/spotify_socal.png";
import hazingReportImage from "../assets/project_previews/hazing_reporter.png";

import "../styles/web_work.css";

export default function WebWork() {
  const projects = [
    {
      id: "spotify_social",
      name: "Spotify Social",
      description:
        "This project was created to practice using React, APIs, express, and firebase. After a user logs in to Spotify, they can view information about their listening habits, as well as message other users. ",
      github_link: "https://github.com/jamesdaniel3/spotify-social",
      display_image: spotifySocialImage,
    },
    {
      id: "hazing_reporter",
      name: "UVA Hazing Reporter",
      description:
        "This project was my first experience with web-development, where I learned to use Django, Heroku, and PostgreSQl, among other things. I built it with a team for my Advanced Softwhere Development course and it is a take on a hazing whistleblower system for the University of Virginia.",
      github_link: "https://github.com/jamesdaniel3/hazing-reporter-simulator",
      live_link:
        "https://hazing-reporter-simulator-4777047cf362.herokuapp.com/",
      display_image: hazingReportImage,
    },
  ];
  return (
    <>
      {projects.map((project, index) => (
        <div className="web-project" key={index}>
          <img src={project.display_image} className="project-image"></img>
          <div className="project-info">
            <h3 className="project-name">{project.name}</h3>
            <p className="project-description">{project.description}</p>
            <a
              href={project.github_link}
              target="_blank"
              className="project-link repo-link"
            >
              <strong>View the code</strong>{" "}
            </a>
            {project.live_link && (
              <a
                href={project.live_link}
                target="_blank"
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

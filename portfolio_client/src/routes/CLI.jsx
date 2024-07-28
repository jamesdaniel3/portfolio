import ProjectContent from "../components/ProjectContent";
import { cli_projects } from "../components/ProjectConstants";

export default function CLI() {
  return (
    <>
      <div className="page-content cli-page-content">
        <p>
          {" "}
          I spend a huge portion of my time during the school year working as a
          teaching assistant for Introduction to Python and Data Structures and
          Algorithms II. On occasion, there have been tasks that take a large
          portion of our time as TAs that I thought could be optimized. To solve
          for this, I have created a couple of scripts that run from the command
          line to improve the experience of our TAs and Students. They can be
          found below.{" "}
        </p>
        <ProjectContent projects={cli_projects} />
      </div>
    </>
  );
}

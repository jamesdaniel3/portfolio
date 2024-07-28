import ProjectContent from "../components/ProjectContent";
import { in_the_works_projects } from "../components/ProjectConstants";

export default function Progress() {
  return (
    <>
      <div className="page-content progress-page-content">
        <p>
          {" "}
          While I usually have a small side project or two ongoing, I want to
          use this page to display any big undertakings I have going on at the
          moment. For now, that is my first attempt at a building a programming
          language!
        </p>
        <ProjectContent projects={in_the_works_projects} />
      </div>
    </>
  );
}

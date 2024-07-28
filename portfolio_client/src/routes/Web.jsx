import WebWork from "../components/WebWork";
import { web_projects } from "../components/project_constants";

export default function Web() {
  return (
    <>
      <div className="page-content web-page-content">
        <p style={{ margin: "0" }}>
          {" "}
          I got my first experience with webdev in January of 2023, when I took
          a class called Advnaced Software Development where we spent the
          semester building a website. Since then, I have experimented with
          mulitple framworks (Django, React, Rails), hosting solutions (Heroku,
          AWS, Render), and languages(JS, TS, Python, Ruby). Below are a couple
          examples of those experiments.
        </p>
        <WebWork projects={web_projects} />
      </div>
    </>
  );
}

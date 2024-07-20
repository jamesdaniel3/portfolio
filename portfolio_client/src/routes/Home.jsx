import WebWork from "../components/WebWork";
import "../styles/home.css";

export default function Home() {
  return (
    <>
      <div className="page-content home-page-content">
        <div className="introduction">
          <p className="heading">Hi, I'm James</p>
          <p className="subtext">
            I'm a developer with expereince in fullstack development. I'm
            passionate about programming because I love solving problems and the
            practice provides ample opportunity to do so. Please check out some
            of my recent projects below and feel free to contact me.
          </p>
        </div>
        <div className="work-section web">
          <h1>Web Sites</h1>
          <WebWork />
        </div>
        <div className="work-section cli">
          <h1>Command Line</h1>
        </div>
        <div className="work-section upcoming">
          <h1>Upcoming Projects</h1>
        </div>
      </div>
    </>
  );
}

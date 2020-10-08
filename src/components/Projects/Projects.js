import React from "react";

import HRSystem from "../../assets/hrsystem.png";
import Task from "../../assets/task.png";
import TalkInfo from "../../assets/portaliLajme.png";
import "./Projects.css";

const Projects = () => {
  return (
    <div
      className="porjectStyle   d-flex flex-column justify-content-center  "
      style={{ border: "3px solid black" }}
    >
      <div className="row d-flex justify-content-center mb-5">
        <h1>Projects</h1>
      </div>
      <div className="d-flex  justify-content-center mb-5">
        <div className=" col-lg-4 ">
          {" "}
          <a
            href="https://github.com/leutrimveliu/human-resource-system"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="hrSystem d-flex pb-5 img-thumbnail "
              src={HRSystem}
              alt="Leutrim Veliu"
            ></img>
          </a>
          <br></br>
          <h5>Human Resource System</h5>
          <p>
            Project based on ReactJS, Node, MySql as a database, adn Firebase
            for authentication. It's a system of managing employees for one
            company.
          </p>
        </div>
        <div className=" col-lg-4  ">
          <a
            href="https://hardcore-agnesi-184a7d.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="taskie d-flex pb-5 img-thumbnail"
              src={Task}
              alt="Leutrim Veliu"
            ></img>
          </a>
          <br></br>
          <h5>Task Managment</h5>
          <p>
            Project based only on ReactJS. Its simple, just using some
            elementary things of React.
          </p>
        </div>
        <div className=" col-lg-4 ">
          {" "}
          <a
            href="http://talkinfo.wts2020.net/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="talkinfo d-flex pb-5 img-thumbnail"
              src={TalkInfo}
              alt="Leutrim Veliu"
            ></img>
          </a>
          <br></br>
          <h5>TalkInfo Portal</h5>
          <p>
            Talkinfo is a news-blogg web app, its built on WordPress, like the
            other news blogs we have nowadays.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Projects;

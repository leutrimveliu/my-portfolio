import { blue } from "@material-ui/core/colors";
import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <div className="resumes  d-flex flex-column justify-content-center mt-5  ">
      <div className="d-flex  justify-content-center mb-5">
        <div className=" col-lg-3">
          <h2>Education</h2>
          <hr className="horizon"></hr>
        </div>
        <div className=" col-lg-3 ">
          <h2>University of Business and Technology</h2>
          <span>
            <em>Bachelor of Computer Science and Technology</em>
          </span>
          <br></br>
          <span>
            <em>2017-2020</em>
          </span>
        </div>
      </div>
      <div className="d-flex  justify-content-center mb-5">
        <div className=" col-lg-3">
          <h2>Training</h2>
          <hr className="horizon"></hr>
        </div>
        <div className="col-lg-3 ">
          <h2>American Univeristy of Kosovo</h2>
          <span>
            <em>YCIP Training - Web Development</em>
          </span>
          <br></br>
          <span>
            <em>2018-2019</em>
          </span>
          <br></br>
          <br></br>
          <h2>SummerCode - UBT</h2>
          <span>
            <em>Web Development</em>
          </span>
          <br></br>
          <span>
            <em>2017</em>
          </span>
        </div>
      </div>
      <div className="d-flex  justify-content-center mb-5">
        <div className=" col-lg-3">
          <h2>Work Experience</h2>
          <hr className="horizon"></hr>
        </div>
        <div className="col-lg-3 ">
          <h2>Kosovo Education Center</h2>
          <span>
            <em>USAID’s After School Support for Teens Program - ASSET.</em>
          </span>
          <br></br>
          <span>
            <em>02/2020-09/2020</em>
          </span>
        </div>
      </div>
      <div className="d-flex  justify-content-center mb-5">
        <div className=" col-lg-3">
          <h2>Professional Skills</h2>
          <hr className="horizon"></hr>
        </div>
        <div className="col-lg-3 ">
          <ul>
            <li>
              <h5>HTML5/CSS3</h5>
            </li>
            <li>
              <h5>JavaScript/ReactJS/NodeJS</h5>
            </li>
            <li>
              <h5>Java</h5>
            </li>
            <li>
              <h5>Wordpress</h5>
            </li>

            <li>
              <h5>Use of GIT</h5>
            </li>
          </ul>
        </div>
      </div>
      <div className="d-flex  justify-content-center mb-5">
        <div className=" col-lg-3">
          <h2>Other Skills</h2>
          <hr className="horizon"></hr>
        </div>
        <div className="col-lg-3 ">
          <ul>
            <li>
              <h5>Adaptability</h5>
            </li>
            <li>
              <h5>Motivation</h5>
            </li>
            <li>
              <h5>Problem-solving</h5>
            </li>

            <li>
              <h5>Analytical skills</h5>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Resume;

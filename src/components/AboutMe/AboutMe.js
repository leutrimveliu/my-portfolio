import React from "react";
import "./AboutMe.css";
import ProfilePic from "../../assets/Leutrim.png";

const AboutMe = () => {
  return (
    <div className="row about d-flex justify-content-center header m-0">
      <div className="profilePic d-flex ">
        <img
          className="profilePhoto d-flex w-50 pb-5 "
          src={ProfilePic}
          alt="Leutrim Veliu"
        ></img>
      </div>
      <div className="details d-flex align-items-start flex-column">
        <div className="aboutInfo  m-2 caseCol">
          <h3 className="mt-4 caseCol">About Me</h3>
          <p className="">
            My name is Leutrim Veliu, I'm a ReactJS Developer.{" "}
            <span className="">
              {" "}
              <br></br>
              Currently I'm attending an internship in StarLabs as a Full Stack
              Developer.
            </span>
          </p>
        </div>
        <div className="personalInfo p-2 caseCol">
          <h3 className="">Personal Info</h3>
          <p className="address">
            <span className="">Date of birth: 23/09/1998.</span>
            <br />
            <span>
              Address: Shtepia e Kultures, Miradi E Eperme.
              <br />
              Fushe Kosove 12000, Kosove.
            </span>
            <br />
            <span>+383 45 437 010.</span>
            <br />
            <span>leutrimveliuu@gmail.com</span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default AboutMe;

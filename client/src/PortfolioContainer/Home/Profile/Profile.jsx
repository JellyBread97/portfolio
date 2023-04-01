import React from "react";
import { TypeAnimation } from "react-type-animation";
import "./Profile.css";
import ScrollService from "../../../utilities/ScrollService";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.linkedin.com/in/kotas-martin/">
                <i className="fa fa-linkedin"></i>
              </a>

              <a href="https://www.instagram.com/marty_the_big_adventurer/">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://github.com/JellyBread97">
                <i className="fa fa-github"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Martin</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <TypeAnimation
                  sequence={[
                    "Full Stack Developer",
                    1000,
                    "MERN Stack Developer",
                    1000,
                    "React Developer",
                    1000,
                    "Enthusiastic Developer",
                    1000,
                  ]}
                  repeat={Infinity}
                />
              </h1>
            </span>
            <span className="profile-role-tagline">
              Building web applications with front and back end operations.
            </span>
          </div>
          <div className="profile-options">
            <button
              className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              {" "}
              Hire me{" "}
            </button>
            <a href="Martin_Resume.pdf" download="Martin Kotas Resume.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}

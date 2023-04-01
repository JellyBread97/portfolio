import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carouselOffsetStyle, setCarouselOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 75 },
    { skill: "React.js", ratingPercentage: 75 },
    { skill: "Bootstrap / MUI", ratingPercentage: 75 },
    { skill: "Express.js", ratingPercentage: 75 },
    { skill: "Node.js", ratingPercentage: 75 },
    { skill: "MongoDB", ratingPercentage: 75 },
    { skill: "HTML", ratingPercentage: 75 },
    { skill: "CSS", ratingPercentage: 75 },
    { skill: "SASS", ratingPercentage: 75 },
  ];

  const projectsDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "03/2023", toDate: "04/2023" },
      description:
        "A Personal Portfolio website to showcase all my details and projects at one place.",
      subHeading: "Technologies Used: React.js, Bootstrap",
    },
    {
      title: "Liquid Library",
      duration: { fromDate: "02/2023", toDate: "04/2023" },
      description:
        "A Capstone project to showcase everything I've learnt during Epicode's Full Stack Web Developer Bootcamp",
      subHeading:
        "Technologies Used: React.js, MongoDB, Express.js, Node.js, Redux.js, SASS, MUI",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Epicode"}
        subHeading={"FULL STACK WEB DEVELOPMENT"}
        fromDate={"09/2022"}
        toDate={"04/2023"}
      />
    </div>,

    <div className="resume-screen-container" key="work-experience">
      <ResumeHeading
        heading={"Tesco Café"}
        subHeading={"Front of House / Cook"}
        fromDate={"09/2020"}
        toDate={"present"}
      />
      <ResumeHeading
        heading={"The Hut Group"}
        subHeading={"Warehouse Picker"}
        fromDate={"06/2019"}
        toDate={"06/2020"}
      />
      <ResumeHeading
        heading={"Jazz Club"}
        subHeading={"Barista / Bartender"}
        fromDate={"02/2015"}
        toDate={"05/2018"}
      />
    </div>,

    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Technology"
        description="I have a strong curiosity for discovering new technology and learning new tech stacks."
      />
      <ResumeHeading
        heading="Music"
        description="One of my biggest passions for past 15 years has been playing my bass guitar and learning new musical instruments."
      />
      <ResumeHeading
        heading="Languages"
        description="Occasionally learning new languages to a basic level, next aim is Portuguese"
      />
    </div>,
  ];

  const handleCarousel = (index) => {
    let offsetHeight = 360;

    let newCarouselOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarouselOffsetStyle(newCarouselOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousel(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carouselOffsetStyle.style}
        className="resume-details-carousel"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;

import React from "react";
import { FaBriefcase, FaSchool } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./project.css";

const Projects = () => {
  return (
    <>
      <div className="container timeline-background" id="project">
        <h1 className="heading-projects"> Timeline</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="April 2020 - Present"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<FaBriefcase />}
          >
            <h3 className="vertical-timeline-element-title">
              Full-Stack Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Tata Consultancy Services
            </h4>
            <p>Kolkata, WB </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="July 2019 - March 2020"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<FaBriefcase />}
          >
            <h3 className="vertical-timeline-element-title">
              Front-End Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Tata Consultancy Services
            </h4>
            <p>Kolkata, WB </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="January 2018"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={<FaSchool />}
          >
            <h3 className="vertical-timeline-element-title">Internship</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Calcutta Electric Supply Corporation
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2015 - 2019"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={<FaSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              Electronics and Instrumentation Engineering
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Techno India, Saltlake
            </h4>
            <p>Graduation</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2013 - 2015"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={<FaSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              Senior Secondary Education
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Kendriya Vidyalaya
            </h4>
            <p>High School Degree</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Projects;

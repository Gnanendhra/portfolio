import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { experienceData, experienceStyles } from "../../data/experience";

import "./index.css";

const Experience = () => {
  const renderJobExperience = () => {
    const { icon, content, arrowStyle } = experienceStyles;
    return experienceData.workExperience.map((job) => (
      <VerticalTimelineElement
        key={job.id}
        className="vertical-timeline-element--work"
        contentStyle={content}
        contentArrowStyle={arrowStyle}
        date={job.date}
        iconStyle={icon}
        icon={<img className="timeline-logo" src={job.icon} alt="icon" />}
      >
        <img
          src={job.companyLogo}
          alt={job.company}
          className="vertical-timeline-element-image"
        />
        <h3 className="vertical-timeline-element-title">{job.jobtitle}</h3>
        <h4 className="vertical-timeline-element-subtitle">{job.company}</h4>
        <p>{job.description}</p>
      </VerticalTimelineElement>
    ));
  };

  const renderStudies = () => {
    const { iconLight, content, arrowStyle } = experienceStyles;
    return experienceData.studies.map((study) => (
      <VerticalTimelineElement
        key={study.id}
        className="vertical-timeline-element--work"
        contentStyle={content}
        contentArrowStyle={arrowStyle}
        date={study.date}
        iconStyle={iconLight}
        icon={<img className="timeline-logo" src={study.icon} alt="icon" />}
      >
        <h3 className="vertical-timeline-element-title">{study.course}</h3>
        <h4 className="vertical-timeline-element-subtitle">
          {study.institution}
        </h4>
        <p>{study.description}</p>
      </VerticalTimelineElement>
    ));
  };

  return (
    <section id="experience">
      <div className="experience-container">
        <div className="experience-title">
          <h2>Work Experience & Education</h2>

          <h3>Experience</h3>
        </div>
        <VerticalTimeline>
          {renderJobExperience()}
          {renderStudies()}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;

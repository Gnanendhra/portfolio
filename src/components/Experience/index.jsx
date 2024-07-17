import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { experienceData, experienceStyles } from "../../data/experience";
import cognizant from "../../images/companies/cognizant.png";

import "./index.css";

const Experience = () => {

  const formatedCompanyLogos = {
    altimetrik:'https://www.altimetrik.com/storage/2023/07/Altimetrik-logo_4.png',
    hexagon: 'https://www.hexagon.com/images/v-2-logo.svg/-/media/project/one-web/master-site/defaults/icons/hexagon-logo.png?h=59&iar=0&w=192&hash=81E2D76B11580C47B0992E91EDE3722E',
    cognizant
  }

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
          src={formatedCompanyLogos[job.companyLogo]}
          alt={job.company}
          className={job.id ===3 ? "vertical-timeline-element-image vertical-timeline-element-image-id2" : "vertical-timeline-element-image"}
        />

        <h3 style={{fontSize:'17px'}}>{job.jobtitle}</h3>
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
        <h3 style={{fontSize:'17px'}}>{study.course}</h3>
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

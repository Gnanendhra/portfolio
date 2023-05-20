import React from "react";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import { projectsData } from "../../data/projects";
import emojiGame from "../../images/projects/emoji-game.png";
import portfolio from "../../images/projects/portfolio.png";

import "./index.css";

const Projects = () => {
  const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    dots: true,
    autoplay: false,
    navText: false,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      310: {
        items: 1,
      },
      500: {
        items: 1,
      },
      600: {
        items: 1,
      },
      740: {
        items: 2,
      },
      1000: {
        items: 2.7,
      },
      1300: {
        items: 3,
      },
      1440: {
        items: 3,
      },
    },
  };

  const images = {
   emojiGame,
    portfolio,
  };

  return (
    <div className="mywork " id="projects">
      <div className="mywork-title">
        <h2>Check Out all of My Projects</h2>

        <h3>My Work</h3>
      </div>
      <div className="project-row">
        {projectsData?.length && (
          <OwlCarousel className="owl-theme" {...options}>
            {projectsData?.map((details) => (
              <div key={details.id} className="project">
                <div className="project-img">
                  <img
                    src={images[details.about_avatar]}
                    alt=""
                    className="work-img"
                  />
                </div>
                <div className="date-posted">
                  <div className="who-post">
                    <p className="admin">{details.language_used}</p>
                  </div>
                </div>
                <div className="work-details">
                  <h2>{details.Project_title}</h2>
                  <p className="work-info">{details.Project_info}</p>
                  <div className="project-links">
                    <a
                      href={details.demo_link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h6 className="learnmore">
                        <i className="fa fa-laptop" aria-hidden="true"></i>
                        &nbsp; Live Demo
                      </h6>
                    </a>
                    <a
                      href={details.project_link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h6 className="learnmore">
                        <i className="fa fa-github" aria-hidden="true"></i>{" "}
                        &nbsp; Source Code
                      </h6>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </OwlCarousel>
        )}
      </div>
    </div>
  );
};

export default Projects;

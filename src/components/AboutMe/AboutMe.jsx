import decor1 from "../../images/decoration/dots-1.png";
import reactagle from "../../images/decoration/Rectangle-7.png";
import shady from "../../images/decoration/dots.png";
import { aboutMeData } from "../../data/aboutMe";

import "./AboutMe.css";

import Gnanendhra_Resume from "../../pdf/Gnanendhra_Resume.pdf";

const AboutMe = () => {
  const img_300 = "https://drive.google.com/uc?id=";

  return (
    <>
      {aboutMeData &&
        aboutMeData.map((details) => (
          <main id="about" key={details.id}>
            <div className="aboutMe-container">
              <div className="about-decor">
                <div className="about-dots">
                  <img src={decor1} alt="" />
                </div>
                <div className="about-rect">
                  <img src={reactagle} alt="" />
                </div>
                <div className="about-shady">
                  <img src={shady} alt="" />
                </div>
              </div>
              <div className="abouMe-row">
                <div
                  data-aos="fade-up-right"
                  className=" col-lg-6 col-md-5 col-sm-12 about-img order-2 order-lg-1"
                >
                  <img src={`${img_300}${details.about_avatar}`} alt="" />
                </div>
                <div
                  data-aos="fade-up-left"
                  className=" col-lg-6 col-md-7  col-sm-12 about_myinfo order-1 order-lg-2"
                >
                  <div className="title">
                    <h3>{details.title}</h3>
                  </div>
                  <div className="about-description">
                    <div id="foo" unselectable="on" className="unselectable">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: `${details.description_one}`,
                        }}
                      />
                    </div>
                  </div>

                  <div className="itscv">
                    <a
                      href={Gnanendhra_Resume}
                      download="Gnanendhra_Resume"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button className="download-cv">
                        Download CV <i className="bx bx-download"></i>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </main>
        ))}
    </>
  );
};

export default AboutMe;

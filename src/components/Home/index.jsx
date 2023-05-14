import decor3 from "../../images/decoration/Group-31.png";
import { homeDetails } from "../../data/home";
import { homeContactDetails } from "../../data/links";

import profile from "../../images/profile.jpg";

import "./index.css";

const Intro = () => {
  document.title = "Gnanendhra Kosuri - Portfolio";

  return (
    <>
      {homeDetails &&
        homeDetails.map((detail) => (
          <section className=" intro-page" id="home" key={detail.id}>
            <div className="decorations">
              <div className="decor-dot2">
                <img src={decor3} alt="" />
              </div>

              <div className="parcol"></div>
            </div>
            <div className="small-intro">
              <div className="intro-row">
                <div className="col-lg-5  col-md-6 col-sm-12 intro-left order-2 order-lg-1">
                  <div className="intro-name">
                    <h3
                      data-aos="fade-down"
                      className="hello"
                      data-aos-duration="1500"
                    >
                      {detail.job_title}
                    </h3>
                    <h3
                      data-aos="fade-down"
                      className="name"
                      data-aos-duration="1600"
                    >
                      Hey! I Am
                    </h3>
                    <h3
                      data-aos="fade-down"
                      className="job  text-animate"
                      data-aos-duration="1700"
                    >
                      {detail.name}
                    </h3>
                    <p className="myinfo" data-aos-duration="1800">
                      {detail.par_inro}
                    </p>
                  </div>
                  <div
                    data-aos="fade-down"
                    className="intro-btns"
                    data-aos-duration="1900"
                  >
                    <a
                      href={`mailto:${detail.hireMe_link}`}
                      className="contactMe"
                    >
                      <button className="contact-me">
                        Hire me <i className="bx bx-send "></i>
                      </button>
                    </a>
                  </div>
                  <div className="intro-contact" data-aos-duration="1800">
                    <span>Follow Me:</span>
                    <ul>
                      <li>
                        {homeContactDetails &&
                          homeContactDetails.map((data1) => (
                            <a
                              href={data1.link}
                              className="icon-link"
                              target="_blank"
                              rel="noopener noreferrer"
                              key={data1.id}
                            >
                              <i className={data1.social_icon}></i>
                            </a>
                          ))}
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  data-aos="fade-down-left"
                  className="col-lg-7 col-md-6 col-sm-12 left-img order-1 order-lg-2"
                  data-aos-duration="1800"
                >
                  <div className="ff">
                    <img className="intro-img" src={profile} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
    </>
  );
};

export default Intro;

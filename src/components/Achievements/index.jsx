import { achievements } from "../../data/achievements";

import "./index.css";

const Achievements = () => {
  return (
    <>
      <section id="achievements">
        <div className="service-container">
          <div className="service-title">
            <h2>My Achievements so far</h2>
            <h3>Achievements</h3>
          </div>

          <div className="service-row">
            {achievements &&
              achievements.map((service) => (
                <div
                  className=" my-service"
                  key={service.id}
                  data-aos="zoom-in-up"
                  data-aos-duration="1500"
                >
                  <h4 className="web">{service.service_name}</h4>
                  <p className="service-info">{service.service_description}</p>
                  {/* <h6 className="learn-more">{service.learn_more}</h6> */}
                  <div className="shadow-icon">
                    <i className={service.shadow_icon}></i>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Achievements;

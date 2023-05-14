import Main from "./scrollTop";

import "./Footer.css";

const Footer = () => {

  return (
    <>
      <Main />
      <section>
        <div className="my-footer">
          <div className="switch">
            <div className="circle"></div>
          </div>
          <div className="progress-wrap">
            <svg
              className="progress-circle svg-content"
              width="100%"
              height="100%"
              viewBox="-1 -1 102 102"
            >
              <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />

              <p>eee</p>
            </svg>
            <i className="bx bx-chevron-up"></i>
          </div>
          <div className="footer-info">
            <div className="copywrite">
              <p>
                © {new Date().getFullYear()} All rights reserved | Made with ❤️
                by Gnanendhra Kosuri
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;

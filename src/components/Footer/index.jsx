/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const Footer = ({ classText }) => {
  const year = new Date().getFullYear();
  return (
    <footer className={`${classText ? classText : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Contact Us</h5>
              </div>
              <ul>
                <li>
                  <span className="icon pe-7s-map-marker"></span>
                  <div className="cont">
                    <h6>Official Address</h6>
                    <p>Tripura Marg, Tripureshwor, Kathmandu</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-mail"></span>
                  <div className="cont">
                    <h6>Email Us</h6>
                    <a href="mailto:info@bosah.com.np">info@bosah.com.np</a>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-call"></span>
                  <div className="cont">
                    <h6>Call Us</h6>
                    <p><a href="tel:+9779860132869">+977 986-0132869</a></p>
                    <p><a href="tel:+9779818270060">+977 981-8270060</a></p>
                    <p><a href="tel:+9779841711793">+977 984-1711793</a></p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Recent News</h5>
              </div>
              <ul>
                <li>
                  <div className="img">
                    <Link href="/blog-details">
                      <a>
                        <img src="/assets/img/blog/1.webp" alt="" />
                      </a>
                    </Link>
                  </div>

                  <div className="sm-post">
                    <Link href="https://medium.com/@ruchikashakya1/bringing-vaastu-shastra-to-life-realizing-harmony-in-nepalese-interior-design-ffb482fb4906" target="_blank">
                      <a target="_blank">
                        <p>Bringing Vaastu Shastra to Life: Realizing Harmony in Nepalese Interior Design</p>
                      </a>
                    </Link>
                    <span className="date">Ruchika Shakya</span>
                  </div>
                </li>
                <li>
                  <div className="subscribe">
                    <input type="text" placeholder="Type Your Email" />
                    <span className="subs pe-7s-paper-plane"></span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item">
              <div className="logo">
                <img src="/assets/img/logo-light.png" alt="" />
              </div>
              <div className="social">
                <Link href="https://www.facebook.com/bosah.a.design.studio/">
                  <a target="_blank">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </Link>
                <Link href="https://www.instagram.com/bosah.studio"  rel="noopener noreferrer" >
                  <a target="_blank">
                    <i className="fab fa-instagram"></i>
                  </a>
                </Link>
                {/* <Link href="#">
                  <a>
                    <i className="fab fa-youtube"></i>
                  </a>
                </Link> */}
                <Link href="https://www.linkedin.com/company/bosahdesignstudio/" >
                  <a target="_blank">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </Link>
              </div>
              <div className="copy-right">
                <p>
                  © {year}, BOSAH Design Studio Pvt. Ltd
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

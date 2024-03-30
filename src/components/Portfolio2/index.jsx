import React from "react";
import Link from "next/link";
import worksCardEffect from "../../common/worksCardEffect";

const Portfolio2 = () => {
  React.useEffect(() => {
    worksCardEffect();
  }, []);
  return (
    <section className="portfolio full-bg">
      <div className="container-fluid">
        <div className="row">
          <Link href="#">
            <a className="col-lg-3 col-md-6 cluom current" data-tab="tab-1">
              <div className="info">
                <h6 className="custom-font">Interior</h6>
                <h5>Apartment at Naxal</h5>
              </div>
              <div className="more">
                <a>
                  View Project <i className="fas fa-chevron-right"></i>
                </a>
              </div>
            </a>
          </Link>
          <Link href="#">
            <a className="col-lg-3 col-md-6 cluom" data-tab="tab-2">
              <div className="info">
                <h6 className="custom-font">Landscape</h6>
                <h5>Lake View Resort</h5>
              </div>
              <div className="more">
                <a>
                  View Project <i className="fas fa-chevron-right"></i>
                </a>
              </div>
            </a>
          </Link>
          <Link href="#">
            <a className="col-lg-3 col-md-6 cluom" data-tab="tab-3">
              <div className="info">
                <h6 className="custom-font">Commercial</h6>
                <h5>Mahavir International Office</h5>
              </div>
              <div className="more">
                <a>
                  View Project <i className="fas fa-chevron-right"></i>
                </a>
              </div>
            </a>
          </Link>
          <Link href="#">
            <a className="col-lg-3 col-md-6 cluom" data-tab="tab-4">
              <div className="info">
                <h6 className="custom-font">Architecture</h6>
                <h5>Mount Kailish Resort</h5>
              </div>
              <div className="more">
                <a>
                  View Project <i className="fas fa-chevron-right"></i>
                </a>
              </div>
            </a>
          </Link>
        </div>
      </div>
      <div className="glry-img">
        <div
          id="tab-1"
          className="bg-img tab-img current"
          style={{ backgroundImage: `url(/assets/img/portfolio/full/01.jpg)` }}
          data-overlay-dark="2"
        ></div>
        <div
          id="tab-2"
          className="bg-img tab-img"
          style={{ backgroundImage: `url(/assets/img/portfolio/full/02.jpg)` }}
          data-overlay-dark="2"
        ></div>
        <div
          id="tab-3"
          className="bg-img tab-img"
          style={{ backgroundImage: `url(/assets/img/portfolio/full/03.jpg)` }}
          data-overlay-dark="2"
        ></div>
        <div
          id="tab-4"
          className="bg-img tab-img"
          style={{ backgroundImage: `url(/assets/img/portfolio/full/04.jpg)` }}
          data-overlay-dark="2"
        ></div>
      </div>
    </section>
  );
};

export default Portfolio2;

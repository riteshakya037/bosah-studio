/* eslint-disable @next/next/no-img-element */
import React from "react";
import beforeAndAfterSlider from "../../common/beforeAndAfterSlider";

const AfterBefore = ({ bigTitle }) => {
  React.useEffect(() => {
    beforeAndAfterSlider();
  });
  return (
    <section className="after-before section-padding">
      <div
        className="background bg-img parallaxie"
        style={{ backgroundImage: "url(/assets/img/04.jpg)" }}
        data-overlay-dark="7"
      ></div>
      <div className="container ontop">
        <div className="row">
          <div className="col-lg-12">
            <div className="dotsbg wow fadeInUp" data-wow-delay=".3s">
              <div id="before-after-slider" className="wow imago">
                <div className="overlay" />
                <div
                  className="twentytwenty-before-label"
                  data-content="Before"
                ></div>
                <div
                  className="twentytwenty-after-label"
                  data-content="After"
                ></div>
                <div id="before-image">
                  <img src="/assets/img/blueprint/before.jpg" alt="before" />
                </div>
                <div id="after-image">
                  <img src="/assets/img/blueprint/after.jpg" alt="After" />
                </div>
                <div id="resizer" className="twentytwenty-handle">
                  <span className="twentytwenty-left-arrow"></span>
                  <span className="twentytwenty-right-arrow"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AfterBefore;

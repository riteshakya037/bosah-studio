import React from "react";

const Process2 = ({ bigTitle }) => {
  return (
    <section className="process section-padding">
      <div className="container">
        {!bigTitle ? (
          <div className="section-head text-center">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-8 col-sm-10">
                <h6 className="custom-font wow fadeInDown" data-wow-delay=".3s">
                  Processes
                </h6>
                <h4 className="playfont wow flipInX" data-wow-delay=".5s">
                  Our Processes
                </h4>
              </div>
            </div>
          </div>
        ) : (
          <div className="main-header text-center">
            <h3>Our Processes.</h3>
            <div className="tex-bg">Processes</div>
          </div>
        )}

        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="item md-mb50">
              <h4>01</h4>
              <h5>Design Process</h5>
              <p>Nulla metus metus ullamcorper vel tincidunt sed euismod.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="item md-mb50">
              <h4>02</h4>
              <h5>Supervision</h5>
              <p>Nulla metus metus ullamcorper vel tincidunt sed euismod.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="item sm-mb50">
              <h4>03</h4>
              <h5>Budget Planning</h5>
              <p>Nulla metus metus ullamcorper vel tincidunt sed euismod.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="item">
              <h4>04</h4>
              <h5>Build a home for you</h5>
              <p>Nulla metus metus ullamcorper vel tincidunt sed euismod.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process2;

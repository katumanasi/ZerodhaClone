import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row ">
        <h1 className="fs-2 text-center text-muted">People</h1>
        <div
          className="row p-5 text-muted  "
          style={{ lineHeight: "1.8", fontSize: "1.2em" }}
        >
          <div className="col-6 pb-5 text-muted text-center mt-5 ">
            <img
              src="media/images/nithinKamath.jpg"
              style={{ borderRadius: "100%", width: "60%" }}
            />
            <h4 className="mt-4">Nithin Kamath</h4>
            <h6 className="mt-3 fw-light"> Founder, CEO</h6>
          </div>

          <div className="col-6 fs-6 p-5">
            <p>
              Nithin bootstrapped and founded Zerodha in 2010 to overcome the
              hurdles he faced during his decade long stint as a trader. Today,
              Zerodha has changed the landscape of the Indian broking industry.
            </p>
            <p>
              He is a member of the SEBI Secondary Market Advisory Committee
              (SMAC) and the Market Data Advisory Committee (MDAC).
            </p>
            <p>Playing basketball is his zen.</p>
            <p> Connect on <a href="" className="text-decoration-none fw-semibold">Homepage </a> /
             <a href="" className="text-decoration-none fw-semibold"> TradingQnA  </a> /
              <a href="" className="text-decoration-none fw-semibold">Twitter</a>  </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;

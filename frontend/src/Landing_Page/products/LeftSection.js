import React from "react";

function LeftSection({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row p-5">
        <div className="col-6 p-5">
          <img src={imageUrl} style={{ width: "100%" }} />
        </div>
        <div className="col-6 p-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>

          <div>
            <a href={tryDemo} style={{ textDecoration: "none" }}>
              tryDemo <i class="fa-solid fa-arrow-right ms-1 fs-6 "></i>
            </a>
            <a
              href={learnMore}
              style={{ marginLeft: "50px", textDecoration: "none" }}
            >
              learnMore<i class="fa-solid fa-arrow-right ms-2"></i>{" "}
            </a>
          </div>

          <div className="mt-5">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" />
            </a>
            <a href={appStore} style={{ marginLeft: "50px" }}>
              <img src="media/images/appstoreBadge.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;

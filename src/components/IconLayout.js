import React from "react";
import stroller from "../images/stroller.png";

const IconLayout = () => {
  return (
    <div className="icon-layout">
      <div className="secret-title">
        Secret behind your
        <br /> fruit goodness:
      </div>
      <img src={stroller} alt="stroller" />{" "}
      <div className="img-side-text">Direct from form</div>
      <br />
      <br />
      <img src={stroller} alt="stroller" />{" "}
      <div className="img-side-text">Fully traceable</div>
      <br />
      <br />
      <img src={stroller} alt="stroller" />{" "}
      <div className="img-side-text">Direct from form</div>
      <br />
      <br />
    </div>
  );
};

export default IconLayout;

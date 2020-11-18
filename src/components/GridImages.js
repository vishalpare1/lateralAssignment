import React from "react";
import mango from "../images/mango.jpg";

const GridImages = () => {
  return (
    <div className="grid-images">
      <div className="ui grid img-grid">
        <div className="col-md-4">
          <img className="full-img" src={mango} alt="mango" />
        </div>
        <div className="col-md-4">
          <img className="full-img" src={mango} alt="mango" />
        </div>
        <div className="col-md-4">
          <img className="full-img" src={mango} alt="mango" />
        </div>
      </div>
    </div>
  );
};

export default GridImages;

import React from "react";

const ProductDetails = () => {
  return (
    <div className="product-details">
      <div className="stage-title">Harvest Stage</div>
      <div className="ui grid">
        <div className="five wide column">
          <div className="txt-md">Product name</div>
        </div>
        <div className="eleven wide column">
          <div className="txt-sm">Papaya</div>
        </div>
      </div>
      <hr />
      <div className="ui grid">
        <div className="five wide column">
          <div className="txt-md">Product variety</div>
        </div>
        <div className="eleven wide column">
          <div className="txt-sm">Puso Majestey</div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default ProductDetails;

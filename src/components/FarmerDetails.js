import React from "react";
import farmerPhoto from "../images/farmer-photo.jpg";

const FarmerDetails = () => {
  return (
    <div className="farmer-details">
      <h3 className="farmer-details">Farmer details</h3>
      <div className="former-details-wrapper">
        <img className="farmer-photo" src={farmerPhoto} alt="farmer" />
        <div className="farmer-name">Ajay Makhan</div>
        <div className="farmer-address">Ghaziabad, Utter Pradesh</div>
      </div>
    </div>
  );
};

export default FarmerDetails;

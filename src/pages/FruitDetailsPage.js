import React from "react";
import About from "../components/About";
import CollectionCenter from "../components/CollectionCenter";
import FarmerDetails from "../components/FarmerDetails";
import GridImages from "../components/GridImages";
import IconLayout from "../components/IconLayout";
import MapComponent from "../components/MapComponent";
import ProductDetails from "../components/ProductDetails";

const FruitDetailsPage = () => {
  return (
    <div className="fruit-details-page">
      <div className="fruit-details-wrapper">
        <div className="dot-container harvest">
          <div className="dot-color"></div>
          <div className="dot-white"></div>
        </div>
        <ProductDetails />
        <FarmerDetails />
        <MapComponent lat={26.7475266} lng={83.3988902} />
        <div className="dot-container collection">
          <div className="dot-color"></div>
        </div>
        <CollectionCenter />
        <div className="location">Location</div>
        <div className="map-wrapper">
          <MapComponent lat={28.6338497} lng={77.4715118} />
        </div>
        <GridImages />
        <IconLayout />

        <div className="dot-container">
          <div className="dot-color"></div>
          <div className="dot-white"></div>
        </div>
        <div className="delivery-text">
          Delivering with love and care for you to relish
        </div>
      </div>
      <About />
    </div>
  );
};

export default FruitDetailsPage;

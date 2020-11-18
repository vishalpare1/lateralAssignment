import React from "react";
import MiddleImage from "../components/MiddleImage";
import TopImage from "../components/TopImage";
import BottomImage from "../components/BottomImage";
import NutritionChart from "../components/NutritionChart";

const IntroductionPage = () => {
  return (
    <div className="introduction-page">
      <div className="header">
        <div className="logo-circle">LOGO</div>
        <div className="v-divider"></div>
        <div className="page-heading">Healthy Fruits</div>
      </div>
      <TopImage />
      <MiddleImage />
      <BottomImage />
      <NutritionChart />
    </div>
  );
};

export default IntroductionPage;

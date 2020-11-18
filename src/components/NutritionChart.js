import React from "react";

const NutritionChart = () => {
  return (
    <div className="nutrition-chart">
      <div className="nutrition-wrapper">
        <div className="chart-title">Nutrition fact</div>
        <div className="ui grid">
          <div className="eight wide column">
            <div className="txt-md">Serving Size</div>
          </div>
          <div className="eight wide column">
            <div className="txt-md txt-right">100gm</div>
          </div>
        </div>
        <hr className="h-divider-broad" />
        <div className="txt-md">Amount per serving</div>
        <div className="ui grid">
          <div className="eight wide column">
            <div className="txt-lg">Calories</div>
          </div>
          <div className="eight wide column">
            <div className="txt-lg txt-right">89</div>
          </div>
        </div>
        <hr className="h-divider-broad" />
        <div className="ui grid">
          <div className="eight wide column"></div>
          <div className="eight wide column">
            <div className="txt-md txt-right">
              % Daily Value<sup>*</sup>
            </div>
          </div>
        </div>
        <hr />
        <div className="ui grid">
          <div className="eight wide column">
            <div className="txt-md">Total fat 0.3g</div>
          </div>
          <div className="eight wide column">
            <div className="txt-md txt-right">0%</div>
          </div>
        </div>
        <hr />
        <div className="ui grid">
          <div className="eight wide column">
            <div className="txt-sm p-l-10">Saturated fat 0.1g</div>
          </div>
          <div className="eight wide column">
            <div className="txt-sm txt-right">0%</div>
          </div>
        </div>
        <hr />
        <div className="ui grid">
          <div className="eight wide column">
            <div className="txt-md">Sodium 1mg</div>
          </div>
          <div className="eight wide column">
            <div className="txt-md txt-right">0%</div>
          </div>
        </div>
        <hr />
        <div className="ui grid">
          <div className="eight wide column">
            <div className="txt-md">Total Carbohydrates 23gm</div>
          </div>
          <div className="eight wide column">
            <div className="txt-md txt-right">8%</div>
          </div>
        </div>
        <hr />
        <div className="ui grid">
          <div className="eight wide column">
            <div className="txt-sm p-l-10">Dietary fat 2.6g</div>
          </div>
          <div className="eight wide column">
            <div className="txt-sm txt-right">9%</div>
          </div>
        </div>
        <hr />
        <div className="ui grid">
          <div className="eight wide column">
            <div className="txt-sm p-l-10">Sugar 12g</div>
          </div>
        </div>
        <hr />
        <div className="ui grid">
          <div className="eight wide column">
            <div className="txt-md">Protein 1.1gm</div>
          </div>
          <div className="eight wide column">
            <div className="txt-md txt-right">2%</div>
          </div>
        </div>
        <hr className="h-divider-broad" />
        <div className="ui grid">
          <div className="eight wide column">
            <div className="txt-sm">Vitamin D 0.00mcg</div>
          </div>
          <div className="eight wide column">
            <div className="txt-sm txt-right">0%</div>
          </div>
        </div>
        <hr />
        <div className="ui grid">
          <div className="eight wide column">
            <div className="txt-sm">Calcium 5.00mg</div>
          </div>
          <div className="eight wide column">
            <div className="txt-sm txt-right">0%</div>
          </div>
        </div>
        <hr />
        <div className="ui grid">
          <div className="eight wide column">
            <div className="txt-sm">Iron 0.26mg</div>
          </div>
          <div className="eight wide column">
            <div className="txt-sm txt-right">1%</div>
          </div>
        </div>
        <hr />
        <div className="ui grid">
          <div className="eight wide column">
            <div className="txt-sm">Potassium 358mg</div>
          </div>
          <div className="eight wide column">
            <div className="txt-sm txt-right">98%</div>
          </div>
        </div>
        <hr className="h-divider-broad" />
      </div>
    </div>
  );
};

export default NutritionChart;

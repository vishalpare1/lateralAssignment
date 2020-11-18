import React from "react";
import "../css/main.css";
import FruitDetailsPage from "../pages/FruitDetailsPage";

import IntroductionPage from "../pages/IntroductionPage";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="ui container">
          <IntroductionPage />
          <FruitDetailsPage />
        </div>
      </div>
    );
  }
}

export default App;

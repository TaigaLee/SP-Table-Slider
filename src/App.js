import React from "react";
import "./App.css";
import SPContainer from "./SPContainer";

class App extends React.Component {
  render() {
    return (
      <div className="App-div">
        <h2>S&P 500 Total Returns</h2>
        <SPContainer />
      </div>
    );
  }
}

export default App;

import React from "react";
import SPList from "../SPList";
import SPData from "../data/history.json";

class SPTable extends React.Component {
  constructor() {
    super();

    this.state = {
      data: SPData.reverse()
    };
  }

  // put slider here
  // probably have a change data function here for the slider
  // slider thing

  render() {
    return <SPList data={this.state.data} />;
  }
}

export default SPTable;

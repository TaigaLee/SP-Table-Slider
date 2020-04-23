import React from "react";
import SPList from "../SPList";
import SPData from "../data/history.json";

class SPTable extends React.Component {
  constructor() {
    super();

    this.state = {
      data: SPData
    };
  }

  render() {
    return <SPList data={this.state.data} />;
  }
}

export default SPTable;

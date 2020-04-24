import React from "react";
import SPList from "../SPList";
import SPData from "../data/history.json";
import Slider from "rc-slider";
import Tooltip from "rc-tooltip";
import "rc-slider/assets/index.css";
import "./index.css";

class SPTable extends React.Component {
  constructor() {
    super();

    this.state = {
      data: SPData
    };
  }

  // put slider here
  // probably have a change data function here for the slider
  // slider thing

  calculateCumulativeTotal = () => {
    let total = 0;
    this.state.data.map(dataPiece => {
      total += parseFloat(dataPiece.totalReturn);
      dataPiece.cumulativeReturn = total;
    });
    return total;
    console.log(this.state.data);
  };

  handle = props => {
    const Handle = Slider.Handle;
    const { value, dragging, index, ...restProps } = props;
    return (
      <Tooltip
        prefixCls="rc-slider-tooltip"
        overlay={value}
        visible={dragging}
        placement="top"
        key={index}
      >
        <Handle value={value} {...restProps} />
      </Tooltip>
    );
  };

  render() {
    this.calculateCumulativeTotal();
    return (
      <div className="Slider-div">
        <div className="Slider">
          <Slider
            min={this.state.data[this.state.data.length - 1].year}
            max={this.state.data[0].year}
            handle={this.handle}
          />
        </div>
        <div>
          <SPList
            data={this.state.data}
            calculateCumulativeTotal={this.calculateCumulativeTotal}
          />
        </div>
      </div>
    );
  }
}

export default SPTable;

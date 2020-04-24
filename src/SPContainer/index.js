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
      data: SPData,
      sliderValues: [1926, 2019]
    };
  }

  handleChange = sliderValues => {
    this.setState({
      sliderValues
    });
  };

  calculateCumulativeTotal = () => {
    let total = 0;
    this.state.data.map(dataPiece => {
      total += parseFloat(dataPiece.totalReturn);
      dataPiece.cumulativeReturn = total;
    });
    return total;
  };

  render() {
    this.calculateCumulativeTotal();
    const { sliderValues } = this.state;
    const createSliderWithToolTip = Slider.createSliderWithTooltip;
    const Range = createSliderWithToolTip(Slider.Range);
    return (
      <div className="Slider-div">
        <div className="Slider">
          <p>
            Current Years: {this.state.sliderValues[0]} -{" "}
            {this.state.sliderValues[1]}
          </p>
          <Range
            min={1926}
            max={2019}
            defaultValue={sliderValues}
            tipFormatter={value => `${value}`}
            onAfterChange={this.handleChange}
          />
        </div>
        <div>
          <SPList
            data={this.state.data}
            calculateCumulativeTotal={this.calculateCumulativeTotal}
            sliderValues={this.state.sliderValues}
          />
        </div>
      </div>
    );
  }
}

export default SPTable;

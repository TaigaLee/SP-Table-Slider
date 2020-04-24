import React from "react";
import SPList from "../SPList";
import SPData from "../data/history.json";
import Slider from "rc-slider";
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
    this.setState(
      {
        sliderValues: sliderValues
      },
      () => {
        const data = SPData;
        const findIndexLow = Math.abs(2019 - this.state.sliderValues[0]);
        const findIndexHigh = 2019 - this.state.sliderValues[1];
        const newData = data
          .slice(0, findIndexLow + 1)
          .slice(findIndexHigh, 93);

        this.setState(
          {
            data: newData
          },
          () => {
            this.calculateCumulativeTotal();
          }
        );
      }
    );
  };

  calculateCumulativeTotal = () => {
    let total = 0;
    this.state.data
      .slice(0)
      .reverse()
      .map(dataPiece => {
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
          <SPList data={this.state.data} />
        </div>
      </div>
    );
  }
}

export default SPTable;

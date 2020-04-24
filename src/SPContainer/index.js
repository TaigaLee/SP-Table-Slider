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
    this.setState(
      {
        sliderValues: sliderValues
      },
      () => {
        if (this.state.data != 94) {
          const data = this.state.data;
          const findIndexLow = Math.abs(2019 - this.state.sliderValues[0]);
          const findIndexHigh = 2019 - this.state.sliderValues[1];
          console.log(data[findIndexLow]);
          console.log(data[findIndexHigh]);
        } else {
          this.setState({
            data: SPData
          });
        }
      }
    );
  };

  // updateTableData = () => {
  //   if (this.state.data != 94) {
  //     const data = this.state.data;
  //     const findIndexLow = 1926 - this.state.sliderValues[0];
  //     const findIndexHigh = Math.abs(1926 - this.state.sliderValues[1]);
  //     console.log(findIndexHigh);
  //     const finalData = data.slice(findIndexLow, findIndexHigh);
  //     // this.setState({
  //     //   sliderValues: sliderValues
  //     // });
  //     console.log(finalData);
  //   } else {
  //     console.log("reset");
  //   }
  // };

  calculateCumulativeTotal = () => {
    let total = 0;
    this.state.data
      .slice(0)
      .reverse()
      .map(dataPiece => {
        total += parseFloat(dataPiece.totalReturn);
        dataPiece.cumulativeReturn = total;
      });
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
          />
        </div>
      </div>
    );
  }
}

export default SPTable;

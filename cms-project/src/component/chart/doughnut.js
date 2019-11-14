import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";
import data from "../chart/data";

const gender = data.gender;

const doughnut = {
  labels: ["male", "female"],
  datasets: [
    {
      data: gender,
      backgroundColor: ["#36A2EB", "#ff4d4f"],
      hoverBackgroundColor: ["#36A2EB", "#ff4d4f"]
    }
  ]
};

class doughtnut extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="chart-wrapper">
          <Doughnut data={doughnut} />
        </div>
      </div>
    );
  }
}

export default doughtnut;

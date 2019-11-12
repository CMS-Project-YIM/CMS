import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";

const doughnut = {
  labels: ["Red", "Green", "Yellow"],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
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

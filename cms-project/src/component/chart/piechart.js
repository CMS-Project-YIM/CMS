import React, { Component } from "react";
import { Pie } from "react-chartjs-2";

const pie = {
  labels: ["Red", "Blue", "Yellow", "Green", "purple", "Gray"],
  datasets: [
    {
      data: [100, 80, 70, 60, 33, 20],
      backgroundColor: [
        "#FF6384",
        "#36A2EB",
        "#FFCE56",
        "#95de64",
        "#722ed1",
        "#595959"
      ],
      hoverBackgroundColor: [
        "#FF6384",
        "#36A2EB",
        "#FFCE56",
        "#95de64",
        "#722ed1",
        "#595959"
      ]
    }
  ]
};

class piechart extends Component {
  state = {};
  render() {
    return (
      <div>
        <Pie data={pie} />
      </div>
    );
  }
}

export default piechart;

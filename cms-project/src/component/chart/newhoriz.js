import React from "react";
import { HorizontalBar } from "react-chartjs-2";

const bar = {
  labels: ["January", "February", "March", "April"],
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [81, 56, 55, 40, 0]
    },
    {
      label: "My First dataset",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [81, 56, 55, 40, 0]
    }
  ]
};

class newhoriz extends React.Component {
  render() {
    return (
      <div>
        <div className="chart-wrapper">
          <HorizontalBar data={bar} />
        </div>
      </div>
    );
  }
}

export default newhoriz;

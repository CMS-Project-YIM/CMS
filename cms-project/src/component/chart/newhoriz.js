import React from "react";
import { HorizontalBar } from "react-chartjs-2";

const bar = {
  labels: ["catagory1", "catagory2", "catagory3", "catagory4", "catagory5"],
  datasets: [
    {
      label: "female",
      backgroundColor: "#ff4d4f",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      hoverBackgroundColor: "#ff4d4f",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [20, 30, 50, 40, 10, 0]
    },
    {
      label: "male",
      backgroundColor: "#1890ff",
      borderColor: "#1890ff",
      borderWidth: 1,
      hoverBackgroundColor: "#1890ff",
      hoverBorderColor: "#1890ff",
      data: [81, 56, 55, 40, 10, 0]
    }
  ]
};
//
class newhoriz extends React.Component {
  render() {
    return (
      <div>
        <div className="chart-wrapper" style={{ paddingTop: 20 }}>
          <HorizontalBar data={bar} />
        </div>
      </div>
    );
  }
}

export default newhoriz;

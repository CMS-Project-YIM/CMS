import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

const bar = {
  labels: [
    //ชื่อ catagory
    "catagory1",
    "catagory2",
    "catagory3",
    "catagory4",
    "catagory5",
    "catagory6",
    "catagory7"
  ],
  datasets: [
    {
      label: "The number of posts of each catagory",
      backgroundColor: "#ff4d4f",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      hoverBackgroundColor: "#ff4d4f",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [65, 59, 80, 81, 56, 55, 40, 0] //ข้อมูลแสดงผล
    }
  ]
};

export class Chartbar extends Component {
  render() {
    return (
      <div>
        <div className="chart-wrapper">
          <Bar data={bar} />
        </div>
      </div>
    );
  }
}

export default Chartbar;

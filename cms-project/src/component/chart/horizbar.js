import React from "react";
import { HorizontalBar } from "react-chartjs-2";
import Data from "./data.json";

const age = Data.age; //ข้อมูล json มาเก็บในตัวแปร

const bar = {
  labels: age,
  datasets: [
    {
      label: "The age range of the person posting",
      backgroundColor: "#1890ff",
      borderColor: "#1890ff",
      borderWidth: 1,
      hoverBackgroundColor: "#1890ff",
      hoverBorderColor: "#1890ff",
      data: [81, 56, 55, 40, 0] //ข้อมูลแสดงผล
    }
  ]
};
//
class horizbar extends React.Component {
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

export default horizbar;

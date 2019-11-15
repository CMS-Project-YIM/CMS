import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

const getNameCatagory = "http://localhost:9000/catagory/getCatagory";

export class Chartbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameCatagory: []
    };
  }
  componentDidMount() {
    this.getCatagory();
  }
  //
  //getNamecatalog
  getCatagory = () => {
    fetch(getNameCatagory)
      .then(response => response.json(response))
      .then(response => {
        this.setState({
          nameCatagory: [
            response[0].catagorytype,
            response[1].catagorytype,
            response[2].catagorytype,
            response[3].catagorytype
          ]
        });
      });
  };

  showdata = () => {
    const bar = {
      labels: this.state.nameCatagory,
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
    return bar;
  };

  render() {
    return (
      <div>
        <div className="chart-wrapper">
          <Bar data={this.showdata} />
        </div>
      </div>
    );
  }
}

export default Chartbar;

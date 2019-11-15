import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";
//import data from "../chart/data";
//import axios from "axios";

const getGender = "http://localhost:9000/gender/getgender";
const getUser = "http://localhost:9000/users/getUser";

class doughtnut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameGender: [],
      countMan: 0,
      countGirl: 0
    };
  }

  // componentDidMount() {
  //   axios.get(getnamegender).then(res => {
  //     this.setState({ data: [res.data[0].gender, res.data[1].gender] });
  //   });
  // }
  //
  componentDidMount() {
    this.getNameGender();
    this.getUser();
  }

  //จำนวน user แต่ละเพศ
  getUser = () => {
    fetch(getUser)
      .then(response => response.json(response))

      .then(response => {
        for (let i = 0; i < Object.keys(response).length; i++) {
          if (response[i].genderId == 1) {
            let i = this.state.countMan;
            i++;
            this.setState({ countMan: i });
          } else {
            let i = this.state.countGirl;
            i++;
            this.setState({ countGirl: i });
          }
        }
      });
  };

  //ชื่อเพศ
  getNameGender = () => {
    fetch(getGender)
      .then(response => response.json(response))
      .then(response => {
        this.setState({ nameGender: [response[0].gender, response[1].gender] });
      });
  };

  //โชว์ข้อมูล
  showData = () => {
    const doughnut = {
      labels: this.state.nameGender,
      datasets: [
        {
          data: [this.state.countMan, this.state.countGirl],
          backgroundColor: ["#36A2EB", "#ff4d4f"],
          hoverBackgroundColor: ["#36A2EB", "#ff4d4f"]
        }
      ]
    };
    return doughnut;
  };

  render() {
    return (
      <div>
        <div className="chart-wrapper">
          <Doughnut data={this.showData} />
        </div>
      </div>
    );
  }
}

export default doughtnut;

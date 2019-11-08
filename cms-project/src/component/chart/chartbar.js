import React, { Component } from "react";
import { CustomTooltips } from "@coreui/coreui-plugin-chartjs-custom-tooltips";
import { Bar } from "react-chartjs-2";
import { Card, CardHeader, CardBody, CardColumns } from "reactstrap";

const bar = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

const options = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false
};
export class Chartbar extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <div className="chart-wrapper">
          <CardColumns className="cols-2">
            <Card>
              <CardHeader>
                <CardBody>
                  <Bar data={bar} options={options} />
                </CardBody>
              </CardHeader>
            </Card>
          </CardColumns>
        </div>
      </div>
    );
  }
}

export default Chartbar;

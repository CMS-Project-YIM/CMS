import React from "react";
import { CustomTooltips } from "@coreui/coreui-plugin-chartjs-custom-tooltips";
import { Line } from "react-chartjs-2";
import { Card, CardHeader, CardBody, CardColumns } from "reactstrap";

const line = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(1,1,1,1.1)",
      borderColor: "rgba(1,1,192,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
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

class Chartline extends React.Component {
  render() {
    return (
      <div className="animated fadeIn">
        <div className="chart-wrapper">
          <CardColumns className="cols-2">
            <Card>
              <CardHeader>
                <CardBody>
                  <Line data={line} options={options} />
                </CardBody>
              </CardHeader>
            </Card>
          </CardColumns>
        </div>
      </div>
    );
  }
}

export default Chartline;

import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import Tablebar from "./tablebar";
import Chartbar from "./chartbar";
import Horizbar from "./horizbar";
import Doughnut from "./doughnut";
import Piechart from "./piechart";
import NewHoriz from "./newhoriz";
import { Card, CardBody, CardHeader } from "reactstrap";
import { Row, Col } from "antd";
import { CustomTooltips } from "@coreui/coreui-plugin-chartjs-custom-tooltips";

// Card Chart 1 Data
const cardChartData1 = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgba(255,255,255,.2)",
      borderColor: "rgba(255,255,255,.55)",
      data: [65, 59, 84, 84, 51, 55, 40]
    }
  ]
};
const cardChartOpts1 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [
      {
        display: false
        /*gridLines: {
          color: "transparent",
          zeroLineColor: "transparent"
        },
        ticks: {
          fontSize: 2,
          fontColor: "transparent"
        }*/
      }
    ],
    yAxes: [
      {
        display: false
        /* ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData1.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData1.datasets[0].data) + 5
        }*/
      }
    ]
  },
  elements: {
    line: {
      // tension: 0.00001,
      borderWidth: 2
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4
    }
  }
};

// Card Chart 2 Data
const cardChartData2 = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgba(255,255,255,.2)",
      borderColor: "rgba(255,255,255,.55)",
      data: [1, 18, 9, 17, 34, 22, 11]
    }
  ]
};

const cardChartOpts2 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [
      {
        display: false /*
        gridLines: {
          color: "transparent",
          zeroLineColor: "transparent"
        },
        ticks: {
          fontSize: 2,
          fontColor: "transparent"
        }*/
      }
    ],
    yAxes: [
      {
        display: false
        /*ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData2.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData2.datasets[0].data) + 5
        }*/
      }
    ]
  },
  elements: {
    line: {
      //tension: 0.00001,
      borderWidth: 2
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4
    }
  }
};

// Card Chart 3 Data
const cardChartData3 = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgba(255,255,255,.2)",
      borderColor: "rgba(255,255,255,.55)",
      data: [78, 81, 80, 45, 34, 12, 40]
    }
  ]
};

const cardChartOpts3 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [
      {
        display: false
      }
    ],
    yAxes: [
      {
        display: false
      }
    ]
  },
  elements: {
    line: {
      borderWidth: 2
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4
    }
  }
};

// Card Chart 4 Data
const cardChartData4 = {
  labels: ["", "", "", "", "", "", "", "", "", "", ""],
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgba(255,255,255,.2)",
      borderColor: "rgba(255,255,255,.55)",
      data: [78, 81, 80, 50, 60, 70, 60, 75, 80, 89, 32]
    }
  ]
};

const cardChartOpts4 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [
      {
        display: false
      }
    ],
    yAxes: [
      {
        display: false
      }
    ]
  },
  elements: {
    line: {
      borderWidth: 2
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4
    }
  }
};

// Main Chart

//Random Numbers
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var elements = 27;
var data1 = [];
var data2 = [];
var data3 = [];

for (var i = 0; i <= elements; i++) {
  data1.push(random(50, 200));
  data2.push(random(80, 100));
  data3.push(65);
}

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="animated fadeIn">
        <div
          class="row"
          style={{ paddingLeft: 20, paddingTop: 15, paddingRight: 470 }}
        >
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <Chartbar />
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <Horizbar />
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <Piechart />
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <Doughnut />
              </div>
            </div>
          </div>
        </div>

        <Col style={{ paddingLeft: 20, paddingRight: 470 }}>
          <Card>
            <CardHeader>DATA</CardHeader>
            <CardBody>
              <Row>
                <Col>
                  <Row>
                    <Col span={6} style={{ padding: "0px 15px" }}>
                      <Card className="text-white bg-primary">
                        <CardBody className="pb-0">
                          <div className="text-value">1</div>
                          <div>user</div>
                        </CardBody>
                        <div
                          className="chart-wrapper mx-3"
                          style={{ height: "70px" }}
                        >
                          <Line
                            data={cardChartData1}
                            options={cardChartOpts1}
                            height={70}
                          />
                        </div>
                      </Card>
                    </Col>

                    <Col span={6} style={{ padding: "0px 15px" }}>
                      <Card className="text-white bg-primary">
                        <CardBody className="pb-0">
                          <div className="text-value">2</div>
                          <div>Post</div>
                        </CardBody>
                        <div
                          className="chart-wrapper mx-3"
                          style={{ height: "70px" }}
                        >
                          <Line
                            data={cardChartData2}
                            options={cardChartOpts2}
                            height={70}
                          />
                        </div>
                      </Card>
                    </Col>

                    <Col span={6} style={{ padding: "0px 15px" }}>
                      <Card className="text-white bg-warning">
                        <CardBody className="pb-0">
                          <div className="text-value">3</div>
                          <div>Comment</div>
                        </CardBody>
                        <div
                          className="chart-wrapper mx-3"
                          style={{ height: "70px" }}
                        >
                          <Line
                            data={cardChartData3}
                            options={cardChartOpts3}
                            height={70}
                          />
                        </div>
                      </Card>
                    </Col>

                    <Col span={6} style={{ padding: "0px 15px" }}>
                      <Card className="text-white bg-danger">
                        <CardBody className="pb-0">
                          <div className="text-value">4</div>
                          <div>Register</div>
                        </CardBody>
                        <div
                          className="chart-wrapper mx-3"
                          style={{ height: "70px" }}
                        >
                          <Line
                            data={cardChartData4}
                            options={cardChartOpts4}
                            height={70}
                          />
                        </div>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <NewHoriz />
              <Tablebar />
            </CardBody>
          </Card>
        </Col>
      </div>
    );
  }
}

export default Dashboard;

import React, { Component } from "react";
<<<<<<< HEAD
import { Line } from "react-chartjs-2";
import Tablebar from "./tablebar";
import Chartbar from "./chartbar";
import Chartline from "./chartline";
import Doughnut from "./doughnut";
import Piechart from "./piechart";
import { Badge, Card, CardBody, CardHeader, Progress } from "reactstrap";
import { Row, Col } from "antd";
import { CustomTooltips } from "@coreui/coreui-plugin-chartjs-custom-tooltips";
import { getStyle } from "@coreui/coreui/dist/js/coreui-utilities";
=======
import "./style.css";
import { Layout, Menu, Button, Icon } from "antd";
import Chart from "./dashborad";
>>>>>>> e690d3e0e66cd35509b94cc6aecbfea451b4c851

const { SubMenu } = Menu;
const { Sider } = Layout;

class Chartindex extends Component {
  render() {
    return (
<<<<<<< HEAD
      <div className="animated fadeIn">
        <div
          class="row"
          style={{ paddingLeft: 15, paddingTop: 15, paddingRight: 15 }}
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
                <Chartline />
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
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <Piechart />
              </div>
            </div>
          </div>
        </div>

        <Col>
          <div style={{ paddingLeft: 15, paddingRight: 15 }}>
            <Card>
              <CardHeader>DATA</CardHeader>
              <CardBody>
                <Row>
                  <Col xs="12" md="10" xl="10">
                    <Row>
                      <Col span={6}>
                        <Card className="text-white bg-info">
                          <CardBody className="pb-0">
                            <div className="text-value">1</div>
                            <div>User</div>
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

                      <Col span={6} style={{ paddingLeft: 15 }}>
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

                      <Col span={6} style={{ paddingLeft: 15 }}>
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

                      <Col span={6} style={{ paddingLeft: 15 }}>
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

                    <hr className="mt-0" />
                    <div className="progress-group mb-4">
                      <div className="progress-group-prepend">
                        <span className="progress-group-text">Monday</span>
                      </div>
                      <div className="progress-group-bars">
                        <Progress
                          className="progress-xs"
                          color="danger"
                          value="34"
                        />
                        <Progress
                          className="progress-xs"
                          color="info"
                          value="78"
                        />
                      </div>
                    </div>
                    <div className="progress-group mb-4">
                      <div className="progress-group-prepend">
                        <span className="progress-group-text">Tuesday</span>
                      </div>
                      <div className="progress-group-bars">
                        <Progress
                          className="progress-xs"
                          color="danger"
                          value="56"
                        />
                        <Progress
                          className="progress-xs"
                          color="info"
                          value="94"
                        />
                      </div>
                    </div>
                    <div className="progress-group mb-4">
                      <div className="progress-group-prepend">
                        <span className="progress-group-text">Wednesday</span>
                      </div>
                      <div className="progress-group-bars">
                        <Progress
                          className="progress-xs"
                          color="danger"
                          value="12"
                        />
                        <Progress
                          className="progress-xs"
                          color="info"
                          value="67"
                        />
                      </div>
                    </div>
                    <div className="progress-group mb-4">
                      <div className="progress-group-prepend">
                        <span className="progress-group-text">Thursday</span>
                      </div>
                      <div className="progress-group-bars">
                        <Progress
                          className="progress-xs"
                          color="danger"
                          value="43"
                        />
                        <Progress
                          className="progress-xs"
                          color="info"
                          value="91"
                        />
                      </div>
                    </div>
                    <div className="progress-group mb-4">
                      <div className="progress-group-prepend">
                        <span className="progress-group-text">Friday</span>
                      </div>
                      <div className="progress-group-bars">
                        <Progress
                          className="progress-xs"
                          color="danger"
                          value="22"
                        />
                        <Progress
                          className="progress-xs"
                          color="info"
                          value="73"
                        />
                      </div>
                    </div>
                    <div className="progress-group mb-4">
                      <div className="progress-group-prepend">
                        <span className="progress-group-text">Saturday</span>
                      </div>
                      <div className="progress-group-bars">
                        <Progress
                          className="progress-xs"
                          color="danger"
                          value="53"
                        />
                        <Progress
                          className="progress-xs"
                          color="info"
                          value="82"
                        />
                      </div>
                    </div>
                    <div className="progress-group mb-4">
                      <div className="progress-group-prepend">
                        <span className="progress-group-text">Sunday</span>
                      </div>
                      <div className="progress-group-bars">
                        <Progress
                          className="progress-xs"
                          color="danger"
                          value="9"
                        />
                        <Progress
                          className="progress-xs"
                          color="info"
                          value="69"
                        />
                      </div>
                    </div>
                    <div className="legend text-center">
                      <small>
                        <sup className="px-1">
                          <Badge pill color="danger">
                            &nbsp;
                          </Badge>
                        </sup>
                        last week &nbsp;
                        <sup className="px-1">
                          <Badge pill color="info">
                            &nbsp;
                          </Badge>
                        </sup>
                        Current week
                      </small>
                    </div>
                  </Col>
                </Row>
                <br />
              </CardBody>
            </Card>
          </div>
          <div style={{ paddingLeft: 15, paddingRight: 15 }}>
            <Tablebar />
          </div>
        </Col>
      </div>
=======
      <Layout>
        <div className="header">
          <h2 className="textheader">CMS-Project</h2>
          <Button type="link" className="textheader2" a href="/login">
            Logout
          </Button>

          <h2 className="textheader2">Username</h2>
        </div>

        <Layout className="slidebar">
          <Sider width={200}>
            <Menu
              className="sider"
              theme="black" //สีเวลาชี้
              mode="inline" //ตัวเลือกจะโผล่ทางไหน
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%", borderRight: 0 }}
            >
              <SubMenu
                className="submenu"
                key="sub1"
                title={
                  <span>
                    <Icon type="user" /> User
                  </span>
                }
              >
                <Menu.Item className="optionmenu" key="1">
                  option1
                </Menu.Item>
                <Menu.Item className="optionmenu" key="2">
                  option2
                </Menu.Item>
              </SubMenu>

              <SubMenu
                className="submenu"
                key="sub2"
                title={
                  <span>
                    <Icon type="laptop" /> Admin
                  </span>
                }
              >
                <Menu.Item className="optionmenu" key="5">
                  option5
                </Menu.Item>

                <Menu.Item className="optionmenu" key="6">
                  Dashborad
                </Menu.Item>
              </SubMenu>

              <SubMenu
                className="submenu"
                key="sub3"
                title={
                  <span>
                    <Icon type="notification" />
                    Editer
                  </span>
                }
              >
                <Menu.Item className="optionmenu" key="9">
                  option9
                </Menu.Item>
                <Menu.Item className="optionmenu" key="10">
                  option10
                </Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>

          <Layout>
            <div className="allSide">
              <Chart />
            </div>
          </Layout>
        </Layout>
      </Layout>
>>>>>>> e690d3e0e66cd35509b94cc6aecbfea451b4c851
    );
  }
}

export default Chartindex;

import React, { PropTypes, Component } from "react";
import "./style.css";
import { Layout, Menu, Button, Icon } from "antd";
//import Chart from "../chart/";
import { Link } from "react-router";

const { SubMenu } = Menu;
const { Sider, Content } = Layout;

class navbar extends Component {
  render() {
    return (
      <Layout>
        <div className="header">
          <h2 className="textheader">CMS-Project</h2>
          <Button type="link" className="textheader2" a href="/login">
            Logout
          </Button>
          <h2 className="textheader2">Username</h2>
        </div>
        <Layout className="sildebar">
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
                  <Link to="/chart"> Dashborad</Link>
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
          <Content>
            <div className="allSide">
              <h1>1</h1>
              <h1>2</h1>
              <h1>3</h1>
              <h1>4</h1>
              <h1>5</h1>
              <h1>6</h1>
              <h1>7</h1>
              <h1>8</h1>
              <h1>9</h1>
              <h1>10</h1>
              <h1>11</h1>
              <h1>12</h1>
              <h1>13</h1>
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default navbar;

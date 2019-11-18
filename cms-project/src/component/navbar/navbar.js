import React, { PropTypes, Component } from "react";
import "./style.css";
import { Layout, Menu, Button, Icon, } from "antd";
import { Link } from "react-router";
import auth from '../../firebase/config'

import currentUser from '../../firebase/config'
import firebase from 'firebase'

require('firebase/auth')


const { SubMenu } = Menu;
const { Header, Sider, Content } = Layout;

class navbar extends Component {
  constructor(props){
  super(props)
  
  }


  singout = e => {
    firebase.auth().signOut();
    window.location.replace("/loginform")
    localStorage.clear();
  };
  showname = e =>{
    firebase.auth().currentUser.displayName()
  }

  render() {
    console.log(firebase.auth());
    return (
      <Layout>
        <Header className = "header">
          <h2 className="textheader">CMS-Project</h2>
          <Button type = "link" className="buttonlogout" onClick={this.singout}>
            Logout
          </Button>
   
          <div className = "cardpicture">
          <img className="propicture"
              alt="profile picture"
              src={localStorage.getItem('img')}
            />
          </div>
            <div>
          <h2 className="textheader2" >{localStorage.getItem('name')}</h2>
          </div>
          <div className ="buttonEditer">
            <Button type = "primary" >ขอสิทธิ์ Editer</Button>
          </div>
           
        
        </Header>
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
                   <Icon type="user" />User 
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
             page
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default navbar;

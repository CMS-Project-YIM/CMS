import React, { PropTypes, Component } from 'react';
import './style.css';
// import 'antd/dist/antd.css';
import { Layout, Menu, Button, Icon } from 'antd';
import Login from '../login/login';
import Chartbar from '../chart/chartbar';
import Chartline from '../chart/chartline';



const { SubMenu } = Menu;
const {  Sider } = Layout;

class navbar extends Component {
    render() {
        return (
            <Layout>

                <div className="header">
                    <h2 className="textheader">welcome to react</h2>
                    <Button type="link" className="textheader2" a href ="/login">Logout</Button>
                   
                </div>


                {/* <div className="logo" />
        <Menu ClassName = "topMenu"
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
         <Menu.Item >welcome to react</Menu.Item>
          <Menu.Item key="1" ClassName = "text" ClassName = "text">login</Menu.Item>
        </Menu> */}
            
                <Layout className="sidebar">
                    <Sider width={200} className ="sider">
                        <Menu 
                            theme="black"       //สีเวลาชี้
                            mode="inline"     //ตัวเลือกจะโผล่ทางไหน
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%', borderRight: 0 }}
                        >
                            <SubMenu
                                key="sub1"
                                title={
                                    <span>
                                        <Icon type="user" />
                                        User
                                    </span>
                                }
                            >
                                <Menu.Item key="1">option1</Menu.Item>
                                <Menu.Item key="2">option2</Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub2"
                                title={
                                    <span>
                                        <Icon type="laptop" />
                                        Admin
                                    </span>
                                }
                            >
                                <Menu.Item key="5">option5</Menu.Item>
                                <Menu.Item key="6">option6</Menu.Item>

                            </SubMenu>
                            <SubMenu
                                key="sub3"
                                title={
                                    <span>
                                        <Icon type="notification" />
                                        Editer
                                    </span>
                                }
                            >
                                <Menu.Item key="9">option9</Menu.Item>
                                <Menu.Item key="10">option10</Menu.Item>

                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout >
                        <div className="allSide">
                            
                                <Chartline />
                            
                        </div>
                        {/* <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              background: '#fff',
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            Content
          </Content> */}
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}

export default navbar;
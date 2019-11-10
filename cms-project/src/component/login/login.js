import React, { PropTypes, Component } from 'react';
import './style.css';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

// import { Layout, Menu, Breadcrumb, Icon } from 'antd';
// import Login from 'ant-design-pro/lib/Login';
// import { Alert, Checkbox } from 'antd';

// const { Tab, UserName, Password, Mobile, Captcha, Submit } = Login;

class login extends Component {

    render() {
        return (
          <div className = "card">
              <div>
                  <div>Email</div>
                  <input id="email" placeholder="Enter Email.." type="text"/>
              </div>
              <div>
                  <div>Password</div>
                  <input id="password" placeholder="Enter Password.." type="text"/>
              </div>
             <button className = "buttonlogin" onClick={this.login}>Login</button>
             <button clssname = "buttonsingup"onClick={this.signup}>Sign up</button>
          </div>
        )
        }
    }
    
    export default login;
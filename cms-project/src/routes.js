import React from "react";
import { Router, Route } from "react-router";
import App from "./component/app";
import Chartbar from "./component/chart";
import Chartline from "./component/chart";
import Chart from "./component/chart";
import Message from "./component/message/index";
import Navbar from "./component/navbar/navbar";
import Login from "./component/login/login";
import PostForm from "./component/PostForm";
import Usermanage from "./component/usersmanage";
const Routes = props => (
  <Router {...props}>
    <Route path="/" component={App} />
    <Route path="/chart" component={Chart} />
    <Route path="/chartbar" component={Chartbar} />
    <Route path="/chartline" component={Chartline} />
    <Route path="/message" component={Message} />
    <Route path="/navbar" component={Navbar} />
    <Route path="/login" component={Login} />
    <Route path="/usermanage" component={Usermanage} />
    <Route path="/PostForm" component={PostForm} />

  </Router>
);

export default Routes;

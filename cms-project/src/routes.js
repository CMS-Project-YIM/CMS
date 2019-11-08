import React from 'react';
import { Router, Route } from 'react-router';
import App from './component/app';
import Chartbar from './component/chart'
import Chartline from './component/chart'
import Chart from './component/chart'


const Routes = (props) => (
    <Router {...props}>
        <Route path="/" component={App} />
        <Route path="/chart" component={Chart} />
        <Route path="/chartbar" component={Chartbar} />
        <Route path="/chartline" component={Chartline} />
    </Router>
);

export default Routes;
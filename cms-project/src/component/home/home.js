import React, { PropTypes, Component } from 'react';
import './style.css';
import 'antd/dist/antd.css';
import { Button, Layout } from 'antd';
import Chartline from '../chart/chartline';

const { Content, Header } = Layout;

class home extends Component {

    render() {
        return (

            <Layout>
                <div className="header">
                    <h2 className="textheader">welcome to react</h2>
                    <Button type="link" className="textheader2" a href="/login">Login</Button>
                    <h2 className="textheader2">home</h2>
                </div>
                <div className="bodyback">
                    <div>
                        
                    </div>
                   
                </div>
            </Layout>

        )
    }
}

export default home;
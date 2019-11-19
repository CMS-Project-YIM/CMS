import React, { Component } from "react";
import './index.css'
import {Table, Tag, Button, } from 'antd';
import { Card, CardBody, CardHeader } from "reactstrap";


class Usermanage extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    };
    handleView = (id) => {
        window.location.replace("/viewuser/"+id);
    };
    columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'UserName',
            dataIndex: 'username',
            key: 'username',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Type',
            key: 'types',
            render: (record) => {
                let colors = record.types === 'editor' ? 'geekblue' : 'green';
                if (record.types === 'admin') {
                    colors = 'red';
                }
                return (
                    <span>
                     <Tag color={colors}>{record.types}</Tag>
                </span>
                )
            },
        },
        {
            title: 'Action',
            key: 'id',
            dataIndex: 'id',
            render: (record) => (
                <span>
                      <Button  onClick={e => this.handleView(record)} type="primary" >
                         View Profile
                     </Button>
            </span>
            ),
        },
    ];

    componentDidMount(){
        this.getuser();
    };
    getuser = () =>{
        fetch('http://localhost:9000/users/getUser')
            .then(response => response.json())
            .then((response) => {
                const dataApi = response;
                this.setState({dataApi});
                console.log(dataApi);
            });
    };
    render() {
        return(
            <div>
                <Card>
                    <CardHeader>Users</CardHeader>
                    <CardBody>
                        <Table columns={this.columns} dataSource={this.state.dataApi}>
                        </Table>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default Usermanage
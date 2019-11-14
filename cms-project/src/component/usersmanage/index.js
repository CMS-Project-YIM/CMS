import React from 'react'
import './index.css'
import {Table,Divider,Tag,Button} from 'antd';


class Usermanage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
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
            key: 'action',
            render: () => (
                <span>
                     <Button type="primary" >
                         View Profile
                     </Button>
                    <Divider type="vertical" />
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
                <Table columns={this.columns} dataSource={this.state.dataApi}>
                </Table>
            </div>

        )
    }
}

export default Usermanage
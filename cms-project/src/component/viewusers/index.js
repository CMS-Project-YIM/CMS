import React from 'react';
import './index.css';
import { List, Avatar , Button,Row,Col,Form} from 'antd';
import { Spin } from 'antd';
import { Typography } from 'antd';

const { Text } = Typography;

class ViewUser extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            collapsed: false,
            size: 'large',
            showComment: false,
            dataId: [],
        };
        this.onShowComment = this.onShowComment.bind(this)
    }
    onShowComment = e => {
        const idName = "comment-list" + e;
        var showComments = this.state.showComment;
        showComments = !showComments;
        this.setState({ showComment : !this.state.showComment });
        if(showComments) {
            document.getElementById('SpinPanel').style.display = "block";
            const stateComment = setTimeout(() => {
                document.getElementById('SpinPanel').style.display = "none";
                document.getElementById(idName).style.display = "block";
            }, 1000);
        }
        else {
            document.getElementById(idName).style.display = "none";
        }
        this.setState({ showComment : showComments})
    };

    componentDidMount = () =>{
        this.getPost();
    };
    getPost = () =>{
        fetch('http://localhost:9000/post/getPost/'+ this.props.params.id)
            .then(response => response.json())
            .then((response) => {
                const PostApi = response;
                this.setState({PostApi});
                const Profile = PostApi[0];
                this.setState({Profile});
                console.log(PostApi);
            });
    };

    render() {
        const { size } = this.state;
        if(this.state.Profile != null){
            this.state.name = this.state.Profile.name;
            this.state.username = this.state.Profile.username;
            this.state.email = this.state.Profile.email;
            this.state.genderId = this.state.Profile.genderId;
            this.state.usertypeId = this.state.Profile.usertypeId;
        }

        return(
            <div className="MainContentContainer">
                <Row gutter={40}>
                    <Col span={12}>
                        <List
                            itemLayout="vertical"
                            size="large"
                            pagination={{
                                onChange: page => {
                                    console.log(page);
                                },
                                pageSize: 3,
                            }}
                            dataSource={this.state.PostApi}
                            footer={
                                <div>
                                    <Spin tip="Loading..." className="SpinPanel" id="SpinPanel"/>
                                </div>
                            }

                            renderItem={item => (
                                <List.Item
                                    key={item.title}
                                    className="BoxCommentPanel"
                                >
                                    <List.Item.Meta
                                        avatar={<Avatar src={item.imgurl} />}
                                        title={item.title}
                                        description={item.description}
                                    />
                                    {item.content}
                                </List.Item>
                            )}
                        />
                    </Col>
                    <Col span={12} className="BoxCommentPanel">
                       <div className="Profile">
                           <div className="ProfileAvatar">
                               <Avatar size={200} icon="user" />
                           </div>
                           <div>
                               <Form className="ProfileText" labelCol={{ span: 6 }} wrapperCol={{ span: 1 }}>
                                   <Text strong >Name :  </Text>
                                   <Text strong>{this.state.name}</Text>
                                   <br/>
                                   <br/>
                                   <Text strong>UserName :  </Text>
                                   <Text strong>{this.state.username}</Text>
                                   <br/>
                                   <br/>
                                   <Text strong>Emil :  </Text>
                                   <Text strong>{this.state.email}</Text>
                                   <br/>
                                   <br/>
                                   <Text strong>Gender :  </Text>
                                   <Text strong>{this.state.genderId}</Text>
                                   <br/>
                                   <br/>
                                   <Text strong>Type :  </Text>
                                   <Text strong>{ this.state.usertypeId}</Text>
                               </Form>
                           </div>
                       </div>
                    </Col>
                </Row>

            </div>
        )
    }
}

export default ViewUser
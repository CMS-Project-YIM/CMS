import React from 'react'
import './index.css'
import { List, Avatar, Icon , Comment, Tooltip, Layout, Menu, Breadcrumb, Button, Collapse, Skeleton} from 'antd';
import moment from 'moment';
import { Spin } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const listData = [];

for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'http://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    comment:  [
        {
            actions: [<span key="comment-list-reply-to-0">Reply to</span>],
            author: 'Han Solo',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            content: (
                <p>
                    We supply a series of design principles, practical patterns and high quality design
                    resources (Sketch and Axure), to help people create their product prototypes beautifully and
                    efficiently.
                </p>
            ),
            datetime: (
                <Tooltip
                    title={moment()
                        .subtract(1, 'days')
                        .format('YYYY-MM-DD HH:mm:ss')}
                >
          <span>
            {moment()
                .subtract(1, 'days')
                .fromNow()}
          </span>
                </Tooltip>
            ),
        },
        {
            actions: [<span key="comment-list-reply-to-0">Reply to</span>],
            author: 'Han Solo',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            content: (
                <p>
                    We supply a series of design principles, practical patterns and high quality design
                    resources (Sketch and Axure), to help people create their product prototypes beautifully and
                    efficiently.
                </p>
            ),
            datetime: (
                <Tooltip
                    title={moment()
                        .subtract(2, 'days')
                        .format('YYYY-MM-DD HH:mm:ss')}
                >
          <span>
            {moment()
                .subtract(2, 'days')
                .fromNow()}
          </span>
                </Tooltip>
            ),
        },
    ]
  });
}

const data = [
    {
        href: 'http://ant.design',
        title: `ant design part 1`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description:
            'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content:
            'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
        comment:  [
            {
                actions: [<span key="comment-list-reply-to-0">Reply to</span>],
                author: 'Han Solo',
                avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                content: (
                    <p>
                        We supply a series of design principles, practical patterns and high quality design
                        resources (Sketch and Axure), to help people create their product prototypes beautifully and
                        efficiently.
                    </p>
                ),
                datetime: (
                    <Tooltip
                        title={moment()
                            .subtract(1, 'days')
                            .format('YYYY-MM-DD HH:mm:ss')}
                    >
          <span>
            {moment()
                .subtract(1, 'days')
                .fromNow()}
          </span>
                    </Tooltip>
                ),
            },
            {
                actions: [<span key="comment-list-reply-to-0">Reply to</span>],
                author: 'Han Solo',
                avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                content: (
                    <p>
                        We supply a series of design principles, practical patterns and high quality design
                        resources (Sketch and Axure), to help people create their product prototypes beautifully and
                        efficiently.
                    </p>
                ),
                datetime: (
                    <Tooltip
                        title={moment()
                            .subtract(2, 'days')
                            .format('YYYY-MM-DD HH:mm:ss')}
                    >
          <span>
            {moment()
                .subtract(2, 'days')
                .fromNow()}
          </span>
                    </Tooltip>
                ),
            },
        ]
    },
    {
        href: 'http://ant.design',
        title: `ant design part 2`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description:
            'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content:
            'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
        comment:  [
            {
                actions: [<span key="comment-list-reply-to-0">Reply to</span>],
                author: 'Han Solo',
                avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                content: (
                    <p>
                        We supply a series of design principles, practical patterns and high quality design
                        resources (Sketch and Axure), to help people create their product prototypes beautifully and
                        efficiently.
                    </p>
                ),
                datetime: (
                    <Tooltip
                        title={moment()
                            .subtract(1, 'days')
                            .format('YYYY-MM-DD HH:mm:ss')}
                    >
          <span>
            {moment()
                .subtract(1, 'days')
                .fromNow()}
          </span>
                    </Tooltip>
                ),
            },
        ]
    }
  ];

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

class Message extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            collapsed: false,
            size: 'large',
            showComment: false,
            dataId: [],
        };
        this.onShowComment = this.onShowComment.bind(this)
    }
    handleSizeChange = e => {
        this.setState({ size: e.target.value });
    };
    onShowComment = e => {
        console.log(e)
        const idName = "comment-list" + e;
        var showComments = this.state.showComment
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
    }

    componentDidMount(){
        clearInterval(this.stateComment);
    }

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
        if(collapsed) document.getElementById('ContentContainer').style.marginLeft = '80px';
        else document.getElementById('ContentContainer').style.marginLeft = '200px';
    };
    render() {
        const { size } = this.state;
        return(
            <Layout style={{ minHeight: '100vh' }} className="layoutContainer">
                <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse} className="SiderContainer">
                    <div className="logo" />
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1">
                            <Icon type="pie-chart" />
                            <span>Option 1</span>
                            </Menu.Item>
                            <Menu.Item key="2">
                            <Icon type="desktop" />
                            <span>Option 2</span>
                            </Menu.Item>
                            <SubMenu
                            key="sub1"
                            title={
                                <span>
                                <Icon type="user" />
                                <span>User</span>
                                </span>
                            }
                            >
                            <Menu.Item key="3">Tom</Menu.Item>
                            <Menu.Item key="4">Bill</Menu.Item>
                            <Menu.Item key="5">Alex</Menu.Item>
                            </SubMenu>
                            <SubMenu
                            key="sub2"
                            title={
                                <span>
                                <Icon type="team" />
                                <span>Team</span>
                                </span>
                            }
                            >
                            <Menu.Item key="6">Team 1</Menu.Item>
                            <Menu.Item key="8">Team 2</Menu.Item>
                            </SubMenu>
                            <Menu.Item key="9">
                            <Icon type="file" />
                            <span>File</span>
                        </Menu.Item>
                    </Menu>
                    </Sider>

                    {/* เนื้อหา */}
                    <Content className="ContentContainer" id="ContentContainer">
                    <List
                        itemLayout="vertical"
                        size="large"
                        pagination={{
                        onChange: page => {
                            console.log(page);
                        },
                        pageSize: 2,
                        }}
                        dataSource={data}
                        footer={
                        <div>
                            <Spin tip="Loading..." className="SpinPanel" id="SpinPanel"/>
                        </div>
                        }

                        renderItem={item => (
                        <List.Item
                            key={item.title}
                            actions={[
                            <Button type="link" size={size} icon="star" key="list-vertical-star-o" className="btnPanel" >star</Button>,
                            <Button type="link" size={size} icon="like" key="1" className="btnPanel" >like</Button>,
                            <Button type="link" size={size} icon="message" key={item.title} className="btnPanel" value={item.title} onClick={() => this.onShowComment(item.title)}>message</Button>,
                            <List
                                id={"comment-list" + item.title}
                                className="comment-list"
                                header={`${item.comment.length} replies`}
                                itemLayout="horizontal"
                                dataSource={item.comment}
                                renderItem={item => (
                                <li key="2">
                                    <Comment
                                        actions={item.actions}
                                        author={item.author}
                                        avatar={item.avatar}
                                        content={item.content}
                                        datetime={item.datetime}
                                    />
                                </li>
                                )}
                            />,
                            ]}
                            className="BoxCommentPanel"
                            // extra={
                            //     <img
                            //         width={256}
                            //         alt="logo"
                            //         src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                            //     />
                            // }
                        >
                            <List.Item.Meta
                                avatar={<Avatar src={item.avatar} />}
                                title={<a href={item.href}>{item.title}</a>}
                                description={item.description}
                            />
                            {item.content}
                        </List.Item>
                        )}
                    />
                    </Content>

            </Layout>
        )
    }
}
document.getElementById('container')

export default Message
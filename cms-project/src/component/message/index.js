import React from 'react'
import './index.css'
// import 'antd/dist/antd.css';
import { List, Avatar, Icon } from 'antd';
import { Layout, Menu, Breadcrumb} from 'antd';

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
  });
}

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

class Message extends React.Component {
    state = {
        collapsed: false,
    };
    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };
    render() {
        return(
            <Layout style={{ minHeight: '100vh' }}>
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

                    <Content className="ContentContainer">
                    <List
                        itemLayout="vertical"
                        size="large"
                        pagination={{
                        onChange: page => {
                            console.log(page);
                        },
                        pageSize: 3,
                        }}
                        dataSource={listData}
                        footer={
                        <div>
                            <b>ant design</b> footer part
                        </div>
                        }
                        renderItem={item => (
                        <List.Item
                            key={item.title}
                            actions={[
                            <IconText type="star-o" text="156" key="list-vertical-star-o" />,
                            <IconText type="like-o" text="156" key="list-vertical-like-o" />,
                            <IconText type="message" text="2" key="list-vertical-message" />,
                            ]}
                            extra={
                            <img
                                width={272}
                                alt="logo"
                                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                            />
                            }
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
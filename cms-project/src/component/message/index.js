import React from 'react'
import './index.css'
import { List, Avatar, Icon , Comment, Tooltip, Layout, Menu, Breadcrumb, Button, Collapse, Skeleton} from 'antd';
import moment from 'moment';
import { Spin } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const listData = [];

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
            dataPost: '',
            dataCatagory: '',
            likes: 0,
            dislikes: 0,
            action: null,
            dataComment: '',
        };
        this.onShowComment = this.onShowComment.bind(this)
    }
    handleSizeChange = e => {
        this.setState({ size: e.target.value });
    };

    sortData(data){
        const stateComment = setTimeout(() => {
            // document.getElementById('SpinPanel').style.display = "none";
            // document.getElementById(idName).style.display = "block";
        }, 1000);
        return stateComment;
    }

    onShowComment = async (e1,e2) => {
        console.log("onShowComment",e1,e2)
        const idName = "comment-list" + e1;
        const idSpin = "SpinPanel" + e1;
        document.getElementById(idSpin).style.display = "inline";
        await this.getComment(e2,idSpin,idName);
    }

    componentDidMount(){
        clearInterval(this.stateComment);
    }

    getDataPost(){
        fetch("http://localhost:9000/post/getPost")
            .then(res => res.json())
            .then(res => this.setState({dataPost : res}))
            .catch(err => err);
    }

    getCatagory(){
        fetch("http://localhost:9000/catagory/getCatagory")
            .then(res => res.json())
            .then(res => this.setState({dataCatagory : res}))
            .catch(err => err);
    }

    getComment = async (dataid,idSpin,idName) => {
        await fetch("http://localhost:9000/Comment/comment/" + dataid)
            .then(res => res.json())
            .then(res => {
                idName = this.state();
                this.setState({idName : res})
            })
            .then(res => {
                document.getElementById(idSpin).style.display = "none";
                document.getElementById(idName).style.display = "block";
            })
            .catch(err => err);
    }

    componentWillMount() {
        this.getDataPost();
        this.getCatagory();
    }

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
        if(collapsed) document.getElementById('ContentContainer').style.marginLeft = '80px';
        else document.getElementById('ContentContainer').style.marginLeft = '200px';
    };

    like = () => {
        this.setState({
            likes: 1,
            dislikes: 0,
            action: 'liked',
        });
    };

    dislike = () => {
        this.setState({
            likes: 0,
            dislikes: 1,
            action: 'disliked',
        });
    };

    render() {
        const { size } = this.state;
        const datapost = this.state.dataPost;
        const dataCatagory = this.state.dataCatagory;
        const dataComment = this.state.dataComment;
        const newCatagory = Object.values(dataCatagory)
        const itemsCatagory = [];
        const { likes, dislikes, action } = this.state;

        for (const [index, value] of newCatagory.entries()){
            itemsCatagory.push(
                <Menu.Item key={index} className="meruItem">
                    <Icon type="read" />
                    <span>{value.catagorytype}</span>
                </Menu.Item>
            )
        }

        console.log("datapost",datapost)
        console.log("dataComment", dataComment)
        return(
            <Layout style={{ minHeight: '100vh', minWidth: '100vh' }} className="layoutContainer">
                <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse} className="SiderContainer">
                    <Menu defaultSelectedKeys={['0']} mode="inline">
                        {itemsCatagory}
                    </Menu>
                    </Sider>

                    {/* เนื้อหา */}
                    <Content className="ContentContainer" id="ContentContainer">
                        <List
                            itemLayout="vertical"
                            size="large"
                            // pagination={{
                            //     onChange: page => {
                            //         console.log(page);
                            //     },
                            //     // pageSize: ,
                            // }}
                            dataSource={datapost}
                            // footer={
                            //     <div>
                            //         <Spin tip="Loading..." className="SpinPanel" id="SpinPanel"/>
                            //     </div>
                            // }

                            renderItem={item => (
                                <List.Item
                                    key={item.title}
                                    actions={[
                                        <div>
                                            <Icon type="like" theme={action === 'liked' ? 'filled' : 'outlined'} style={{ fontSize: "18px"}} onClick={this.like} />
                                            <span style={{ paddingLeft: 8, cursor: 'auto', color: "aqua" }}>{likes}</span>
                                        </div> ,
                                        <div>
                                            <Icon type="dislike" theme={action === 'disliked' ? 'filled' : 'outlined'} style={{ fontSize: "18px"}} onClick={this.dislike}/>
                                            <span style={{ paddingLeft: 8, cursor: 'auto', color: "red" }}>{dislikes}</span>
                                        </div>,
                                        <div>
                                            <Icon type="message" theme={action === 'comment' ? 'filled' : 'outlined'} style={{ fontSize: "18px"}} value={item.title} onClick={() => this.onShowComment(item.title,item.id)}/>
                                            <span style={{ paddingLeft: 8, cursor: 'auto', color: "yellowgreen" }}>{dataComment.length}</span>
                                            <Spin style={{marginLeft: "10px", display: "none"}} id={"SpinPanel" + item.title} />
                                        </div>,
                                        <List
                                            id={"comment-list" + item.title}
                                            className="comment-list"
                                            header={`${dataComment.length} replies`}
                                            itemLayout="horizontal"
                                            dataSource={this.state+ '.' + "comment-list" + item.title}
                                            renderItem={item => (
                                                <li key="2">
                                                    <Comment
                                                        actions={[<span key="comment-list-reply-to-0">Reply to</span>]}
                                                        author={'Han Solo'}
                                                        avatar={'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'}
                                                        content={<p>
                                                            {item.commenttext}
                                                        </p>}
                                                        datetime={(
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
                                                        )}
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
                                        // description={item.description}
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

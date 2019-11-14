import { Modal } from "antd";
import React from "react";
import { List, Avatar, Icon } from "antd";
import { Layout } from "antd";

const { Content } = Layout;
class Preview extends React.Component {
  constructor(props) {
    super();
    this.state = {
      listData: [],
      visible: false
    };
  }

  handleModal = () => {
    const { visible } = this.state;
    visible === false
      ? this.setState({ visible: true })
      : this.setState({ visible: false });

    this.setState({
      listData: [
        {
          title: this.props.title,
          avatar:
            "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
          description: this.props.type,
          content: this.props.content
        }
      ]
    });
  };

  render() {
    return (
      <Modal
        title="Post Preview"
        visible={this.state.visible}
        width={1000}
        footer={null}
        onCancel={this.handleModal}
      >
        <Content>
          <List
            itemLayout="vertical"
            size="large"
            dataSource={this.state.listData}
            renderItem={item => (
              <List.Item
                key={item.title}
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
      </Modal>
    );
  }
}
export default Preview;

import React, { Component } from "react";
import { Table, Avatar } from "antd";

const dataSource = [
  {
    key: "1",
    image: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    name: "Mike",
    subscribe: 32,
    totalpost: 100
  },
  {
    key: "2",
    image: "https://www.w3schools.com/w3images/avatar2.png",
    name: "John",
    subscribe: 42,
    totalpost: 50
  }
];

const columns = [
  {
    title: "Avatar",
    dataIndex: "image",
    key: "image",
    render: image => <Avatar src={image} />
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "Subscribe",
    dataIndex: "subscribe",
    key: "subscribe"
  },
  {
    title: "Totalpost",
    dataIndex: "totalpost",
    key: "totalpost"
  }
];

class Tablebar extends Component {
  render() {
    return (
      <div style={{ paddingTop: 50 }}>
        <Table columns={columns} dataSource={dataSource} bordered />
      </div>
    );
  }
}
//
export default Tablebar;

import { Form, Row, Col, Input, Button, Select } from "antd";
import React from "react";

const { TextArea } = Input;
const { Option } = Select;

class PostForm extends React.Component {
  constructor() {
    super();
    this.state = { optionValue: [] };
  }
  handleSubmit = e => {
    e.preventDefault();
    const { topicName, topicContent, topicType } = this.state;

    if (
      topicContent !== undefined &&
      topicName !== undefined &&
      topicType !== undefined
    ) {
      this.props.fromPostTopic(topicName);
      this.props.fromPostContent(topicContent);
      this.props.fromPostType(topicType);
      //console.log(topicName, topicContent);
    }
  };

  handleTopic = e => {
    this.setState({ topicName: e.target.value });
  };

  handleTopicContent = e => {
    this.setState({ topicContent: e.target.value });
  };

  handleSelectChange = e => {
    this.setState({ topicType: e });
  };

  componentDidMount() {
    //รอรับค่าจาก prop เพื่อเอามาใส่ใน select option
  }

  render() {
    const { optionValue } = this.state;
    return (
      <Form layout="horizontal" onSubmit={this.handleSubmit}>
        <Row gutter={16}>
          <Col span={20}>
            <Form.Item>
              <Input placeholder="Topic" onChange={this.handleTopic} required />
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item>
              <Select
                onChange={this.handleSelectChange}
                placeholder="Select Topic Type"
              >
                {optionValue.map((item, index) => (
                  <Option value={item} key={index}>
                    {item}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Form.Item>
          <TextArea
            placeholder="Type Content Here"
            rows={6}
            onChange={this.handleTopicContent}
            required
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Post
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default PostForm;

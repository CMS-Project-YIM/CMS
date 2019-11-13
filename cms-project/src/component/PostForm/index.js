import { Form, Row, Col, Input, Button, Select } from "antd";
import React from "react";
import UploadForm from "./UploadForm";
import Preview from "./postPreview";

const { TextArea } = Input;
const { Option } = Select;

class PostForm extends React.Component {
  constructor() {
    super();
    this.state = { selectedValue: ["Value1", "Value2", "Value3"] };
    this.child = React.createRef();
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

  handleTextChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({ [name]: value });
  };

  handleSelectChange = e => {
    this.setState({ type: e });
  };

  componentDidMount() {
    //รอรับค่าจาก prop เพื่อเอามาใส่ใน select option
  }

  handlePreview = () => {
    this.child.current.handleModal();
  };

  render() {
    return (
      <div>
        <Form layout="horizontal" onSubmit={this.handleSubmit}>
          <Row gutter={8}>
            <Col span={16}>
              <Form.Item>
                <Input
                  placeholder="Topic"
                  name="title"
                  onChange={this.handleTextChange}
                  required
                />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item>
                <Select
                  onChange={this.handleSelectChange}
                  placeholder="Select Topic Type"
                >
                  {this.state.selectedValue.map((item, index) => (
                    <Option value={item} key={index}>
                      {item}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item>
                <UploadForm />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item>
            <TextArea
              placeholder="Type Content Here"
              rows={6}
              name="content"
              onChange={this.handleTextChange}
              required
            />
          </Form.Item>
          <Form.Item>
            <Row>
              <Col span={2}>
                <Button type="primary" htmlType="submit">
                  Post
                </Button>
              </Col>
              <Col>
                <Button
                  type="secondary"
                  htmlType="button"
                  onClick={this.handlePreview}
                >
                  Preview
                </Button>
              </Col>
            </Row>
          </Form.Item>
        </Form>
        <Preview
          ref={this.child}
          title={this.state.title}
          type={this.state.type}
          content={this.state.content}
        />
      </div>
    );
  }
}

export default PostForm;

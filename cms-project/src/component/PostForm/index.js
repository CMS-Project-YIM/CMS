import { Form, Row, Col, Input, Button, Select } from "antd";
import React from "react";
import UploadForm from "./UploadForm";
import Preview from "./postPreview";

const { TextArea } = Input;
const { Option } = Select;

class PostForm extends React.Component {
  constructor() {
    super();
    this.state = { selectedValue: [] };
    this.child = React.createRef();
  }
  handleSubmit = e => {
    const { title, content, catagoryId } = this.state;

    fetch("http://localhost:9000/post/postPost", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title,
        content: content,
        catagoryId: catagoryId
      })
    });
  };

  handleTextChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({ [name]: value });
  };

  handleSelectChange = e => {
    this.setState({ catagoryId: e });
  };

  componentDidMount() {
    fetch("http://localhost:9000/catagory/getCatagory")
      .then(response => response.json())
      .then(res => {
        for (let i = 0; i < Object.keys(res).length; i++) {
          this.setState({
            selectedValue: this.state.selectedValue.concat({
              id: res[i].id,
              value: res[i].catagorytype
            })
          });
        }
      });
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
                    <Option value={item.id} key={index.id}>
                      {item.value}
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
          <Row>
            <Col span={2}>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Post
                </Button>
              </Form.Item>
            </Col>
            {/* <Col>
              <Form.Item>
                <Button
                  type="secondary"
                  htmlType="button"
                  onClick={this.handlePreview}
                >
                  Preview
                </Button>
              </Form.Item>
            </Col>*/}
          </Row>
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

import { Upload, message, Button, Icon } from "antd";
import React from "react";

class UploadForm extends React.Component {
  constructor() {
    super();
    this.state = { optionValue: [] };
  }

  render() {
    const props = {
      name: "file",
      action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
      headers: {
        authorization: "authorization-text"
      },
      onChange(info) {
        if (info.file.status !== "uploading") {
          console.log(info.file, info.fileList);
        }
        if (info.file.status === "done") {
          message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === "error") {
          message.error(`${info.file.name} file upload failed.`);
        }
      }
    };
    return (
      <div>
        <Upload {...props}>
          <Button>
            <Icon type="upload" /> Upload Topic Picture
          </Button>
        </Upload>
      </div>
    );
  }
}

export default UploadForm;

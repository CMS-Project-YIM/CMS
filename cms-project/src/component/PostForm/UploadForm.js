import { Spin, Button, Icon } from "antd";
import React from "react";

class UploadForm extends React.Component {
  constructor() {
    super();
    this.state = {
      file: "",
      imagePreviewUrl: "",
      loading: false,
      loadingIcon: "loading"
    };
  }

  onChange = e => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    this.setState({ loading: true });
    reader.onloadend = () => {
      setTimeout(
        function() {
          this.setState({
            file: file,
            imagePreviewUrl: reader.result,
            loadingIcon: "check-circle"
          });
        }.bind(this),
        1000
      );

      this.props.imageFromChild(this.state.imagePreviewUrl);
    };

    reader.readAsDataURL(file);
  };

  render() {
    return (
      <div>
        <input
          type="file"
          onChange={this.onChange}
          accept="image/*"
          placeholder="Upload"
          style={{
            opacity: 0,
            position: "absolute",
            zIndex: 1000
          }}
        />
        <Button>
          <Icon type="upload" /> Upload Topic Picture
        </Button>{" "}
        {this.state.loading ? (
          <Icon style={{ color: " green " }} type={this.state.loadingIcon} />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default UploadForm;

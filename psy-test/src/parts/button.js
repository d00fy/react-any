import React from "react";

class Button extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <input type="button" value={this.props.name} onClick={this.props.id} />
    );
  }
}

export default Button;

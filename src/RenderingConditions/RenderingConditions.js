import React, { Component } from "react";

export default class RenderingConditions extends Component {
  login = true;
  userName = "Kev";

  renderContent = () => {
    if (this.login) {
      return <p>Hello {this.userName} </p>;
    }
    return <button className="btn btn-outline-primary p-5 m-4">Sign In</button>;
  };

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

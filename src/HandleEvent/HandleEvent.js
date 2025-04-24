import React, { Component } from "react";
export default class HandleEvent extends Component {
  // định nghĩa sự kiện button clickme
  handleClick = () => {
    alert("Hi!");
  };

  render() {
    return (
      <div>
        <button
          className="btn btn-outline-primary p-5 m-4"
          onClick={this.handleClick}
        >
          Click Me
        </button>
      </div>
    );
  }
}

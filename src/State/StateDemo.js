import React, { Component } from "react";

export default class StateDemo extends Component {
  // State là thuộc tính sẵn của React class giúp định nghĩa nội dung có khả năng thay đổi khi người dùng thao tác sự kiện
  state = {
    status: false,
  };

  userLogin = {
    name: "Kev",
    age: 19,
  };

  login = () => {
    let newState = {
      status: true,
    };
    this.setState(newState, () => {
      console.log(this.state);
    });
  };

  renderUserLogin = () => {
    if (this.state.status) {
      return <div className="text-center">{this.userLogin.name}</div>;
    }
    return (
      <button
        onClick={() => {
          this.login();
        }}
      >
        Sign in
      </button>
    );
  };

  render() {
    return <div>{this.renderUserLogin()}</div>;
  }
}

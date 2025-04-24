import React, { Component } from "react";
import "./Styling.css";
import style from "./Styling.module.css";
import Child from "./Child";

export default class Styling extends Component {
  render() {
    return (
      <div>
        <div className="txt">Styling</div>
        <Child />
        <span className={style.txtStyle}>Hello</span>
      </div>
    );
  }
}

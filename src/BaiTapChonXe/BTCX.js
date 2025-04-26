import React, { Component } from "react";
import dataFeatures from "../Data/arrayFeatures.json";
import wheels from "../Data/wheels.json";
import carData from "../Data/arrayFeatures.json";

export default class BTCX extends Component {
  state = {
    carCurrent: {
      id: 4,
      title: "Rallye Red",
      type: "Metallic",
      img: "./images/icons/icon-red.jpg",
      srcImg: "images-red/images-red-1/",
      color: "Red",
      price: "22,550",
      engineType: "In-Line 4-Cylinder",
      displacement: "1996 cc",
      horsepower: "158 @ 6500 rpm",
      torque: "138 lb-ft @ 4200 rpm",
      redline: "6700 rpm",
      wheels: [
        {
          idWheel: 1,
          srcImg: "images-red/images-red-1/",
        },
        {
          idWheel: 2,
          srcImg: "images-red/images-red-2/",
        },
        {
          idWheel: 3,
          srcImg: "images-red/images-red-3/",
        },
      ],
    },
  };

  // Viết phương thức đổi xe = cách set giá trị mới carCurrent
  changeCar = (newCar) => {
    this.setState({
      carCurrent: newCar,
    });
  };

  renderIcon = () => {
    return dataFeatures.map((data) => {
      return (
        <div
          onClick={() => {
            this.changeCar(data);
          }}
          className="row border my-2"
          style={{ cursor: "pointer" }}
          key={data.id}
        >
          <div className="col-2 my-2">
            <img style={{ width: "100%" }} src={data.img} alt={data.id} />
          </div>
          <div className="col-10 d-flex flex-column justify-content-center">
            <h5 className="pt-2">{data.title}</h5>
            <div className="">{data.type}</div>
          </div>
        </div>
      );
    });
  };

  changeWheel = (newWheel) => {
    // tìm trong state hiện tại (this.state.carCurrent.wheels)
    let objectWheel = this.state.carCurrent.wheels.find(
      (item) => item.idWheel === newWheel.idWheel
    );
    if (objectWheel !== -1) {
      this.setState({
        carCurrent: { ...this.state.carCurrent, srcImg: objectWheel.srcImg },
      });
    }
  };

  renderWheel = () => {
    return wheels.map((wheel) => {
      return (
        <div
          onClick={() => {
            this.changeWheel(wheel);
          }}
          className="row border mt-2"
          style={{ cursor: "pointer" }}
          key={wheel.id}
        >
          <div className="col-2 my-2">
            <img style={{ width: "100%" }} src={wheel.img} alt={wheel.id} />
          </div>
          <div className="col-10 d-flex flex-column justify-content-center">
            <h6 className="fw-bold">{wheel.title}</h6>
          </div>
        </div>
      );
    });
  };

  componentDidMount = () => {
    // Đây là phương thức có sẵn của component
    let tagScript = document.createElement("script");
    tagScript.src =
      "https://scaleflex.cloudimg.io/v7/plugins/js-cloudimage-360-view/latest/js-cloudimage-360-view.min.js";

    document.querySelector("#appendScript").appendChild(tagScript);
  };

  componentDidUpdate = () => {
    // hàm này chạy sau khi state thay đổi
    // lưu ý không được setState tại component vì gây ra infinity loop
    // clear old image

    let tagScript = document.createElement("script");
    tagScript.src =
      "https://scaleflex.cloudimg.io/v7/plugins/js-cloudimage-360-view/latest/js-cloudimage-360-view.min.js";

    document.querySelector("#appendScript").appendChild(tagScript);
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-8">
            <div className="model mt-3">
              {/* <img
                style={{ width: "100%" }}
                src="./images/images-black/images-black-1/civic-1.jpg"
                alt="img"
              /> */}
              <div
                key={this.state.carCurrent.srcImg}
                className="cloudimage-360"
                data-folder={"./images/" + this.state.carCurrent.srcImg}
                data-filename-x="civic-{index}.jpg"
                data-amount-x="8"
                data-speed="150"
              ></div>
              <div id="appendScript"></div>
              <div className="card mt-3 text-start">
                <h5 className="card-header">Exterior color</h5>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-bordered">
                      <tbody>
                        <tr className="">
                          <td>Color</td>
                          <td>Black</td>
                        </tr>
                        <tr className="">
                          <td>Price</td>
                          <td>$9000</td>
                        </tr>
                        <tr className="">
                          <td>Type</td>
                          <td>In-line-4</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card text-start mt-3">
              <h5 className="card-header">Exterior color</h5>
              <div className="card-body  py-0">{this.renderIcon()}</div>
            </div>
            <div className="card text-start mt-3">
              <h5 className="card-header">Wheels</h5>
              <div className="card-body  py-0">{this.renderWheel()}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

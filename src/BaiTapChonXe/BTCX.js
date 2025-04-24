import React, { Component } from "react";

export default class BTCX extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-7">
            <img
              style={{ width: "100%" }}
              src={require("../assets/products/black-car.jpg")}
              alt="blackCar"
            />
          </div>
          <div className="col-5">
            <div class="card ">
              <div className="card-header text-primary">Exterior Color</div>
              <div class="card-body">
                <div
                  className="row border border-light pt-2 pb-2 mt-2"
                  style={{ cursor: "pointer" }}
                >
                  <img
                    className="col-2"
                    src={require("../assets/icons/icon-black.jpg")}
                    alt="black-icon"
                  />
                  <div className="col-10">
                    <h3>Crytal Black</h3>
                    <p>Pearl</p>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <div
                  className="row border border-light pt-2 pb-2 mt-2"
                  style={{ cursor: "pointer" }}
                >
                  <img
                    className="col-2"
                    src={require("../assets/icons/icon-red.jpg")}
                    alt="black-icon"
                  />
                  <div className="col-10">
                    <h3>Crytal Black</h3>
                    <p>Pearl</p>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <div
                  className="row border border-light pt-2 pb-2 mt-2"
                  style={{ cursor: "pointer" }}
                >
                  <img
                    className="col-2"
                    src={require("../assets/icons/icon-silver.jpg")}
                    alt="black-icon"
                  />
                  <div className="col-10">
                    <h3>Crytal Black</h3>
                    <p>Pearl</p>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <div
                  className="row border border-light pt-2 pb-2 mt-2"
                  style={{ cursor: "pointer" }}
                >
                  <img
                    className="col-2"
                    src={require("../assets/icons/icon-steel.jpg")}
                    alt="black-icon"
                  />
                  <div className="col-10">
                    <h3>Crytal Black</h3>
                    <p>Pearl</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

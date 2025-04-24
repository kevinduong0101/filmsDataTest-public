import React, { Component } from "react";
import data from "../Data/DataFilms.json";
import Navbar from "./Navbar";

export default class BaiTapRenderFilms extends Component {
  renderFilmsData = () => {
    let filmsData = data.map((films) => {
      return (
        <div className="col" key={films.maPhim}>
          <div className="card text-start h-100">
            <img
              className="card-img-top img-fluid"
              style={{
                width: "100%",
                height: "300px", // 👈 thêm chiều cao cố định
                objectFit: "cover", // 👈 crop ảnh đẹp
                objectPosition: "center", // 👈 crop ở giữa
              }}
              src={films.hinhAnh}
              alt="Title"
            />
            <div className="card-body">
              <h6 className="card-title">{films.tenPhim}</h6>
              <p className="card-text">
                {films.moTa.length > 20
                  ? films.moTa.slice(0, 20) + "..."
                  : films.moTa}
              </p>
            </div>
          </div>
        </div>
      );
    });
    return filmsData;
  };

  render() {
    return (
      // -------------------
      <div className="">
        <Navbar />
        <div className="row row-cols-xl-6 row-cols-md-4 row-cols-2 g-4 mx-5">
          {this.renderFilmsData()}
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";

export default class RenderWithLoop extends Component {
  productList = [
    {
      id: 1,
      name: "black car",
      price: 1000,
      img: "./car/products/black-car.jpg",
    },
    {
      id: 2,
      name: "red car",
      price: 2000,
      img: "./car/products/red-car.jpg",
    },
    {
      id: 3,
      name: "silver car",
      price: 3000,
      img: "./car/products/silver-car.jpg",
    },
    {
      id: 4,
      name: "steel car",
      price: 4000,
      img: "./car/products/steel-car.jpg",
    },
  ];

  renderTable = () => {
    // Cach 1: render array object sd for
    // let component = [];
    // for (let i = 0; i < this.productList.length; i++) {
    //   let product = this.productList[i];
    //   let trJSX = (
    //     <tr key={i}>
    //       <td>{product.id}</td>
    //       <td>{product.name}</td>
    //       <td>{product.price}</td>
    //       <td>
    //         <img style={{ width: "100px" }} src={product.img} alt="" />
    //       </td>
    //     </tr>
    //   );
    //   component.push(trJSX);
    // }
    // return component;

    // Cách 2: Dùng MAP
    let component = this.productList.map((product, index) => {
      return (
        <tr key={product.id}>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>{product.price}</td>
          <td>
            <img style={{ width: "100px" }} src={product.img} alt="" />
          </td>
        </tr>
      );
    });
    return component;
  };

  render() {
    return (
      <div className="container">
        <div className="table-responsive">
          <table className="table table-primary">
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">name</th>
                <th scope="col">price</th>
                <th scope="col">img</th>
              </tr>
            </thead>
            <tbody>{this.renderTable()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

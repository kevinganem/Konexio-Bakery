// REACT
import React from "react";

class Add extends React.Component {
  constructor() {
    super();

    this.state = {
      productName: "",
      price: 1,
    };
  }

  //   GET VALUE FOR PRODUCTNAME
  updateProductName = (event) => {
    this.setState({
      productName: event.target.value,
    });
    console.log(this.state.productName);
  };

  //   GET VALUE FOR PRICE
  updatePrice = (event) => {
    this.setState({
      price: event.target.value,
    });
    console.log(this.state.price);
  };

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              onChange={this.updateProductName}
            />
            <button
              className="btn btn-primary"
              type="button"
              onClick={() =>
                this.props.onClick(this.state.productName, this.state.price)
              }
            >
              Add
            </button>
          </div>
          <span>{this.state.price} €</span>
          <input
            type="range"
            className="form-range"
            min="1"
            max="10"
            defaultValue={1}
            onChange={this.updatePrice}
          />
        </form>
      </>
    );
  }
}
export default Add;

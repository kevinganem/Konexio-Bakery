// REACT
import React from "react";
// COMPONENTS
import Card from "./Card";

class Pay extends React.Component {
  constructor() {
    super();

    this.state = {
      basket: [],
      total: 0,
      totalTVA: 0,
      totalEcoTax: 0,
      totalTTC: 0,
    };
  }

  // GETTING TOTAL USING MATH ROUND TO GET 2 DECIMAL MAX WITH EPISLON
  handleSelect(name, price) {
    console.log(name, price);
    this.setState({
      basket: [...this.state.basket, { name: name, price: price }],
      total: this.state.total + parseFloat(price),
      totalEcoTax:
        Math.round((this.state.totalEcoTax + 0.03 + Number.EPSILON) * 100) /
        100,
      totalTVA:
        Math.round((this.state.totalTVA + price * 0.2 + Number.EPSILON) * 100) /
        100,
      totalTTC:
        Math.round(
          (this.state.total +
            parseFloat(price) +
            (this.state.totalEcoTax + 0.03) +
            (this.state.totalTVA + price * 0.2) +
            Number.EPSILON) *
            100
        ) / 100,
    });
  }

  render() {
    return (
      <>
        <h1>Pay</h1>
        <div>
          <p>Total: {this.state.total} €</p>
          <p>Total TVA: {this.state.totalTVA} €</p>
          <p>Total Eco Taxe: {this.state.totalEcoTax} €</p>
          <p>Total TTC: {this.state.totalTTC} €</p>
        </div>
        {this.props.items.map((item) => (
          <Card
            productName={item.name}
            price={item.price}
            onClick={() => this.handleSelect(item.name, item.price)}
          />
        ))}
      </>
    );
  }
}

export default Pay;

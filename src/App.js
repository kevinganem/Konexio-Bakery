// REACT
import React from "react";
// CSS
import "./App.css";
// BOOTSTRAP
import "bootstrap/dist/css/bootstrap.min.css";
// COMPONENTS
import Add from "./components/Add";
import List from "./components/List";
import Pay from "./components/Pay";
import Button from "./components/Button";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      activeTab: "Add",
      items: [],
    };
    this.selectAdd = this.selectAdd.bind(this);
    this.selectList = this.selectList.bind(this);
    this.selectPay = this.selectPay.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  // SELECT TABS (selectAdd - selectList - selectPay)
  selectAdd = () => {
    this.setState({
      activeTab: "Add",
    });
  };

  selectList = () => {
    this.setState({
      activeTab: "List",
    });
  };

  selectPay = () => {
    this.setState({
      activeTab: "Pay",
    });
  };

  // PUSHING ITEMS
  addItem = (name, price) => {
    this.state.items.push({ name: name, price: price });

    console.log(this.state.items);
  };

  // WHICH TAB ARE WE ON ?
  renderTab() {
    if (this.state.activeTab === "Add") {
      return (
        <>
          <Add
            items={this.state.items}
            price={this.state.price}
            onClick={this.addItem}
          />
        </>
      );
    } else if (this.state.activeTab === "List") {
      if (!this.state.items[0])
        return (
          <>
            <h1>No items available</h1>
          </>
        );
      return (
        <>
          <List
            items={this.state.items.sort(
              (a, b) => parseFloat(a.price) - parseFloat(b.price)
            )}
          />
        </>
      );
    } else if (this.state.activeTab === "Pay") {
      if (!this.state.items[0])
        return (
          <>
            <h1>No items available</h1>
          </>
        );
      return (
        <>
          <Pay />
        </>
      );
    }
  }

  render() {
    console.log(this.state.activeTab);
    return (
      <>
        <div className="container-fluid col-7">
          <h1 className="text-center">Bakery</h1>
          <Button
            isSelected={this.state.activeTab === "Add"}
            handleClick={this.selectAdd}
          >
            Add
          </Button>
          <Button
            isSelected={this.state.activeTab === "List"}
            handleClick={this.selectList}
          >
            List
          </Button>
          <Button
            isSelected={this.state.activeTab === "Pay"}
            handleClick={this.selectPay}
          >
            Pay
          </Button>
          {this.renderTab()}
        </div>
      </>
    );
  }
}

export default App;

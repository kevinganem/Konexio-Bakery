// REACT
import React from "react";
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
  }

  selectAdd = () => {
    this.setState({
      activeTab: "add",
    });
  };

  selectList = () => {
    this.setState({
      activeTab: "list",
    });
  };

  selectPay = () => {
    this.setState({
      activeTab: "pay",
    });
  };

  render() {
    console.log(this.state.activeTab);
    return (
      <>
        <h1>Bakery</h1>
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
      </>
    );
  }
}

export default App;

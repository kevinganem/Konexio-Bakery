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

  handleButtonClick = (event) => {
    this.setState({
      activeTab: event.target.innerText,
    });
  };

  render() {
    console.log(this.state.activeTab);
    return (
      <>
        <h1>Bakery</h1>
        <Button
          isSelected={this.state.activeTab === "Add"}
          handleClick={this.handleButtonClick}
        >
          Add
        </Button>
        <Button
          isSelected={this.state.activeTab === "List"}
          handleClick={this.handleButtonClick}
        >
          List
        </Button>
        <Button
          isSelected={this.state.activeTab === "Pay"}
          handleClick={this.handleButtonClick}
        >
          Pay
        </Button>
      </>
    );
  }
}

export default App;

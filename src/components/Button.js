// REACT
import React from "react";

class Button extends React.Component {
  render() {
    return (
      <>
        {/* BUTTON - CHANGE TYPE COLOR IF SELECTED - CHANGE OUTLINE IF UNSELECTED */}

        <button
          onClick={this.props.handleClick}
          className={`btn btn${
            this.props.isSelected ? "" : "-outline"
          }-primary m-2`}
        >
          {/* USING CHILDREN NAME (Add - List - Pay) */}

          {this.props.children}
        </button>
      </>
    );
  }
}
export default Button;

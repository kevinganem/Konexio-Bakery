// REACT
import React from "react";

class List extends React.Component {
  render() {
    return (
      <>
        {/* MAPPING LIST USING BOOTSTRAP LIST GROUP WITH BADGES */}
        <div className="">
          <ul className="list-group">
            {this.props.items.map((item) => (
              <li className="list-group-item d-flex justify-content-between align-items-center">
                {item.name}
                <span className="badge bg-primary rounded-pill">
                  {item.price} €
                </span>
              </li>
            ))}
          </ul>
          <button
            className="btn btn-danger mt-2"
            // onClick=
          >
            Delete
          </button>
        </div>
      </>
    );
  }
}

export default List;

// REACT
import React from "react";

class Card extends React.Component {
  constructor() {
    super();

    this.state = {
      image: "../../public/images/item.png",
    };
  }

  // GETTING IMAGE WITH FETCH
  componentDidMount() {
    fetch(
      `https://raw.githubusercontent.com/konexio/digitous-assest/main/bakery/${this.props.productName}.png`
    )
      .then((res) => res.blob())
      .then((resURL) => {
        const path = URL.createObjectURL(resURL);
        this.setState({
          image: path,
        });
      });
    // MAKING SURE THE IMAGE IS MOUNTED
    console.log("Image mounted");
  }

  render() {
    return (
      // THE IMAGE BUTTON WITH BOOTSTRAP SIZING
      <div className="w-50 h-50">
        <button
          className="w-50 h-50"
          onClick={() =>
            this.props.onClick(this.props.productName, this.props.price)
          }
        >
          <img
            className="w-50 h-50"
            src={this.state.image}
            alt={this.props.productName}
          />
        </button>
      </div>
    );
  }
}

export default Card;

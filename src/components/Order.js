import React, { Component } from 'react'
import Side from "./Side"

class Order extends Component {
  state = {
    isClicked: false
  }

  handleClick = () => {
    this.setState({ isClicked: !this.setState.isClicked})
  }

  render() {
    return (
      <div className="ui centered raised card">
        <div className="image">
          <img src={ require("../images/burrito-bowl.jpg") } alt="burrito bowl" />
        </div>
        <div className="content">
          <b>Protein:</b><br />
          { this.props.attributes.protein.length > 0 ? this.props.attributes.protein.join(", ") : "None" }
          <br />
          <b>Fillings:</b><br />
          { this.props.attributes.fillings.length > 0 ? this.props.attributes.fillings.join(", ") : "None" }
          <br />
          <b>Toppings:</b><br />
          { this.props.attributes.toppings.length > 0 ? this.props.attributes.toppings.join(", ") : "None" }
          <br />
        </div>
        <div className="extra content">
          { this.props.attributes.sides.length > 0 ?
              <button className="ui button small" onClick={ this.handleClick }>
                View Sides
              </button>
            :
              <p>No sides</p>
          }

          { /* this is just a shortcut to writing this.state.isClicked ? <Side sides={this.props.sides} /> : null */ }
          { this.state.isClicked && <Side sides={this.props.attributes.sides} /> }

        </div>
      </div>
    )
  }
}

export default Order

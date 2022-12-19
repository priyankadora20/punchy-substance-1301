import React, { Component } from "react";

class LikeButton extends Component {
   
  constructor() {
    super();
    this.state = {
      liked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      liked: !this.state.liked
    });
  }
  

  render() {
    const text = this.state.liked ? "liked" : "haven't liked";
    const label = this.state.liked ? "Unlike👎" : "Like👌";
    

    return (
      <div>
        <button className="btn-red-new" onClick={this.handleClick}  style={{ backgroundColor: this.state.liked ? "red" : "green" }}>
          {label}
        </button>
        
      </div>
    );
  }
}

export default LikeButton;

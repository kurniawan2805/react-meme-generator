import React, { Component } from "react";

class Footer extends Component {
  constructor() {
    super();
    this.state = {
      year: new Date().getFullYear()
    };
  }
  state = {};
  render() {
    return (
      <footer>
        <ul>
          <li>&copy; {this.state.year}</li>
        </ul>
      </footer>
    );
  }
}

export default Footer;

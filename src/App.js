import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    value: ""
  };

  handleChange = event => {
    const value = event.target.value;
    this.setState(prevState => ({
      value
    }));
  };
  render() {
    const { value } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src="logo.svg" className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          <input
            type="text"
            placeholder="Say Something"
            value={value}
            onChange={this.handleChange}
          />
          <p className="echo">Echo: {value}</p>
          {value === "" ? (
            <p>This should mirror the text you typed into the input field.</p>
          ) : (
            <p>{value}</p>
          )}
        </div>
      </div>
    );
  }
}

export default App;

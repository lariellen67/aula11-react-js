import React from 'react';
import ReactDOM from 'react-dom';
import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="bs-component">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#home">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link show" data-toggle="tab" href="#profile">Profile</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">Disabled</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#">Dropdown</a>
            <div className="dropdown-menu" x-placement="bottom-start">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <a className="dropdown-item" href="#">Something else here</a>
              <div className="dropdown-divider" />
              <a className="dropdown-item" href="#">Separated link</a>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}
export default App;
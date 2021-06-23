import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    name : ""
  };
  
  render() {
    return (
      <div>
        <h1>Un repetidor</h1>
        <input 
        type="text" 
        placeholder="Empieza a escribir algo"
        value = {this.state.name}
        onChange = {(event) => this.setState({ name: event.target.value})}
        />

        <p className="repeater">{this.state.name}</p>
      </div>
    );
  }
}

export default App;


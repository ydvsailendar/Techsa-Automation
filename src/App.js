import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Company from "./components/Company";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Company />
        <Header />
      </div>
    );
  }
}

export default App;

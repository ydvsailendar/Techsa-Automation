import React, { Component } from 'react';
import Header from "./components/Header";
import Company from "./components/Company";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Company />
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;

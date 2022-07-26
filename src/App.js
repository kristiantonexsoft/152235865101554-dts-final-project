import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom"
import { Header, Menu, Body, Footer } from "./template/admin"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render() {
    return (
      <Router>
        <Header />
        <Menu/>
        <Body/>
        <Footer />
      </Router>
    );
  }
}

export default App;
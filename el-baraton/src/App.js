import React, { Component } from 'react'
import Nav from '../src/components/Nav'
import Banner from '../src/components/Banner'
import VisibleProductList from '../src/containers/VisibleProductList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <Banner />
        <VisibleProductList />
      </div>
    );
  }
}

export default App

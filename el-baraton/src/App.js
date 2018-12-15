import React, { Component } from 'react'
import Nav from '../src/components/Nav'
import Banner from '../src/components/Banner'
import VisibleProductList from '../src/containers/VisibleProductList'
import ShoppingCartContainer from '../src/containers/ShoppingCartContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <Banner />
        <section className="container-fluid">
          <div className="row">
            <div className="col s12 m9 l9">
              <VisibleProductList />
            </div>
            <aside className="col s12 m3 l3">
              <ShoppingCartContainer />
            </aside>
          </div>
        </section>
      </div>
    );
  }
}

export default App

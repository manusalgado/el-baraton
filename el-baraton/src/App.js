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
            <aside className="col s12 m3 l3 order-cart">
              <ShoppingCartContainer />
            </aside>
            <div className="col s12 m9 l9 order-products">
              <VisibleProductList />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App

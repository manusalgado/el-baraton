import React from 'react'
import { Product } from './styles'
import vino from '../../assets/images/vino.jpg'

const ProductList = ({products, isLoading, error, addToCart}) => {
  console.log('products from product list...', products.products)
  
    return (
      <section className="container-fluid">
          <div className="row">
          {products.products.map(product => (
            <div className="col s6 m4 l4">
              <Product key={product.id}>
                <h3>{product.name}</h3>
                <div>
                  <img alt={product.name} src={vino} width="180"/>
                </div>
                <div className="Product__stock">
                  {product.quantity > 0 ? 
                  <div className="Product__stock--green">
                    <p>En stock</p>
                    <span></span>
                  </div> 
                  : 
                  <div className="Product__stock--red">
                    <p>Sin inventario</p>
                    <span></span>
                  </div> }
                </div>
                <span className="Product__price">Precio: {product.price}</span>
                <button className="Product__add-cart" onClick={() => addToCart(product)}>Añadir al Carrito</button>
              </Product>
            </div>
          ))}
          </div>
      </section>
    )
}

export default ProductList
import React from 'react'
import { Product } from './styles'
import vino from '../../assets/images/vino.jpg'
import { Segment, Placeholder, Grid } from 'semantic-ui-react'

const ProductList = ({products, isLoading, error, addToCart}) => {
  console.log('products from product list...', products.products)
  
  let loadingTheme = [
    { idLoading: '' },
    { idLoading: '' },
    { idLoading: '' },
    { idLoading: '' },
    { idLoading: '' },
    { idLoading: '' }
  ]
    return (
      <section className="container-fluid">
          <div className="row">
          {isLoading ? (
          <Grid columns={3}>
            <Grid.Row>
              {loadingTheme.map(theme => {
                return (
                  <Grid.Column>
                    <Segment raised key={theme.idLoading}>
                      <Placeholder>
                        <Placeholder.Header image>
                          <Placeholder.Line />
                          <Placeholder.Line />
                          {theme.idLoading}
                        </Placeholder.Header>
                        <Placeholder.Paragraph>
                          {theme.idLoading}
                          <Placeholder.Line length='medium' />
                          <Placeholder.Line length='short' />
                        </Placeholder.Paragraph>
                      </Placeholder>
                    </Segment>
                  </Grid.Column>
                )
              })}
            </Grid.Row>
          </Grid>
        ) : (
          products.products.map(product => (
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
                {product.available ? 
                  <button className="Product__add-cart" onClick={() => addToCart(product)}>Añadir al Carrito</button> 
                  : 
                  <button className="Product__add-cart-no" >No disponible</button>}
          
              </Product>
            </div>
          ))
        )}
          </div>
      </section>
    )
}

export default ProductList
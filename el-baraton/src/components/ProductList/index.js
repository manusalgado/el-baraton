import React from 'react'
import { Product } from './styles'
import { Segment, Placeholder, Grid } from 'semantic-ui-react'

const ProductList = ({products, isLoading, error}) => {
  console.log('products', products)
  
  let loadingTheme = [
    { idLoading: '' },
    { idLoading: '' },
    { idLoading: '' },
    { idLoading: '' },
    { idLoading: '' },
    { idLoading: '' }
  ]
    return (
      <section className="container">
          <div className="row">
          {isLoading || error ? (
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
        ) : ''}
            <div className="col s6 m3 l4">
              <Product>
                Producto
              </Product>
            </div>
          </div>
      </section>
    )
}

export default ProductList
import React from 'react'
import { connect } from 'react-redux'
import ShoppingCart from '../../components/ShoppingCart'
import { deleteProduct } from '../../actions'

class ShoppingCartContainer extends React.Component {
    render () {
        const { products, total, deleteProduct } = this.props
        return (
            <ShoppingCart total={total} products={products} deleteProduct={deleteProduct} />
        )
    }
}

const mapStateToProps = state => ({
    products: state.products
})

const mapDispatchToProps = dispatch => ({
    deleteProduct: (product) => dispatch(deleteProduct(product))
})

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartContainer)
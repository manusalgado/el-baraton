import { connect } from 'react-redux'
import ProductList from '../../components/ProductList'
import { getProducts } from '../../actions'
import React from 'react'

class VisibleProductList extends React.Component {
    componentDidMount(){
        this.props.getProducts()
    }
    render(){
        const {products, isLoading, error} = this.props
        return (
            <ProductList products={products} isLoading={isLoading} error={error} />
        )
    }
}

const mapStateToProps = state => ({
    products: state.products,
    isLoading: state.products.isLoading,
    error: state.products.error
})

const mapDispatchToProps = dispatch => ({
    getProducts: () => dispatch(getProducts())
})

export default connect(mapStateToProps, mapDispatchToProps)(VisibleProductList)
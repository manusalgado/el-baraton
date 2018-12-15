import React from 'react'
import { connect } from 'react-redux'
import ShoppingCart from '../../components/ShoppingCart'

class ShoppingCartContainer extends React.Component {
    render () {
        return (
            <ShoppingCart />
        )
    }
}

const mapStateToProps = () => ({

})

const mapDispatchToProps = () => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartContainer)
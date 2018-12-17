import React from 'react'
import { Wrapper } from './styles'
import cart from '../../assets/images/cart.png'
import deleteIcon from '../../assets/images/delete.png'

const ShoppingCart = ({ deleteProduct, products }) => {
    const hasProducts = products.cart.length > 0
    return (
        <Wrapper>
            <h3>Tus Productos</h3>
            <div className="Wrapper__image">
                <img src={cart} alt="Cart" width="30" />
                {hasProducts ? <span>{products.cart.length}</span> : ''}
            </div>
            {hasProducts ? products.cart.map(product => (
                <div className="Wrapper__product-container">
                    <p>{product.name}</p>
                    <p>{product.price}</p>
                    <button onClick={() => deleteProduct(product)}>
                        <img src={deleteIcon} alt="delete" width="17"/>
                    </button>
                </div>
            )) : 
            <p className="Wrapper__empty">Carrito vacio</p>}
            <div className="Wrapper__total">
                <p>Total:</p>
                <span>${ products.cart.reduce((sum, product) => sum + parseFloat(product.price.substring(1).replace(',','')), 0) }</span>
            </div>
        </Wrapper>
    )
}

export default ShoppingCart
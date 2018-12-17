import { actionsType } from '../actions'

const initialState = {
    products: [],
    isLoading: false,
    error: false,
    cart: []
}

const products = (state = initialState, action) => {
    switch (action.type) {
        case actionsType.ERROR:
          return {
            ...state,
            isLoading: false,
            error: true
          }
        case actionsType.LOADING:
          return {
            ...state,
            isLoading: true
          }
        case actionsType.RECEIVE_PRODUCTS:
          return {
            ...state,
            isLoading: false,
            products: action.products.products
          }
          case actionsType.ADD_TO_CART:
          {
            const foundProduct = state.cart.find(item => item.id === action.product.id)
            if(foundProduct) {
              const index = state.cart.indexOf(foundProduct)
              const newState = {...state}
              newState.cart[index] = {...foundProduct, quantity: foundProduct.quantity + 1}
              return newState 
            }
            return {
              ...state,
              cart: state.cart.concat({
                ...action.product,
                quantity: 1
              })
            }
          }
          case actionsType.DELETE_PRODUCT:
            return {
              ...state,
              cart: state.cart.filter(product => product.id !== action.product.id)
          }
          default:
    return state;
    }
}

export {products} 
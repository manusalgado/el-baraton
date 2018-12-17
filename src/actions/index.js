import axios from 'axios'

export const actionsType = {
	RECEIVE_PRODUCTS: 'RECEIVE_PRODUCTS',
	ADD_TO_CART: 'ADD_TO_CART',
	DELETE_PRODUCT: 'DELETE_PRODUCT',
	RECEIVE_CATEGORIES: 'RECEIVE_CATEGORIES',
	LOADING: 'LOADING',
	ERROR: 'ERROR'
}

// ACTIONS

export const getCategories = () => dispatch => {
	return axios
		.get('data/categories.json')
		.then(response => {
			console.log(response)
			dispatch(receiveCategories(response))
		})
		.catch(error => {
			console.log(error)
			dispatch(showError())
		})
}

export const getProducts = () => dispatch => {
	dispatch(loading())
	return axios
		.get('data/products.json')
		.then(response => {
			console.log(response)
			dispatch(receiveProducts(response))
		})
		.catch(error => {
			console.log(error)
			dispatch(showError())
		})
}

const receiveProducts = response => ({
  type: actionsType.RECEIVE_PRODUCTS,
  products: response.data
})

const receiveCategories = response => ({
  type: actionsType.RECEIVE_CATEGORIES,
  categories: response.data
})

export const loading = () => {
  return { type: actionsType.LOADING }
}

export const showError = () => {
  return { type: actionsType.ERROR }
}

export const addToCart = product => {
  return {
    type: actionsType.ADD_TO_CART,
    product
  }
}

export const deleteProduct = product => {
  return {
    type: actionsType.DELETE_PRODUCT,
    product
  }
}

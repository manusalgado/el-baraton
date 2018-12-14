import axios from 'axios'

export const actionsType = {
	RECEIVE_PRODUCTS: 'RECEIVE_PRODUCTS',
	LOADING: 'LOADING',
	ERROR: 'ERROR'
}

// ACTIONS

export const getProducts = () => dispatch => {
	dispatch(loading())
	return axios
		.get('/data/products.json')
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

export const loading = () => {
  return { type: actionsType.LOADING }
}

export const showError = () => {
  return { type: actionsType.ERROR }
}
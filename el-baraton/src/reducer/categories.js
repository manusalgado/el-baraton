import { actionsType } from '../actions'

const initialState = {
    categories: []
}

const categories = (state = initialState, action) => {
    switch (action.type) {
          case actionsType.RECEIVE_CATEGORIES:
          return {
            ...state,
            categories: action.categories.categories
          }
          default:
    return state;
    }
}

export {categories} 
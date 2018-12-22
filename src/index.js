import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import '../src/sass/index.scss'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
import reducer from './reducer/index'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { loadState, saveState } from './localStorage'
import throttle from 'lodash/throttle'

const persistedState = loadState()
const store = createStore(reducer, persistedState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
console.log(store.getState())

store.subscribe(throttle(() => {
  saveState({
   products: store.getState().products
  })
}, 1000))
ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
  , document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from '@s'
import Main from '@con/Main'
import './assets/scss/main.scss'

const app = (
   <Provider store={store}>
      <div className="app">
         <h1 className="app-heading">Pokedex</h1>
         <Main />
      </div>
   </Provider>
)

ReactDOM.render(app, document.getElementById('root'))

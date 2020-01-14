import React from 'react'
import './App.scss'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { reducer } from './store/reducers'
import MainContainer from './components/Main/MainContainer'

const store = createStore(
    reducer,
    applyMiddleware(thunk)
)

export default function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <h1 className="app-heading">Pokedex</h1>
                <MainContainer />
            </div>
        </Provider>
    )
}

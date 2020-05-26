import { combineReducers } from 'redux'
import pokedexReducer from '../reducers/pokedex'

export default combineReducers({
   pokedex: pokedexReducer
})

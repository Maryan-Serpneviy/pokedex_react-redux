import Actions from '../actions/action-types'
import { ActionTypes } from '../actions/pokedex'
import { PokemonType } from '@/types'

const { LOAD_ITEM, SHOW_INFO } = Actions

const initialState = {
	items: [] as [] | PokemonType[],
	item: null as null | PokemonType
}
export type StateType = typeof initialState

export default function pokedexReducer(state = initialState, action: ActionTypes): StateType {
	switch (action.type) {
		case LOAD_ITEM:
			const stats = [
				...action.item.stats.map((s: { stat: { name: string }; base_stat: number }) => ({
					name: s.stat.name,
					stat: s.base_stat
				})),
				{ name: 'height', stat: action.item.height },
				{ name: 'weight', stat: action.item.weight }
			]
			const item = {
				id: action.item.id,
				name: action.item.name,
				pic: action.item.sprites.front_default,
				types: action.item.types.map((t: { type: { name: string } }) => t.type.name),
				stats
			}
			return {
				...state,
				items: [...state.items, item]
			}
		case SHOW_INFO:
			const current = state.items.find((item: { id: number }) => item.id === Number(action.id))
			return {
				...state,
				item: current
			}
		default:
			return state
	}
}

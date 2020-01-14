/* eslint-disable no-case-declarations */
import Type from '../constants'

const initialState = {
    items: [],
    item: null
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Type.LOAD_ITEM:
            return {
                ...state,
                items: [...state.items, action.item]
            }
        case Type.SHOW_INFO:
            const currItem = state.items.find(item => item.id === Number(action.id))
            return {
                ...state,
                item: {
                    id: currItem.id,
                    pic: currItem.sprites.front_default,
                    name: currItem.name,
                    types: currItem.types,
                    stats: currItem.stats,
                    height: currItem.height,
                    weight: currItem.weight
                }
            }
        default:
            return state
    }
}

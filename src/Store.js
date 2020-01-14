const TYPE = {
    LOAD_ITEM: 'LOAD_ITEM',
    RENDER: 'RENDER',
    SHOW_INFO: 'SHOW_INFO'
}

const API_URL = 'https://pokeapi.co/api/v2/pokemon'

const initialState = {
    items: [],
    item: null
}

export default class Store {
    static reducer(state = initialState, action) {
        let currItem = null

        switch (action.type) {
            case TYPE.LOAD_ITEM:
                return {
                    ...state
                }
            case TYPE.RENDER:
                return {
                    ...state,
                    items: [...state.items, action.item]
                }
            case TYPE.SHOW_INFO:
                currItem = state.items.find(item => item.id === Number(action.id))
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

    static loadItem = id => {
        return (dispatch) => {
            dispatch({ type: TYPE.LOAD_ITEM })
            fetch(`${API_URL}/${id}`)
            .then(response => response.json())
            .then(data => dispatch(Store.render(data)))
        }
    }

    static render = item => ({
        type: TYPE.RENDER,
        item
    })

    static showInfo = id => ({
        type: TYPE.SHOW_INFO,
        id
    })
}

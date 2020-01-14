import Type from '../constants'

const API_URL = 'https://pokeapi.co/api/v2/pokemon'

const fetchData = (id) => (dispatch) => new Promise((resolve, reject) => {
    dispatch({ type: Type.FETCH_DATA })
    fetch(`${API_URL}/${id}`)
    .then(response => response.json())
    .then(item => resolve(item))
    .catch(error => {
        reject(error)
    })
})

const loadItem = item => ({
    type: Type.LOAD_ITEM,
    item
})

const showInfo = id => ({
    type: Type.SHOW_INFO,
    id
})

export { loadItem, fetchData, showInfo }

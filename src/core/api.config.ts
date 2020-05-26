import Axios from 'axios'

const baseURL = 'https://pokeapi.co/api/v2/pokemon/'

export default Axios.create({ baseURL })

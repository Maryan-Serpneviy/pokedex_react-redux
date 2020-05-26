type Stat = {
	name: string
	stat: number
}

export type PokemonType = {
	id: number
	name: string
	pic: string
	types: string[]
	stats: Stat[]
}

import React, { useState, useEffect } from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import PropTypes, { InferProps } from 'prop-types'

import * as Action from '@s/actions/pokedex'
import Pokemon from '@com/Pokemon'
import Stats from '@com/Stats'
import { ITEMS_PER_LOAD } from '@/core/config'
import { PokemonType } from '@/types'
import classes from './Main.module.scss'

type Props = {
	fetchItem: (id: number) => Promise<object>
	loadItem: (id: number) => void,
	items: PokemonType[]
	item: PokemonType
}

const Main: React.FC<Props> = (
	{ fetchItem, loadItem, items, item }
	: InferProps<typeof Main.propTypes>) => {

	const [itemsLoaded, setItemsLoaded] = useState(0)

	useEffect(() => {
		setItemsLoaded(ITEMS_PER_LOAD)
		for (let i = 1; i <= ITEMS_PER_LOAD; i++) {
			fetchItem(i).then((response: { data: any }) => loadItem(response.data))
		}
	}, [fetchItem, loadItem])

	const loadMore = () => {
		setItemsLoaded(itemsLoaded + ITEMS_PER_LOAD)
		for (let i = itemsLoaded + 1; i <= (itemsLoaded + ITEMS_PER_LOAD); i++) {
			fetchItem(i).then((response: { data: any }) => loadItem(response.data))
		}
	}

	return (
		<section className={classes.main}>
			<main className={classes.tilesWrapper}>
				{items.length && items.map((item: { id: string | number }) => (
					<Pokemon
						key={item.id}
						item={item}
						initialRender={itemsLoaded === ITEMS_PER_LOAD}
					/>
				))}
				<button onClick={loadMore} className={classes.load}>Load More</button>
			</main>
			<aside className={classes.statsWrapper}>
				<span className={classes.itemsLoaded}>Creatures loaded: { itemsLoaded }</span>
				{item && <Stats item={item} />}
			</aside>
		</section>
	)
}

Main.propTypes = {
	fetchItem: PropTypes.func.isRequired,
	loadItem: PropTypes.func.isRequired,
	items: PropTypes.array.isRequired,
	item: PropTypes.object
}

const mapStateToProps = (state: { pokedex: Props }) => ({
	items: state.pokedex.items,
	item: state.pokedex.item
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
	fetchItem: (id: number) => dispatch(Action.fetchItem(id)),
	loadItem: (id: number) => dispatch(Action.loadItem(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)

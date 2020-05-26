import React from 'react'
import PropTypes from 'prop-types'
import { PokemonType } from '@/types'
import { capitalize } from '@/core/helpers'
import classes from './Stats.module.scss'

type Props = {
	item: PokemonType
}

const Stats: React.FC<Props> = ({ item }) => (
	<div>
		<img src={item.pic} key={item.id} className={classes.pic} alt="pokemon" />
		<table className={classes.stats}>
			<caption className={classes.name}>{ capitalize(item.name) }</caption>
			<tbody>
				<tr>
					<td>Type(s)</td>
					<td>{ item.types.join(', ') }</td>
				</tr>
				{item.stats.map((s: { name: string, stat: number }, index: number) => (
					<tr key={index}>
						<td>{ capitalize(s.name) }</td>
						<td>{ s.stat }</td>
					</tr>
				))}
			</tbody>
		</table>
	</div>
)

Stats.propTypes = {
	item: PropTypes.object.isRequired
}

export default Stats

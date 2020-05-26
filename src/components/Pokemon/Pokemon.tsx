import React, { useEffect } from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import PropTypes, { InferProps } from 'prop-types'

import { showInfo } from '@s/actions/pokedex'
import { scrollToBottom } from '@/core/helpers'
import { PokemonType } from '@/types'
import './Pokemon.scss'

type Props = {
	item: PokemonType
	initialRender: boolean,
	showInfo: (id: number) => void
}

const Pokemon: React.FC<Props> = (
	{ item, initialRender, showInfo }
	: InferProps<typeof Pokemon.propTypes>) => {

	useEffect(() => {
		if (!initialRender) {
			scrollToBottom()
		}
	}, [initialRender])

	return (
		<div className="tile">
			<div className="tile-pic-container">
				<img
					className="tile-pic"
					data-id={item.id}
					data-name={item.name}
					src={item.pic}
					onClick={(event: React.MouseEvent) => showInfo(event.target.dataset.id)}
				/>
			</div>
			<span className="tile-name">{item.name}</span>
			<div className="tile-type-container">
				{item.types.map((type: string, index: number) => (
					<span className="tile-type" id={type} key={index}>
						{type}
					</span>
				))}
			</div>
		</div>
	)
}

Pokemon.propTypes = {
	item: PropTypes.object.isRequired,
	initialRender: PropTypes.bool.isRequired,
	showInfo: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
	showInfo: (id: number) => dispatch(showInfo(id))
})

export default connect(null, mapDispatchToProps)(Pokemon)

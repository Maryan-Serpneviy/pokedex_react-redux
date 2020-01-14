import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import './Pokemon.scss'

export default function Pokemon({ item, loadInfo, initialRender }) {
    const { id, name, sprites, types } = item

    useEffect(() => {
        if (!initialRender) {
            window.scrollTo(0, document.body.scrollHeight)
        }
    }, [])

    return (
        <div className="tile">
            <div className="tile-pic-container">
                <img
                    className="tile-pic"
                    data-id={id}
                    data-name={name}
                    src={sprites.front_default}
                    onClick={loadInfo}
                />
            </div>
            <span className="tile-name">{name}</span>
            <div className="tile-type-container">
                {types.map((type, index) => <span
                    className="tile-type" id={type.type.name} key={index}>
                        {type.type.name}
                    </span>)}
            </div>
        </div>
    )
}

Pokemon.propTypes = {
    item: PropTypes.object.isRequired,
    loadInfo: PropTypes.func.isRequired,
    initialRender: PropTypes.bool.isRequired
}

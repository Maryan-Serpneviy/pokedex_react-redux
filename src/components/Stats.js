import React from 'react'
import PropTypes from 'prop-types'
import './Stats.scss'

export default function Stats({ item }) {
    const { id, pic, name, types, stats, height, weight } = item

    return (
        <div className="tile-info-container">
            <img src={pic} key={id} className="stats-pic" alt="pokemon" />
            <table className="tile-info">
                <caption className="stats-name">{`${name.charAt(0).toUpperCase()}${name.slice(1)}`}</caption>
                <tbody>
                    <tr>
                        <td>Type(s)</td>
                        <td>{types.map((type, index) => (
                            <span key={index}>{`${type.type.name.charAt(0).toUpperCase()}${type.type.name.slice(1)}`} </span>))}
                        </td>
                    </tr>
                    {stats.map((stat, index) => (
                        <tr key={index}>
                            <td>{`${stat.stat.name.charAt(0).toUpperCase()}${stat.stat.name.slice(1)}`}</td>
                            <td>{stat.base_stat}</td>
                        </tr>
                    ))}
                    <tr>
                        <td>Height</td>
                        <td>{height}</td>
                    </tr>
                    <tr>
                        <td>Weight</td>
                        <td>{weight}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

Stats.propTypes = {
    item: PropTypes.object.isRequired
}

import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import './Main.scss'
import Tile from './Tile'
import Stats from './Stats'

export default function Main({ loadData, items, showInfo, item }) {
    const [itemsLoaded, setItemsLoaded] = useState(0)

    const ITEMS_PER_LOAD = 12

    useEffect(() => {
        for (let i = 1; i <= ITEMS_PER_LOAD; i++) {
            loadData(i)
        }
        setItemsLoaded(ITEMS_PER_LOAD)
    }, [])

    const loadMore = () => {
        for (let i = itemsLoaded + 1; i <= (itemsLoaded + ITEMS_PER_LOAD); i++) {
            loadData(i)
        }
        setItemsLoaded(itemsLoaded + ITEMS_PER_LOAD)
    }

    const loadInfo = event => {
        const id = event.target.attributes[1].value
        showInfo(id)
    }

    return (
        <section id="main">
            <main className="tiles-wrapper">
                {items.length && items.map(item => <Tile
                    key={item.id}
                    item={item}
                    loadInfo={loadInfo}
                />)}
                <button onClick={loadMore} className="btn btn-load">Load More</button>
            </main>
            <aside className="tile-info-wrapper">
                <span className="tile-info--load-count">Creatures loaded: {itemsLoaded}</span>
                {item && <Stats item={item} />}
            </aside>
        </section>
    )
}

Main.propTypes = {
    loadData: PropTypes.func.isRequired,
    showInfo: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired
}

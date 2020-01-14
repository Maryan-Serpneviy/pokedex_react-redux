import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import './Main.scss'
import Pokemon from '../Pokemon/Pokemon'
import Stats from '../Stats/Stats'

export default function Main(props) {
    const { fetchData, loadItem, item, items, showInfo } = props
    const [itemsLoaded, setItemsLoaded] = useState(0)

    const ITEMS_PER_LOAD = 12

    useEffect(() => {
        setItemsLoaded(ITEMS_PER_LOAD)
        for (let i = 1; i <= ITEMS_PER_LOAD; i++) {
            fetchData(i).then(data => loadItem(data))
        }
    }, [])

    const loadMore = () => {
        setItemsLoaded(itemsLoaded + ITEMS_PER_LOAD)
        for (let i = itemsLoaded + 1; i <= (itemsLoaded + ITEMS_PER_LOAD); i++) {
            fetchData(i).then(data => loadItem(data))
        }
    }

    const loadInfo = event => {
        const id = event.target.attributes[1].value
        showInfo(id)
    }

    return (
        <section id="main">
            <main className="tiles-wrapper">
                {items.length && items.map(item => <Pokemon
                    key={item.id}
                    item={item}
                    loadInfo={loadInfo}
                    initialRender={itemsLoaded === ITEMS_PER_LOAD}
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
    fetchData: PropTypes.func.isRequired,
    loadItem: PropTypes.func.isRequired,
    showInfo: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
    item: PropTypes.object
}

import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class Menu extends Component {

    render () {
        let {query, filteredPlaces, updateQuery} = this.props
        console.log(query)
        console.log(filteredPlaces)

        let showingPlaces
        if (query) {
        const match = new RegExp(escapeRegExp(query), 'i')
            showingPlaces = filteredPlaces.filter((place) => match.test(place.title))
            // A ideia era fazer algo assim mas isso não afeta diretamente o meu estado em app.js
            filteredPlaces = filteredPlaces.filter((place) => match.test(place))
        } else {
            showingPlaces = filteredPlaces
        }

        showingPlaces.sort(sortBy('title'))

        return (
            <div className="menu-wrapper">
                <h1>Featured Marilia's places</h1>
                <nav className="menu">
                    <label>Encontre um lugar:</label>
                    <input
                    className="search-place"
                    type="text"
                    placeholder="Pesquise ..."
                    value={query}
                    onChange={(event) => updateQuery(event.target.value)}
                    />
                    <ul>
                    {showingPlaces.map((place, i) => (
                        <li className="item" key={i}>
                        {place.title}
                        </li>
                    ))}
                    </ul>
                </nav>
            </div>
        )
    }
        
}
 
export default Menu;
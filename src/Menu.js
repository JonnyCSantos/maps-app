import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
 
function Menu(props) {
        const { places } = props.places
        const { query } = props.query

        let showingPlaces
        if (query) {
            
        const match = new RegExp(escapeRegExp(query), 'i')
        showingPlaces = places.filter((place) => match.test(place.title))
        } else {
            showingPlaces = places
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
                    value={props.query}
                    onChange={(event) => props.updateQuery(event.target.value)}
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
        );
}
 
export default Menu;
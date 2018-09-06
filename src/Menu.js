import React from 'react';
 
// Isso aqui pode ser transformado em um functional stateless component
function Menu (props) {
    const { query, showingPlaces, updateQuery, clearQuery, selectPlace, allPlaces} = props;
    return (
        <div className="menu-wrapper">
          <h1>Featured Marilia's places</h1>
         <nav className="menu">
            <label>Find a place:</label>
            <input
              className="search-place"
              type="text"
              placeholder="Pesquise ..."
              value={query}
              onChange={event => updateQuery(event.target.value)}
            />
            <ul>
              {showingPlaces.map((place, i) => (
                <li className="item" key={i} onClick={() => selectPlace(place.title)}>
                  {place.title}
                </li>
              ))}
            </ul>
            {showingPlaces.length !== allPlaces.length && (
                <div className='showing-contacts'>
                    <span>Now showing {showingPlaces.length} of {allPlaces.length} total</span>
                    <button onClick={clearQuery}>Show all</button>
                </div>
            )}
         </nav>
       </div>
     );
}

export default Menu;
import React, {Component} from 'react';

class Menu extends Component {
    state = {
        filteredPlaces: this.props.places
    }

    updatePlaces = (event) => {
        let updatePlaces =  this.state.filteredPlaces.filter(item => {
        return item.toLowerCase().search(
            event.toLowerCase()) !== -1;
        })
        this.setState({
            filteredPlaces: updatePlaces
        })
    }

    render(){
        return (
            <div>
                <h1>Featured Marilia's places</h1>
                <nav className="menu">
                    <label>Encontre um lugar:</label>
                    <input className="search-place" 
                        type="text" 
                        placeholder="Pesquise ..." 
                        onChange={(event) => this.updatePlaces(event.target.value)}
                    />
                    <ul>
                        {this.state.filteredPlaces.map((place, i) => (
                            <li className="item" key={i}>{place.title}</li>
                        ))}
                    </ul>    
                </nav>
            </div>
        )
    }
    
}

export default Menu

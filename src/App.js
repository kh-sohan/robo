import React, { Component } from 'react';
import Cardlist from './Cardlist';
import {robots} from './robots';
import SearchBox from './SearchBox';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            robots : robots,
            searchField : "",
        }
        this.onSearchChange = this.onSearchChange.bind(this);
    };

    onSearchChange(event) {
        this.setState({
                searchField: event.target.value,
            }
        )
    }
    
    render() {
        const cards = this.state.robots.filter((robot) => robot.name.toLowerCase().includes(this.state.searchField.toLowerCase()))
        return (
            <div className = 'tc'>
                <h2>Robofriends</h2>
                <SearchBox search = {this.onSearchChange}/>
                <Cardlist robots = {cards}/>
            </div>
        );
    }
}

export default App;
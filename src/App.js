import { Component } from 'react';
import Cardlist from './Cardlist';
import {robots} from './robots';
import SearchBox from './SearchBox';
import Scroll from './Scroll';

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
                <h1>Robofriends</h1>
                <SearchBox search = {this.onSearchChange}/>
                <Scroll>
                    <Cardlist robots = {cards}/>
                </Scroll>
            </div>
        );
    }
}

export default App;
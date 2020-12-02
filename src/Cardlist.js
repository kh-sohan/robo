import React, { Component} from 'react';
import Card from './Card';

class Cardlist extends Component {
    render() {
        const {robots} = this.props;
        return (
            robots.map((user, index) => 
                    <Card key = {user.id} id = {user.id} name = {user.name} email = {user.email} />
                )
            );
    }
}

export default Cardlist;
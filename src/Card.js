import { Component } from 'react';


class Card extends Component {
    render() {
        const {id, name, email} = this.props;
        return (
            <div className = "bg-light-green dib br3 ma2 pa3 grow">
                <img alt = 'robots' src = {`https://robohash.org/${id}?200x200`} />
                <h2>{name}</h2>
                <h3>{email}</h3>
            </div>
        );
    }
}

export default Card;
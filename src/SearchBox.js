function SearchBox(props) {
    const {search} = props;
    return (
        <div className = 'pa2'>
            <input
                className = 'pa2 ba b--green blue'
                type="search" 
                placeholder="search friends"
                onChange = {search}
                />
        </div>
    );
}

export default SearchBox;
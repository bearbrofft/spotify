import React from "react";
import './Searchbar.css';

export class Searchbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { term: "" };
        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
    }

    search() {
        this.props.onSearch(this.props.term);
    }

    handleTermChange(e) {
        this.setState({ term: e.target.value });
    }



    render () {
        return (
            <div className="Searchbar">
                <input placeholder="Enter a Song, Artist, or Album" onChange={this.handleTermChange} /> 
                <button className="SearchButton">Search</button>
            </div>
        );
    }
}
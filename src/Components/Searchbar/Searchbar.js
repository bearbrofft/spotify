import React from "react";
import './Searchbar.css';

export class Searchbar extends React.Component {
    render () {
        return (
            <div className="Searchbar">
                <input placeholder="Enter a Song, Artist, or Album" /> 
                <button className="SearchButton">Search</button>
            </div>
        );
    }
}
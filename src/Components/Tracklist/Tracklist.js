import React from "react";
import { Track } from "../Track/Track";
import "./Tracklist.css";

export class Tracklist extends React.Component {
    render() {
        return (
           <div className="Tracklist">
            {this.props.tracks.map(song => {
                return (
                    <Track 
                    key={song.id} 
                    track={song}
                    onAdd={this.props.onAdd}
                    onRemove={this.props.onRemove}
                    isRemoval={this.props.isRemoval} />
                )
            })}
           </div>
        );
    }
}
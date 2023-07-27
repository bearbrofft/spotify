import React from "react";
import "./Playlist.css";

export class Playlist extends React.Component {
    render() {
        return (
           <div className="Playlist">
            <input defaultValue={"New Playlist"} />
            {/* <!-- Add Tracklist Component --> */}
            <button className="Playlist-save">Save To Spotify</button>
           </div>
        );
    }
}
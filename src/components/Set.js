import React, { Component } from 'react';
import Song from './Song';

class Set extends React.Component {
    constructor(props) {
        super(props);
        this.state = { songs: props.set.songs };
        //this.createSong = this.createSong.bind(this);
    }

    //createSong(newSong) {
    //  const newSongs = this.state.songs.slice();
    //  newSong.id = this.state.songs.length + 1;
    //  newSongs.push(newSong);
    //  this.setState({songs:newSongs});
    //}

    render() {
        const songRows = this.props.set.songs.map(s => <Song key={s.id} song={s}></Song>)
        return (
            <div>
                <h2>{this.props.set.title}</h2>
                <table className="bordered-table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                        </tr>
                    </thead>
                    <tbody>
                        {songRows}
                    </tbody>
                </table>
            </div>
        )
    };
}

export default Set;
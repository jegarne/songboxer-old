import React, { Component } from 'react';

class Song extends React.Component {
    render() {
        const song = this.props.song;
        return (
            <tr>
                <td>{song.id}</td>
                <td>{song.title}</td>
            </tr>
        )
    };
}

export default Song;
import React, { Component } from 'react';

class SongAdd extends React.Component {
	constructor() {
		super();
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		var form = document.forms.songAdd;
		this.props.createSong({
			title: form.title.value
		});
		form.title.value = "";
	}

	render() {
		return (
		  <div>
			<form name="songAdd" onSubmit={this.handleSubmit}>
            <input type="text" name="title" placeholder="Title"></input>
            <button>Add Song</button>
          </form>
        </div>
      )};
            }
}

export default SongAdd;
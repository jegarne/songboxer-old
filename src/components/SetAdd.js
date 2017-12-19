import React, { Component } from 'react';

class SetAdd extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        var form = document.forms.setAdd;
        this.props.createSet({
            title: form.title.value
        });
        form.title.value = "";
    }

    render() {
        return (
            <div>
                <form name="setAdd" onSubmit={this.handleSubmit}>
                    <input type="text" name="title" placeholder="Title"></input>
                    <button>Add Set</button>
                </form>
            </div>
        )
    };
}

export default SetAdd;
import React, { Component } from 'react';
import SetAdd from './SetAdd';
import Set from './Set';

class SetList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { sets: props.setList.sets };
        this.createSet = this.createSet.bind(this);
    }

    createSet(newSet) {
        const newSets = this.state.sets.slice();
        newSet.id = this.state.sets.length + 1;
        newSets.push(newSet);
        this.setState({ sets: newSets });
    }

    render() {
        const sets = this.props.setList.sets.map(s => <Set key={s.id} set={s}></Set>)
        return (
            <div>
                <h2>{this.props.setList.title}</h2>
                <SetAdd createSet={this.createSet} />
                {sets}
            </div>
        )
    };
}
export default SetList;
import React, { Component } from 'react';
import SetList from './SetList';
import SongFilter from './SongFilter';

class SetLists extends React.Component {
    constructor() {
        super();
        this.state = {
            setLists:
            [{
                id: 0, title: "Test",
                sets: [
                    { id: 0, title: "Set 1", songs: [{ id: 0, title: "test1" }, { id: 1, title: "test2" }] }
                    , { id: 1, title: "Set 2", songs: [{ id: 0, title: "test1" }, { id: 1, title: "test2" }] }
                ]
            }]
        };
        this.createSetlist = this.createSetlist.bind(this);
    }

    //componentDidMount() {
    //    this.loadData();
    //}

    //loadData() {
    //    setTimeout(() => {
    //        this.setState({ setLists: setLists });
    //    }, 500);
    //}

    createSetlist(newSetlist) {
        const newSetlists = this.state.setLists.slice();
        newSetlist.id = this.state.setLists.length + 1;
        newSetlists.push(newSetlist);
        this.setState({ setLists: newSetlists });
    }

    render() {
        const setLists = this.state.setLists.map(s => <SetList key={s.id} setList={s} />)
        return (
            <div>
                <h1>...</h1>
                <SongFilter />
                <hr />
                {setLists}
            </div>
        )
    };
}

export default SetLists;
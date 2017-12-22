import React, { Component } from 'react';
import { connect } from 'react-redux'
import SetList from '../set/SetList';
import SongFilter from '../song/SongFilter';
import { createStore } from 'redux'
import reducer from '../../reducers'

const store = createStore(reducer)

const SetLists = ({ setLists }) => (
    <ul>
        {store.getState()['setLists'].map(s =>
            <SetList
                key={s.id}
                setList={s}
            />
        )}
    </ul>
)

export default SetLists;
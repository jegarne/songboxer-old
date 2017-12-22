import React from 'react'
import { connect } from 'react-redux'
import { addSetList } from '../../actions'

let SetAdd = ({ dispatch }) => {
    let input

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                if (!input.value.trim()) {
                    return
                }
                dispatch(addSetList(input.value))
                input.value = ''
            }}>
                <input ref={node => {
                    input = node
                }} />
                <button type="submit">
                    Add Set
        </button>
            </form>
        </div>
    )
}
SetAdd = connect()(SetAdd)

export default SetAdd

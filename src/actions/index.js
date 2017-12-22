let nextSetListId = 3

export const ADD_TODO = 'ADD_TODO'

export const addSetList = (text) => ({
    type: 'ADD_TODO',
    id: nextSetListId++,
    text
})



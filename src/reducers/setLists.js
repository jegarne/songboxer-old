const mockSetLists = [{
    id: 0, title: "Test",
    sets: [
        { id: 0, title: "Set 1", songs: [{ id: 0, title: "test1" }, { id: 1, title: "test2" }] }
        , { id: 1, title: "Set 2", songs: [{ id: 0, title: "test1" }, { id: 1, title: "test2" }] }
        , { id: 1, title: "Set 3", songs: [{ id: 0, title: "test1" }, { id: 1, title: "test2" }] }
    ]
}]

const setLists = (state = mockSetLists, action) => {
    switch (action.type) {
        case 'ADD_SETLIST':
            return [
                ...state,
                {
                    id: action.id,
                    title: action.text,
                    sets: []
                }
            ]
        default:
            return state
    }
}

export default setLists
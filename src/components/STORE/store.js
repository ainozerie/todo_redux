const initialState = {
    notes: [
        {id: 1, title: 'personal', note: 'buy milk', done: false},
        {id: 2, title: 'personal', note: 'call mum', done: false},
        {id: 3, title: 'work', note: 'finish project', done: false},
        {id: 4, title: 'work', note: 'send report', done: false}
    ]
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_NOTE':
            return {
                notes: [
                    ...state.notes,
                    {
                        id: state.notes.length + 1,
                        title: action.payload.title,
                        note: action.payload.note,
                        done: false
                    }
                ]
            }
        case 'DELETE_NOTE':
            const updatedArray = state.notes.filter(
                note => note.id !== action.payload
            )
            return {
                ...state,
                notes: updatedArray
            }
        case 'FINISH_NOTE':
            const finishedArray = state.notes.map(
                note => {
                    return note.id == action.payload ? {...note, done: true} : {...note};
                }
            )
            return {
                ...state,
                notes: finishedArray
            }
        default :
            return state;
    }
}

export default reducer;
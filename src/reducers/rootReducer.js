const initState = {
    posts: [
        {id: '1', title: 'First title', body: 'This is my body'},
        {id: '2', title: 'Second title', body: 'This is the second body'},
        {id: '3', title: 'Third title', body: 'This is my third body'},
    ]
}

const rootReducer = (state =initState, action) => {
    return state;
}

export default rootReducer
import { DELETE_POST, ADD_POST } from '../actions/postActions';

const initState = {
    posts: [
        {id: '1', title: 'First title', body: 'This is my body'},
        {id: '2', title: 'Second title', body: 'This is the second body'},
        {id: '3', title: 'Third title', body: 'This is my third body'},
    ]
}

const rootReducer = (state = initState,  action) => {
    switch(action.type) {
        case DELETE_POST:
            let newPosts = state.posts.filter(post => {
                return action.id !== post.id
            });
            return {
                ...state,
                posts: newPosts
            };
            break;
        case ADD_POST:
            return {
                ...state,
                posts: state.posts.concat({id: action.id, title: action.title, body: action.body})
            };
            console.log(state, "state")
            break;
        default:
            return state;
    }

    return state;
}

export default rootReducer
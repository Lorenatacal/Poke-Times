import { DELETE_POST, ADD_POST, EDIT_POST } from '../actions/postActions';

const initState = {
    posts: [
        {id: '1', title: 'First title', body: 'This is my body'},
        {id: '2', title: 'Second title', body: 'This is the second body'},
        {id: '3', title: 'Third title', body: 'This is my third body'},
    ]
};

const rootReducer = (state = initState,  action) => {
    let newPosts;
    switch(action.type) {
        case DELETE_POST:
            newPosts = state.posts.filter(post => {
                return action.id !== post.id
            });
            return {
                ...state,
                posts: newPosts
            };
        case ADD_POST:
            return {
                ...state,
                posts: state.posts.concat({id: action.id, title: action.title, body: action.body})
            };
        case EDIT_POST:
            newPosts = state.posts.map(post => post).map(post => {
                if (post.id === action.id) {
                    post.title = action.title;
                    post.body = action.body;
                }
                return post
            });
            console.log(newPosts, "new")
            return {
                ...state,
                posts: newPosts,
            };
        default:
            return state;
    }
}

export default rootReducer
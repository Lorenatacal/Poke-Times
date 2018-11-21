import { DELETE_POST } from '../actions/postActions';

const initState = {
    posts: [
        {id: '1', title: 'First title', body: 'This is my body'},
        {id: '2', title: 'Second title', body: 'This is the second body'},
        {id: '3', title: 'Third title', body: 'This is my third body'},
    ]
}

const rootReducer = (state = initState, action) => {
    //change this to switch => case 1 deletePost
    if(action.type === DELETE_POST) {
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id
        });
        return {
            ...state,
            // spread operator
            posts: newPosts
        }
    }
    //case 2 (add postReducer)
    return state;
}

export default rootReducer
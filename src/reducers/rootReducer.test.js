import rootReducer from './rootReducer';
import {
    DELETE_POST,
    ADD_POST,
    EDIT_POST,
} from '../actions/postActions';

test("rootReducer should return the initial state", () => {
    expect(rootReducer(undefined, {})).toEqual({
        posts: [
            {id: '1', title: 'First title', body: 'This is my body'},
            {id: '2', title: 'Second title', body: 'This is the second body'},
            {id: '3', title: 'Third title', body: 'This is my third body'},
        ]
    })
})
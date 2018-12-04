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
});

test("rootReducer should handle DELETE_POST" , () => {
    const action = {
        type: DELETE_POST,
        id: "3",
    }
    const state = rootReducer(undefined, action);
    const expectedState = {
        posts: [
            {id: '1', title: 'First title', body: 'This is my body'},
            {id: '2', title: 'Second title', body: 'This is the second body'},
        ]
    };

    expect(state).toEqual(expectedState);
})

test("rootReducer should handle ADD_POST", () => {
    const action = {
        type: ADD_POST, 
        id: '4', 
        title: 'Forth title', 
        body: 'This is my forth body',
    };
    const state = rootReducer(undefined, action);
    const expectedState = {
        posts: [
            {id: '1', title: 'First title', body: 'This is my body'},
            {id: '2', title: 'Second title', body: 'This is the second body'},
            {id: '3', title: 'Third title', body: 'This is my third body'},
            {id: '4', title: 'Forth title', body: 'This is my forth body'},
        ]
    };

    expect(state).toEqual(expectedState);
})

test("rootReducer should handle EDIT_POST", () => {
    const action = {
        type: EDIT_POST,
        id: '3',
        title: "New title",
        body: "New body",
    }
    const state = rootReducer(undefined, action);
    const expectedState = {
        posts: [
            {id: '1', title: 'First title', body: 'This is my body'},
            {id: '2', title: 'Second title', body: 'This is the second body'},
            {id: '3', title: 'New title', body: 'New body'},
        ]
    };
    expect(state).toEqual(expectedState);
})
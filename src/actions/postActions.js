export const DELETE_POST = 'DELETE_POST';
export const ADD_POST = 'ADD_POST';
export const EDIT_POST = 'EDIT_POST';

export const deletePost = (id) => {
    return {
        type: DELETE_POST,
        id: id,
    }
}

export const addPost = (id, title, body) => {
    return {
        type: ADD_POST,
        id,
        title,
        body,
    }
}

//action creator


export const editPost = (id, title, body) => {
    return {
        type: EDIT_POST,
        id,
        title,
        body,
    }
}
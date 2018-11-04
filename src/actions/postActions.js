export const deletePost = (id) => {
    return {
        type: 'DELETE_POST',
        id: id,
    }
}

export const addPost = (id) => {
    return {
        type: 'ADD_POST',
        id: id,
    }
}
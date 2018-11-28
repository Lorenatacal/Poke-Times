import { 
    deletePost, 
    addPost, 
    editPost, 
} from './postActions';
import {
    DELETE_POST,
    ADD_POST,
    EDIT_POST,
} from './postActions'

test("deletePost should create an action to delete a post", () => {
    const id = "1"
    const expectedAction = {
        type: DELETE_POST,
        id
    }
    expect(deletePost(id)).toEqual(expectedAction)
})
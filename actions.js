import uuid from 'uuid';

export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN';

function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
    }
};
function editComment(id, text) {
    return {
        type: EDIT_COMMENT,
        text,
        id: id
    }
}
function deleteComment(id) {
    return {
        type: DELETE_COMMENT,
        text: '',
        id: id
    }
}
function thumbUp(id) {
    return {
        type: THUMB_UP_COMMENT,
        text,
        id: id,
        votes: votes +1
    }
}
function thumbDown(id) {
    return {
        type: THUMB_DOWN_COMMENT,
        text,
        id: id,
        votes: votes -1
    }
}
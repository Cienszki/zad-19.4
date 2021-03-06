import {ADD_COMMENT} from './actions';
import {EDIT_COMMENT} from './actions';
import {DELETE_COMMENT} from './actions';
import {THUMB_UP_COMMENT} from './actions';
import {THUMB_DOWN_COMMENT} from './actions';



const initialState = {
    comments: [],
    users: []
};


function comments(state = [], action) {
    switch(action.type) {
        case ADD_COMMENT:
            return [{
                id: action.id,
                text: action.text,
                votes: 0
            }
            , ...state.comments];
        case EDIT_COMMENT: 
            return [{
                id: action.id,
                text: action.text,                
            }, ...state.comments];
        case DELETE_COMMENT:
            return 
                comments: state.comments.filter(comment => comment.id !== action.id);
        case THUMB_UP_COMMENT:
            return [{
                id: action.id,
                text: action.text,
                votes: action.votes +1
            }
            , ...state.comments];    
        case THUMB_DOWN_COMMENT:
            return [{
                id: action.id,
                text: action.text,
                votes: action.votes -1
            }
            , ...state.comments];    
    }
}

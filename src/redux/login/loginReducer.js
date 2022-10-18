

import { ADD_ITEM, DELETE_ITEM, DIRECTION,SET_TEXT } from '../constants/index.js'

const initialState = {
    numOfItems: 0,
    activeDir: 'rtl',
    text: [],
    
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state,
                numOfItems: state.numOfItems + 1,
            };
        case DIRECTION:
            return {
                ...state,
                activeDir: action.payload,
            };
        case SET_TEXT:
            return {
                ...state,
                text: action.payload,
            };

        case DELETE_ITEM:
            return {
                ...state,
                numOfItems: state.numOfItems - 1,
            };
        default:
            return state;
    }
};
export default loginReducer;
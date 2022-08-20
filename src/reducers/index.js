import { combineReducers } from "redux";
import { SET_DISPLAY } from "../actions/types";

const SAMPLE = {
    1: {
        id: 1,
        title: 'Wash the cat',
        note: 'Use room temperature soap',
        dueDate: new Date(2022, 8, 22, 11, 27),
        isDone: false
    },
    2: {
        id: 2,
        title: 'Boil water',
        note: 'Do not start with frozen water',
        dueDate: new Date(2022, 9, 22, 11, 27),
        isDone: true
    },
    3: {
        id: 3,
        title: 'Blend the potato',
        note: 'Add cold sugar',
        dueDate: new Date(2023, 3, 11, 11, 27),
        isDone: false
    }
}

const todoListReducer = (state = SAMPLE, action) => {
    switch(action.type){
        default:
            return state
    }
}

const renderListOptionReducer = (state = 'notdone', action) => {
    //possible types: 'notdone', 'done', 'both'
    switch(action.type){
        case SET_DISPLAY:
            return action.payload
        default:
            return state
    }
}

export default combineReducers({
    renderListOption: renderListOptionReducer,
    list: todoListReducer
})
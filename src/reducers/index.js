import { combineReducers } from "redux";
import { ADD_ITEM, CLOSE_MODAL, OPEN_MODAL, SET_DISPLAY } from "../actions/types";

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

const todoListReducer = (state = JSON.parse(localStorage.getItem('todoList')), action) => {
    switch(action.type){
        case ADD_ITEM:
            localStorage.setItem('todoList', JSON.stringify({...state, ...action.payload}))
            return {...state, ...action.payload}
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

const showModalReducer = (state = false, action) => {
    switch(action.type){
        case OPEN_MODAL:
            return {type: action.payload.type, id: action.payload.id}
        case CLOSE_MODAL:
            return false
        default:
            return state
    }
}

export default combineReducers({
    renderListOption: renderListOptionReducer,
    list: todoListReducer,
    showModal: showModalReducer
})
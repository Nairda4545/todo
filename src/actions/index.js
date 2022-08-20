import _ from "lodash"

import { 
    ADD_ITEM,
    CLOSE_MODAL, 
    OPEN_MODAL, 
    SET_DISPLAY 
} from "./types"

export const addItem = (item) => (dispatch, getState) => {
    const todoListLength = _.values(getState().list).length

    dispatch({type: ADD_ITEM, payload: {[todoListLength + 1]: {id: todoListLength + 1, ...item, dueDate: new Date(), isDone: false}}})
}

export const editItem = (params) => {
    
}

export const deleteItem = (params) => {

}

export const toggleItem = (params) => {
    
}

export const reorderItem = (params) => {

}

export const setDisplay = (renderOption) => {
    return {type: SET_DISPLAY, payload: renderOption }
}

export const openModal = () => {
    return {type: OPEN_MODAL}
}

export const closeModal = () => {
    return {type: CLOSE_MODAL}
}
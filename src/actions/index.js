import _ from "lodash"

import { 
    ADD_ITEM,
    CLOSE_MODAL, 
    OPEN_MODAL, 
    SET_DISPLAY 
} from "./types"

export const addItem = (item) => (dispatch, getState) => {
    const todoListLength = _.values(getState().list).length
    item.dueDate = new Date(item.dueDate)
    dispatch({type: ADD_ITEM, payload: {[todoListLength + 1]: {...item, id: todoListLength + 1}}})
}

export const editItem = (item) => {
    item.dueDate = new Date(item.dueDate)
    return {type: ADD_ITEM, payload: {[item.id]: {...item}}}
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

export const openModal = (modalType, itemId) => {
    return {type: OPEN_MODAL, payload: {type: modalType, id: itemId}}
}

export const closeModal = () => {
    return {type: CLOSE_MODAL}
}
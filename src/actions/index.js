import _ from "lodash"

import { 
    ADD_ITEM,
    CLOSE_MODAL, 
    DELETE_ITEM, 
    EDIT_ITEM, 
    OPEN_MODAL, 
    SET_DISPLAY, 
    TOGGLE_ITEM
} from "./types"

export const addItem = (item) => (dispatch, getState) => {
    const todoListLength = _.values(getState().list).length
    item.dueDate = new Date(item.dueDate)
    dispatch({type: ADD_ITEM, payload: {[todoListLength + 1]: {...item, id: todoListLength + 1}}})
}

export const editItem = (item) => {
    item.dueDate = new Date(item.dueDate)
    return {type: EDIT_ITEM, payload: {[item.id]: {...item}}}
}

export const deleteItem = (id) => {
    return {type: DELETE_ITEM, payload: id}
}

export const toggleItem = (id) => {
    return {type: TOGGLE_ITEM, payload: id}
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
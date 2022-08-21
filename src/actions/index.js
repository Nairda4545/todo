import _, { toInteger } from "lodash"

import { 
    ADD_ITEM,
    CLOSE_MODAL, 
    DELETE_ITEM, 
    EDIT_ITEM, 
    OPEN_MODAL, 
    REORDER_ITEM, 
    SET_DISPLAY, 
    TOGGLE_ITEM
} from "./types"

export const addItem = (item) => (dispatch, getState) => {
    const todoList = getState().list
    let newId = 1
    if(todoList){
        newId = toInteger(Object.keys(todoList)[Object.keys(todoList).length - 1]) + 1
    }
    item.dueDate = new Date(item.dueDate)
    dispatch({type: ADD_ITEM, payload: {[newId]: {...item, id: newId}}})
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

export const reorderItemUp = (id) => (dispatch, getState) => {
    const renderOption = getState().renderListOption
    const todoList = getState().list
    let keyHolder = 0
    if(renderOption !== 'both'){
        // Get list of keys
        Object.keys(todoList).forEach(key => {
            if(key < id && todoList[key].isDone === todoList[id].isDone){
                keyHolder = key
            }
        })
    }else{
        Object.keys(todoList).forEach(key => {
            if(key < id){
                keyHolder = key
            }
            
        })
    }
    keyHolder = toInteger(keyHolder)
    id = toInteger(id)
    dispatch({type: REORDER_ITEM, payload: {id, keyHolder}})
}

export const reorderItemDown = (id) => (dispatch, getState) => {
    const renderOption = getState().renderListOption
    const todoList = getState().list
    let keyHolder = 0
    if(renderOption !== 'both'){
        // Get list of keys
        Object.keys(todoList).forEach(key => {
            if(key > id && todoList[key].isDone === todoList[id].isDone && keyHolder == 0){
                keyHolder = key
            }
        })
    }else{
        Object.keys(todoList).forEach(key => {
            if(key > id && keyHolder == 0){
                keyHolder = key
            }
            
        })
    }
    keyHolder = toInteger(keyHolder)
    id = toInteger(id)
    dispatch({type: REORDER_ITEM, payload: {id, keyHolder}})
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
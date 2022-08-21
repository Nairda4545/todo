import React from "react";
import { connect } from "react-redux";
import _ from "lodash";

import { openModal, closeModal, editItem, deleteItem } from "../actions";
import Modal from "./Modal";

const List = (props) => {
    const renderDeleteButton = (itemId) => {
        return <button 
            className="ui right floated button negative" 
            onClick={(e) => {
                e.preventDefault()
                props.deleteItem(itemId)
                props.closeModal()
            }}>
                Delete
            </button>
    }

    const renderList = props.todoList.map(item => {
        const renderModal = (itemProps) => {
            if(props.showModal.type === 'edit' && props.showModal.id === itemProps.id){
                return <Modal 
                    onDismiss={props.closeModal}
                    onSubmitCallback={props.editItem}
                    action='Edit'
                    header='Edit item'
                    dueDate={new Date(itemProps.dueDate)}
                    isDone={itemProps.isDone}
                    title={itemProps.title}
                    note={itemProps.note}
                    id={itemProps.id}
                    renderDelete={renderDeleteButton}
                />
            }
        }

        const renderStatus = () => {
            if(item.isDone){
                return <div className="ui green label right floated content">Done</div>
            }else{
                return <div className="ui orange label right floated content">Ongoing</div>
            }
        }

        if((props.currentListOption === 'notdone' && item.isDone) || (props.currentListOption === 'done' && !item.isDone)){
            return null
        }
        return <div key={item.id} className='item content'>
                {renderModal(item)}
                <button className="ui right floated button" onClick={() => props.openModal('edit', item.id)}>Edit</button>
                <div className="right floated description">{new Date(item.dueDate).toDateString()}</div>
                {renderStatus()}
                <div className="header">{item.title}</div>
                <div className="description">{item.note}</div>
            </div>
    })

    if(!props.todoList){return <div>Loading</div>}

    return <div className="ui celled list">{renderList}</div>
}

const mapStateToProps = (state) => {
    return {
        todoList: _.values(state.list),
        currentListOption: state.renderListOption,
        showModal: state.showModal
    }
}

export default connect( mapStateToProps, { openModal, closeModal, editItem, deleteItem } )(List)